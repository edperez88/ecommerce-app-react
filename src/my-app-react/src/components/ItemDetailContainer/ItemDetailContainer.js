import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../service/firebase/index";

const ItemDetailContainer=()=>{

    const {serviceId} = useParams()
    const[Servicios, setServicios]=useState()
    const [loading, setLoading]= useState(true)
    
    useEffect(()=>{

        getDoc(doc(db, 'Servicios', serviceId)).then(response=>{

            const values = response.data()
            const Servicios = { id:response.id, ...values}
            setServicios(Servicios)

        }).catch(error=>{
            console.log(error)

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
