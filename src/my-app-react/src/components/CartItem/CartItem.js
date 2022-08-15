import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id,titulo, quantity, precio }) => {
    const { deleteItem } = useContext(CartContext)

    const handleRemove = (id) => {
        deleteItem(id)
    }

    return (
        <article>
            <header>
                <h2>
                    {titulo}
                </h2>
            </header>
            <section>
                <p>
                    Cantidad: {quantity}
                </p>
                <p>
                    subtotal: {precio}
                </p>
            </section>           
            <footer>
                 <p>
                     Total: ${precio * quantity}
                 </p>
                 <button className='ButtonCartItem' onClick={() => handleRemove(id)}>X</button>
            </footer>
        </article>
    )
}

export default CartItem