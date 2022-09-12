import { Link } from 'react-router-dom'
import './Item.css'

const Item=({titulo, img, duracion, incluye, precio, id})=>{
    

    return(
        
        <li>
            <h2>{titulo}</h2>
            <img src={img} alt="name"></img>
            <h5>{duracion}</h5>
            <p>{incluye}</p>
            <p>{precio}</p>
            <Link to={`/detail/${id}`}>Detalles</Link>    
            
        </li>
    ) 
}

export default Item