
import './App.css';
import { useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContaniner from './components/ItemListContainer/ItemListContainer';


function App() {
const []= useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ItemListContaniner greeting="Bienvenidos"/>
        </header>
        <p>
          Dario Perez comision 41080- CoderHouse
        </p>
      
    </div>
  )
}

export default App;
