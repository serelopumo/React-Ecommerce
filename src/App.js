import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <ItemListContainer saludo="Disfrutá del Afternoon Tea  con nuestros Blends Orgánicos.<br/>
            Compartí un momento"/>
    </div>
  );
}

export default App;
