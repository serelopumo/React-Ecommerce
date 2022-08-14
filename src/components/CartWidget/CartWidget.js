import './CartWidget.css';
import Carrito from '../../shopping-cart.png'
import CartContext from '../../context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
 const { getQuantity } = useContext(CartContext)
 const cantidad = getQuantity()
 
    return(
        <div className="cartWidget">
            <img className="cartWidget--image" src={Carrito} alt="card-widget"/>
            <h4 className="cartWidget--text">{cantidad}</h4>
        </div>
    )
}
export default CartWidget;