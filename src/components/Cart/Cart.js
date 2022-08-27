import './Cart.css';
import {useContext} from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = ()=>{
    const { traerCarrito,getTotal, clear } = useContext(CartContext)
    const products = traerCarrito()
    const total = getTotal()
    return(
        <>
            <h3 className='tituloCarro'>Tu carrito</h3>
            {products.length<=0?<div><p className='noHayProductos'>No hay nada en el carrito</p><Link to='/'><button className='btnAgrego'>Agregar productos</button></Link></div>:<div className='siHayCompra'>{products} <p className='pTotal'>Total: $ {total}</p><div className='divBtnFinalizo'><Link to='/checkout' className='btnVolverHome'>Terminar compra</Link><button className='btnVolverHome' onClick={clear}>Vaciar Carrito</button></div></div>}
        </>
    )
}

export default Cart;