import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.js";
import { getProducts, getProductsByCategory} from "../../asyncMock.js";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();

  useEffect(() => {
   const asyncFunction = categoryId ? getProductsByCategory : getProducts
   
   asyncFunction(categoryId).then(products => {
        setProducts(products)
    })
  }, [categoryId]);

  return (
    <div className="ItemListContainer">
      <h2>{saludo}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
