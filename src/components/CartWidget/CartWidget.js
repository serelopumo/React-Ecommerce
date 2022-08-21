import './CartWidget.css';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
 const { getQuantity } = useContext(CartContext)
 const cantidad = getQuantity()
 
    return(
        <div className="cartWidget">
            {cantidad>0?<> <img className="cartWidget--image" src='/images/shopping-cart.png' alt="card-widget"/>
            <h4 className="cartWidget--text">{cantidad}</h4></>:<></>}
           
        </div>
    )
}
export default CartWidget;