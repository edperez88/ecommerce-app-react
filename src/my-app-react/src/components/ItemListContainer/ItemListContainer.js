import { useState, useEffect } from "react"
import { getServicios, getServiciosByCategory} from "../../asyncMock"
import Itemlist from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContaniner=({greeting})=>{
    const [Servicios, setServicios]=useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(()=>{
        const asyncFunction = categoryId ? getServiciosByCategory : getServicios

        asyncFunction(categoryId).then(response =>{
            setServicios(response)
        }).catch(error=>{
        console.log(error)
        }).finally(() =>{
            setLoading(false)
        })

    },[categoryId])

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
    )
}


export default ItemListContaniner