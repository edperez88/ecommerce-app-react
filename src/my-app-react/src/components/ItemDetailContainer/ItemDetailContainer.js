import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom"
import { getServiciosById } from "../../asyncMock";

const ItemDetailContainer=()=>{

    const Params = useParams()

    const[Servicios, setServicios]=useState()
    
    useEffect(()=>{
        getServiciosById().then(response=>{
            setServicios(response)
        })
        },[])


    return(
        
        <div className="ItemDetailContainer">
         <ItemDetail {...setServicios}/>
         </div>
         
         
    )
}
 export default ItemDetailContainer