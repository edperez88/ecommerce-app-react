import { useState, useEffect } from "react";
import { getServiciosById } from "../../asyncMock";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer=()=>{

    const[Servicio, setServicio]=useState()
    const [loading, setLoading]= useState(true)

    const {ServicioId}=useParams()

    useEffect(()=>{
        (async()=>{
            try{
                const response=await getServiciosById(ServicioId)
                setServicio(response)
            }catch(error){
                console.log(error)
            }finally{
                setLoading(false)
            }
        })()

        if(loading){
            return(
                <h1> Cargando Servicios...</h1>
            )
        }
    })


    return(
        <>
         <h1> Detalles</h1>
         <ItemDetail {...Servicio}/>
         
         </>
    )
}
    export default ItemDetailContainer