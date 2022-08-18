import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id,titulo, quantity, precio }) => {
    const { deleteItem } = useContext(CartContext)

    const handleRemove = (id) => {
        deleteItem(id)
    }

    return (<>

                <h4>
                    {titulo}
                </h4>

          
                <p>
                cantidad: {quantity}
                </p>
                <p>
                subtotal: {precio}
                </p>
                      
        
                 <p>
                Total: ${precio * quantity}
                 </p>
                 <button className='ButtonCartItem' onClick={() => handleRemove(id)}>Eliminar</button>
         
                 </>
    )
}

export default CartItem