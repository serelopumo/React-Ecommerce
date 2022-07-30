import "./ItemList.css";
import Item from "../Item/Item.js";

const ItemList = ({ products }) => {
  return (
    <div className="Item--div">
      {products.map((producto) => (
        <Item key={producto.id} product={producto} />
      ))}
    </div>
  );
};

export default ItemList;
