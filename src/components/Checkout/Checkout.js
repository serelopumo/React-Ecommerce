import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"
import './Checkout.css'
import { db } from "../../services/firebase"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const { cart, getQuantity, getTotal, clear } = useContext(CartContext) 

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")

    const navigate = useNavigate()

    const totalQuantity = getQuantity()
    const total = getTotal()

    const createOrder = async () => {
        setIsLoading(true)
        try {
            const objOrder = {
                buyer: {
                    firstName: nombre,
                    lastName: apellido,
                    phone: telefono,
                    address: direccion
                },
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            }
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            
            const { docs } = productsAddedFromFirestore
    
            const outOfStock = []
    
            const batch = writeBatch(db)
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                Swal.fire({
                    icon: 'success',
                    title: `El id de su orden es: ${orderAdded.id}`,
                    showConfirmButton: false,
                    timer: 2000
                  })
                clear()
                setOrderCreated(true)
                setTimeout(() => {
                    navigate('/')
                }, 3000)
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Hay productos que estan fuera de stock',
                    showConfirmButton: false,
                    timer: 2000
                  })
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    if(isLoading) {
        return <h1>Se esta generando tu orden...</h1>
    }

    if(orderCreated) {
        return <h1>La orden fue creada correctamente, sera redirigido al listado de productos en 3 segundos</h1>
    }

    return (
        <>
            <form className="form">
                <h2>Formulario</h2>
                <input type='text' placeholder="Nombre" value={nombre} onChange={e=> setNombre(e.target.value)}></input>
                <input type='text' placeholder="Apellido" value={apellido} onChange={e=> setApellido(e.target.value)}></input>
                <input type='number' placeholder="Telefono" value={telefono} onChange={e=> setTelefono(e.target.value)}></input>
                <input type='text' placeholder="Direccion" value={direccion} onChange={e=> setDireccion(e.target.value)}></input>
                <button className="orden" onClick={createOrder}>Generar Orden</button>
            </form>
           
        </>
    )
}

export default Checkout