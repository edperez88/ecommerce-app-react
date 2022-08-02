import { Link } from 'react-router-dom'
import './Item.css'

const Item=({service})=>
{
    return(
        
        <li>
            <h2>{service.titulo}</h2>
            <img src={service.img}></img>
            <h5>{service.duracion}</h5>
            <p>{service.incluye}</p>
            <p>{service.precio}</p>
            <Link to={`detalle: ${service.id}`}>+info</Link>    
            
        </li>
    )
}

export default Item