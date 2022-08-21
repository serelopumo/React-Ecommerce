import './Cart.css';
import {useContext} from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = ()=>{
    const { traerCarrito } = useContext(CartContext)
    const products = traerCarrito()
    return(
        <>
            <h3>Tu carrito</h3>
            {products.length<=0?<div><p>no hay nada</p><Link to='/'><button className='btnVolverHome'>Agregar productos</button></Link></div>:<div>{products} <button className='btnVolverHome'>Terminar compra</button></div>}
        </>
    )
}

export default Cart;