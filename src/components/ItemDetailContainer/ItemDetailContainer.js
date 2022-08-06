import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById} from '../../asyncMock.js';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { productId } = useParams();

  useEffect(() => {
    getProductById(productId)
        .then(product => {
            setProduct(product)
        })
}, [productId])

  return (
    <div className="ItemContainer">
      <ItemDetail {...product}/>
    </div>
  );
};
export default ItemDetailContainer;
