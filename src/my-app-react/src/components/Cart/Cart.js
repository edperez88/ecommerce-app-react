import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import  CartItem from "../CartItem/CartItem";


const Cart = () =>{

    const { cart, getTotal, getTotalQuantity, vaciarCarro}= useContext(CartContext);

    const quantity = getTotalQuantity()
    const total = getTotal()
    


    if (quantity === 0){

        return(

        <div className>
            <h1 className="cartTitle">Carrito Vacio</h1>
        </div>
        )    
    }
    return(
        <div>
            <h2> cart </h2>
            {cart.map(serv =>(<CartItem key={serv.id}{...serv}/>))}
            <h4>Total a Abonar: $ {total}</h4>
            <button onClick={() => vaciarCarro()} className="btn btn-dark">Vaciar Carrito</button>
            <button className="btn-danger">Generar Orden</button>
        </div>

    )
}

export default Cart