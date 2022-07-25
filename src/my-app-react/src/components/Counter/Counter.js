import { useState} from 'react'
import './Counter.css'

const Contador = ({Stock, Initial, onAdd}) => {

    const [conteo, setConteo] = useState(Initial=0)


    const add = () => {
        if(conteo<10)
        setConteo(conteo + 1)
    }

    const dlt = () => {
        if(conteo>1)
        setConteo(conteo - 1)
    }

    

    return (
        <div class="btn-father">
            <button onClick={add}>+</button>
            <a>{conteo}</a>
            <button onClick={dlt}>-</button>
            <button disabled={Stock===0? true: null} onClick={ ()=> onAdd(add)}>Agregar al carrito</button>
        </div>

    
    )

}
export default Contador