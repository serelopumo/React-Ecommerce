import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  const handleOnAdd = (cantidad) =>{
    console.log(`Perfecto agregaste al carrito ${cantidad} productos`)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <ItemListContainer saludo="Disfrutá del Afternoon Tea  con nuestros Blends Orgánicos. Compartí un momento" />
      <ItemCount onAdd={handleOnAdd} stock={5} initial={1} />
    </div>
  );
}

export default App;
