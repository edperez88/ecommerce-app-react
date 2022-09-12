import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import  CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

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
            <h2> Servicios Agregados </h2>

            {cart.map(serv =>(<CartItem key={serv.id}{...serv}/>))}
            
            <h4>Total a Abonar: $ {total}</h4>

            <button onClick={() => vaciarCarro()} className="btn btn-danger">Vaciar Carrito</button>

            <Link to='/Checkout'>Complete sus datos</Link>
        </div>
            
    )
}

export default Cart