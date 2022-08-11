
import { useState, createContext } from "react"

export const CartContext = createContext()

export  const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (ServiciosAdd)=>{
        setCart([...cart, ServiciosAdd])
    }
    console.log(cart)
    
    
    return(
        <CartContext.Provider value={{cart, addItem}}>
            {children}
        </CartContext.Provider>  
    
    )
  
}
