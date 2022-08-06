import "./Item.css";
import { Link } from 'react-router-dom'

const Item = ({id,tittle,tittleResumido,price,pictureUrl}) => {
  return(
    <div className="Item">
        <img className="Item__image" src={pictureUrl} alt={tittle}/>
        <div className="Item__content">
            <div className="Item__detalle">
              <h3>{tittleResumido}</h3>
              <h4>{price}</h4>
            </div>
            
            <Link to={`/detail/${id}`} className="btnDetalle">VER DETALLE</Link>
        </div>
    </div>
  )
};

export default Item;
