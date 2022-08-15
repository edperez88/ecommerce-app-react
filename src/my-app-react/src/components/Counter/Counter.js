import { useState, useEffect} from 'react'
import './Counter.css'

const Contador = ({stock, onAdd}) => {

    const [quantity, setQuantity] = useState(Initial=0)

    useEffect(()=>{

    }, [quantity])


    const add = () => {
        if(quantity<10)
        setQuantity(quantity + 1)
    }

    const dlt = () => {
        if(quantity>1)
        setQuantity(quantity - 1)
    }

    

    return (
        <div className="btn-father">
            <button onClick={add}>+</button>
            <a>{quantity}</a>
            <button onClick={dlt}>-</button>
            <button disabled={stock===0? true: null} onClick={ ()=> onAdd(add)}>Agregar al carrito</button>
        </div>

    
    )

}
export default Contador