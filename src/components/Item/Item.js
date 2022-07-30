import "./Item.css";

const Item = ({product}) => {
  return(
    <div className="Item">
        <img className="Item__image" src={product.pictureUrl} alt={product.tittle}/>
        <div className="Item__content">
            <div className="Item__detalle">
              <h3>{product.tittle}</h3>
              <h4>{product.price}</h4>
            </div>
            <button className="btnDetalle">VER DETALLE</button>
        </div>
    </div>
  )
};

export default Item;
