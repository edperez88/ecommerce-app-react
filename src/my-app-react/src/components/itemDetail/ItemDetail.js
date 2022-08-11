import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({titulo, img, incluye, duracion, precio, stock})=>{

    const [quantity, setQuantity]= useState(0)

    const {addItem} = useContext(CartContext)
   


    const handleOnAdd = ()=>{
        setQuantity(quantity)
        addItem({titulo, precio,incluye})
        

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
                {quantity > 0 ?
                <Link to='/cart' className='option'>Finalizar compra</Link>:
                <ItemCount stock={stock} onAdd={handleOnAdd}/>
            }

            </footer>

        </>  
    )


}
export default ItemDetail