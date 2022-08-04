import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div className='header-title'>
                .:Island Spa & Solarium:.
            </div>
            <div className='categorias'>
                <Link to='/'>Home</Link>
                <Link to='/category/Masajes'>Masajes</Link>
                <Link to='/category/Sauna'>Servicios de Sauna</Link>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar