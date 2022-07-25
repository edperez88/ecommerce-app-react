
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContaniner from './components/ItemListContainer/ItemListContainer';
import Contador from './components/Counter/Counter';


function App() {
const [show, setShow]= useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        {show ? <Contador/> : null}
        <button onClick={()=> setShow(!show)} Stock={10}>show/Hide</button>
        <a>
        <ItemListContaniner greeting="Bienvenidos"/>
          Dario Perez comision 41080- CoderHouse
        </a>
      </header>
    </div>
  );
}

export default App;
