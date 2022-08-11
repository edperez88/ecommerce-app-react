
import './App.css';
import  Navbar from './components/Navbar/Navbar';
import  ItemListContaniner from './components/ItemListContainer/ItemListContainer';
import  ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import  CartWidget from './components/CartWidget/CartWidget';
import { useState, createContext } from 'react';
import { CartContextProvider } from './context/CartContext';
import { UserContextProvider } from './context/UserContext';

export const cartContext = createContext()

function App() {
     
    const [cart, setCart]= useState([])

    const addItem = (ServiciosAdd)=>{

      setCart([...cart, ServiciosAdd])
      
    }
    console.log(cart)


  return (
    <div className="App">
       <header className="App-header">
       <UserContextProvider>
        <CartContextProvider>
         <BrowserRouter>
           <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContaniner greeting="Todos los Servicios"/>}/>
              <Route path='/category/:categoryId' element={<ItemListContaniner greeting="Servicios Disponibles"/>}/>
              <Route path='/detail/:serviceId' element={<ItemDetailContainer addItem={addItem}/>}/>
              <Route path='/cart' element={CartWidget}/>
            </Routes>
         </BrowserRouter>
        </CartContextProvider>
       </UserContextProvider>
      </header>
        <p>
          Dario Perez comision 41080- CoderHouse
        </p>
      
    </div>
  )
}

export default App;
