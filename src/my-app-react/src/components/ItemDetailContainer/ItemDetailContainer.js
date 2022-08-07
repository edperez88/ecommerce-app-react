import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom"
import { getServiciosById } from "../../asyncMock";

const ItemDetailContainer=(addItem)=>{

    const {serviceId} = useParams()

    const[Servicios, setServicios]=useState()
    
    useEffect(()=>{
        getServiciosById(serviceId).then(response=>{
            setServicios(response)
        })
        },[serviceId])


    return(
        
        <div className="ItemDetailContainer">
         <ItemDetail {...Servicios} addItem={addItem}/>
         </div>
         
         
    )
}
 export default ItemDetailContainer
