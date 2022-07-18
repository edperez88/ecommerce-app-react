import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div>
                E-COMMERCE
            </div>
            <div>
                <button>Celular</button>
                <button>Tablet</button>
                <button>Notebook</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar