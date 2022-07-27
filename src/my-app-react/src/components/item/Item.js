import './Item.css'
import Contador from '../Counter/Counter'

const Item=({service})=>
{
    return(
        <>
            <div key={service.id}>
            <h2>{service.titulo}</h2>
                <img src={service.img}></img>  
                <h5>{service.duracion}</h5>
                <p>{service.incluye}</p>
                <li>{service.precio}</li>
                <button>{service.detalle}</button>
                <button><Contador/></button>
                  
            </div>
            
        
        </>
        
    )
}

export default Item