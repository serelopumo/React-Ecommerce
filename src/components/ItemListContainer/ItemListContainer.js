import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.js";
import { getProducts } from "../../asyncMock.js";
import { useEffect, useState } from "react";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <div className="ItemListContainer">
      <h2>{saludo}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
