import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom"
import { getServiciosById } from "../../asyncMock";

const ItemDetailContainer=()=>{

<<<<<<< HEAD
    const {serviceId} = useParams()
=======
    const {serviceId}= useParams()
>>>>>>> 4c56b56214a496631d3bd6fd9da81358b9d0b494

    const[Servicios, setServicios]=useState()
    
    useEffect(()=>{
        getServiciosById(serviceId).then(response=>{
            setServicios(response)
        })
        },[serviceId])


    return(
        
        <div className="ItemDetailContainer">
         <ItemDetail {...Servicios}/>
         </div>
         
         
    )
}
 export default ItemDetailContainer
