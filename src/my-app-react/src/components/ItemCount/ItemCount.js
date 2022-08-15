import { useState } from "react"


const ItemCount=({stock, onAdd, initial=1})=>{
    const[count, setCount] = useState(initial)

    const decrement= () =>{
        if(count > 1){
            setCount(count - 1)
        }
    }
    const increment= () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}> - </button>
            <button onClick={increment}> + </button>
            <button disabled={stock===0? true: null} onClick={()=>onAdd(count)}> 'Agregar al carrito' </button>

        </div>
    )
}
export default ItemCount