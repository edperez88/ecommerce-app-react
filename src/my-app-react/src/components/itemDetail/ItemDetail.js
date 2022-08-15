import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({titulo, img, incluye, duracion, precio, stock, id})=>{

    const [quantity, setQuantity]= useState()

    const {addItem, getTotalQuantity} = useContext(CartContext)
    
    const quantityAdd= getTotalQuantity(id)


    const handleOnAdd = (quantity)=>{
        addItem({id, img, titulo, precio,incluye, quantity})
        setQuantity(quantity)

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
                <Link to='/cart' element={<h2>Cart</h2>}> Finalizar compra</Link>:
                <ItemCount stock={stock} initial={quantityAdd} onAdd={handleOnAdd}/>
            }

            </footer>

        </>  
    )


}
export default ItemDetail