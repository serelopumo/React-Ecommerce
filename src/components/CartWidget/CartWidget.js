import './CartWidget.css';
import Carrito from '../../shopping-cart.png'

const CartWidget = () => {
<script src="https://kit.fontawesome.com/aa72380eaf.js" crossorigin="anonymous"></script>
    return(
        <div className="cartWidget">
            <img className="cartWidget--image" src={Carrito} alt="card-widget"/>
            <h4 className="cartWidget--text">1</h4>
        </div>
    )
}
export default CartWidget;