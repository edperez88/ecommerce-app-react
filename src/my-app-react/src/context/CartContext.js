
import { useState, createContext } from "react"

export const CartContext = createContext()

export  const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (ServiciosAdd)=>{
        if(!isInCart(ServiciosAdd.id)){
            setCart([...cart, ServiciosAdd])
        } else{

            const cartUpdated = cart.map(serv => {
                if(serv.id === ServiciosAdd.id){
                    const servUpdated = {
                        ...serv,
                        quantity : ServiciosAdd.quantity
                    }

                    return servUpdated
                }else{

                    return serv
                }
            })            
            setCart(cartUpdated)
        }

    }

    const getTotalQuantity = (id)=>{
        const servicio = cart.find(serv => serv.id === id)
        return servicio?.quantity
    }

    const isInCart = (id)=>{
        return cart.some(serv => serv.id === id)
    }

    const deleteItem = (id)=>{
        const cartWithoutItem = cart.filter(serv => serv.id !== id)
        setCart(cartWithoutItem)
        
    }

    const vaciarCarro = ()=>{
        setCart([])
    }

    const getQuantity = ()=>{
        let accu = 0
        cart.forEach(serv => {
            accu += serv.quantity
        })  
        return accu
    }


    const getTotal = () => {
        let accu = 0
        cart.forEach(serv => {
            accu += serv.quantity * serv.precio
        })

        return accu
    }
    
    return(
        <CartContext.Provider value={{cart, getQuantity, getTotal, addItem, isInCart, deleteItem, vaciarCarro, getTotalQuantity}}>
            {children}
        </CartContext.Provider>  
    
    )
  
}
