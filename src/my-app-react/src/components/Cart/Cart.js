import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import  CartItem from "../CartItem/CartItem";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../service/firebase/index";


const Cart = () =>{

    const { cart, getTotal, getTotalQuantity, vaciarCarro}= useContext(CartContext);

    const quantity = getTotalQuantity()
    const total = getTotal()

    const CrearOc = () => {
        const objOC = {
            cliente:{
                name: 'dario perez',
                telefono: '123456',
                email: 'darioperez123@1234546'
        },
        items: {cart},
        total: total, 
        fechaOC: Timestamp.fromDate(new Date())
        }
        addDoc(collection(db, 'fileOC'), objOC).then(response =>{
            console.log(response)
        })

    }
    

    


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
            <button onClick={() => vaciarCarro()} className="btn btn-dark">Vaciar Carrito</button>
            <button className="btn-danger" onClick={CrearOc}>Generar Orden</button>
        </div>
            
    )
}

export default Cart