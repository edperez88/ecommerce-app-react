import { useState, useEffect } from "react"
import { getServicios } from "../../asyncMock"
import Itemlist from "./ItemList"

const ItemListContaniner=({greeting, show, setShow})=>{
    const [Servicios, setServicios]=useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getServicios().then(response =>{
            setServicios(response)
        }).catch(error=>{
        console.log(error)
        }).finally(() =>{
            setLoading(false)
        })

    },[])
    if(loading){
        return(
            <h2>Cargando Servicios...</h2>
        )
    }

    return(
    <>
    <h1>{greeting}</h1>
    
        <Itemlist Servicios={Servicios}/>
 
    </>
    
    )}


export default ItemListContaniner