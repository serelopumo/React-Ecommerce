import { useState } from "react";
import "./ItemCount.css";
import Swal from 'sweetalert2'

const ItemCount = ({stock = 0, initial = 1, onAdd,price}) =>{
    const [count,setCount] = useState(initial)
    const agregar = ()=>{
        (count >= stock) ? 
        Swal.fire({
            icon: 'error',
            title: 'No hay suficiente stock',
            showConfirmButton: false,
            timer: 2000
          }): setCount(count + 1) 
    }
    const quitar = ()=>{
        (count > 1) ? setCount(count - 1) : Swal.fire({
            icon: 'error',
            title: "No hay mas productos por quitar",
            showConfirmButton: false,
            timer: 1500
          })
    }
    
    return(
        <div className="ItemCount">
            <div className="ItemCount__contenido">
                <button onClick={()=>{quitar()}}>-</button>
                <h3 className="cantidad">{count}</h3>
                <button onClick={()=>{agregar()}}>+</button>
            </div>
            <button onClick={()=>{onAdd(count)}} className="btnAgregar">Agregar al carrito - {price}</button>
        </div>
    )
}


export default ItemCount;