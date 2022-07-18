import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContaniner from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ItemListContaniner greeting="Bienvenidos"/>
        <a>
          Dario Perez comision 41080- CoderHouse
        </a>
      </header>
    </div>
  );
}

export default App;
