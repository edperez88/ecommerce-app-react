import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div>
                .:Island Spa & Solarium:.
            </div>
            <div>
                <button>Home</button>
                <button>Productos y Servicios</button>
                <button>Contacto</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar