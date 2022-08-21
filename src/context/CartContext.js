import { createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart)
  const addItem = (item) => {
    if (!isInCart(item.id)) {
      setCart([...cart, item]);
    } else {
      const cartUpdated = cart.map((product) => {
        if (product.id === item.id) {
          const productUpdated = {
            ...product,
            quantity: item.quantity
          };
          return productUpdated;
        } else {
          return product;
        }
      });
      setCart(cartUpdated);
    }
  };
  const clear = () => {
    setCart([]);
  };

  const getQuantity = () => {
    let accu = 0
    cart.forEach(product => {
    accu += product.quantity
    })

    return accu
}


const traerCarrito = ()=>{
  const carrito= cart.map((product) => {
    return (
      <div className="DetalleProducto" key={product.id}>
        <h3>{product.tittle}</h3>
        <h3>Cantidad: {product.quantity}</h3>
        <h3>Precio: ${product.price}</h3>
        {console.log(product.id)}
        <button onClick={()=> removeItem(product.id)}>Eliminar</button>
      </div>
    )
  })
  return carrito
}

  const removeItem = (id) => {
    const newCartWithoutProduct = cart.filter((product) => product.id !== id);
    setCart(newCartWithoutProduct);
  };
  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };
  const getProductQuantity = (id) => {
    const product = cart.find((prod) => prod.id === id);
    return product?.quantity;
  };
 
  return (
    <CartContext.Provider value={{ cart, clear, isInCart, addItem, removeItem, getProductQuantity,getQuantity,traerCarrito }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
