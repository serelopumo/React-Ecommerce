import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({tittle,price,description,pictureUrl,stock}) =>{
    const handleOnAdd = (cantidad) => {
        console.log(`Perfecto agregaste al carrito ${cantidad} productos`);
     }
    return(
        <div className='ItemContain'>
            <img src={pictureUrl} alt={tittle}/>
            <div className='ItemContain__text'>
                <h2>{tittle}</h2>
                <p>{description}</p>
                <ItemCount onAdd={handleOnAdd} stock={stock} initial={1} price={price}/> 
            </div>
        </div>
    )
}
export default ItemDetail;