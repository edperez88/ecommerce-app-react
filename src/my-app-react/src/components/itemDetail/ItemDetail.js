import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { useState } from 'react';
import { Link } from "react-router-dom";



const ItemDetail = ({titulo, img, incluye, duracion, precio, stock, addItem})=>{

    const [quantity, setQuantity]= useState(0)

    const handleOnAdd = (quantity)=>{
        setQuantity(quantity)
        console.log(`Se agrego: ${quantity} de ${titulo}`)
    }

    return(
        <>

            <h2 className="titulo">
                    {titulo}
            </h2>

            <img src={img} alt={""}/>
          
            <section>
                <p className="incluye">
                    {incluye}
                </p>
                <p className="duracion">
                    {duracion}
                </p>
                <p className="precio">
                    {precio}
                </p>
            </section>
            <footer className="footercard">
                <ItemCount stock={stock} onAdd={handleOnAdd}/>

            </footer>



        
        </>  
    )


}
export default ItemDetail