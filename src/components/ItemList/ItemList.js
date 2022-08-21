import "./ItemList.css";
import Item from "../Item/Item.js";
import { memo } from 'react'

const ItemList = ({ products }) => {
  return (
    <div className="Item--div">
      {products.map((producto) => (
        <Item key={producto.id} {...producto} />
      ))}
    </div>
  );
};

export default memo(ItemList)
