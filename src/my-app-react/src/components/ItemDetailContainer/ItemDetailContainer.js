import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom"
import { getServiciosById } from "../../asyncMock";

const ItemDetailContainer=()=>{

    const {serviceId} = useParams()
    const[Servicios, setServicios]=useState()
    const [loading, setLoading]= useState(true)
    
    useEffect(()=>{
        getServiciosById(serviceId).then(response=>{
            setServicios(response);
        }).finally(()=>{
            setLoading(false)
        })
        },[serviceId])

        if(loading){
            return(
            <h2>Cargando...</h2>
            )
        }


    return(
        
        <div className="ItemDetailContainer">
         <ItemDetail {...Servicios}/>
         </div>
         
         
    )
}
 export default ItemDetailContainer
