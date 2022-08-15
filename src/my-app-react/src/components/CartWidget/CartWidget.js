import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'



const CartWidget=()=>{
    const {getQuantity} = useContext(CartContext)
    const  quantity = getQuantity()

  
    return(
        <Link to='/cart' className='CartWidget'>
            
            {quantity}  <img src="/images/cart.jpg" alt="cart"/>
            
        </Link>
    )
}

export default CartWidget