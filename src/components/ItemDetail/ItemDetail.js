import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import {useState, useContext} from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({id,tittle,price,description,pictureUrl,stock}) =>{
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)
    

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, tittle, price, quantity
        }

        addItem(productToAdd)
    }

    const productQuantity = getProductQuantity(id)
    return(
        <div className='ItemContain'>
            <img src={pictureUrl} alt={tittle}/>
            <div className='ItemContain__text'>
                <hr/>
                <h2>{tittle}</h2>
                <p>{description}</p>
                <hr/>
            {
                    quantityToAdd === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity}/>
                    ) : (
                        <Link className='linkFinalizo' to='/cart'>Finalizar compra</Link>
                    )
                }
            </div>
        </div>
    )
}
export default ItemDetail;