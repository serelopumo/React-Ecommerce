import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({onAdd,stock,initial}) =>{
    const [count,setCount] = useState(initial)
    const agregar = ()=>{
        (count >= stock) ? alert("No hay suficiente stock")  : setCount(count + 1) 
    }
    const quitar = ()=>{
        (count > 0) ? setCount(count - 1) : alert("No hay mas productos por quitar")
        
    }
    
    return(
        <div className="ItemCount">
            <div className="ItemCount__contenido">
                <button onClick={()=>{quitar()}}>-</button>
                <h3 className="cantidad">{count}</h3>
                <button onClick={()=>{agregar()}}>+</button>
            </div>
            <button onClick={()=>{onAdd(count)}} className="btnAgregar">Agregar al carrito</button>
        </div>
    )
}


export default ItemCount;