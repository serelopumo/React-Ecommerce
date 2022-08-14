import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
        <Navbar className="App-header"/>
          <Routes>
              <Route exact path='/' element={<ItemListContainer saludo="Disfrutá del Afternoon Tea  con nuestros Blends Orgánicos. Compartí un momento" />}/>
              <Route exact path ='/category/:categoryId' element={<ItemListContainer saludo='Listado filtrado' />}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />  
              <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
