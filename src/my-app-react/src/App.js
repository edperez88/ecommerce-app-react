
import './App.css';
import { useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContaniner from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  const []= useState(true)
  const[cart, setCart]= useState([])

  const addItem = (servicioAdd)=>{
    setCart([...cart, servicioAdd])
  }

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContaniner greeting="Todos los Servicios"/>}/>
              <Route path='/category/:categoryId' element={<ItemListContaniner greeting="Servicios Disponibles"/>}/>
              <Route path='/detail/:serviceId' element={<ItemDetailContainer addItem={addItem}/>}/>
              <Route path='/cart' element={<CartWidget/>}/>
            </Routes>
        
        </BrowserRouter>
      </header>
        <p>
          Dario Perez comision 41080- CoderHouse
        </p>
      
    </div>
  )
}

export default App;
