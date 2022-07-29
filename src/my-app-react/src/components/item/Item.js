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
            <button>{service.detalle}</button>
                   
            
        </li>
    )
}

export default Item