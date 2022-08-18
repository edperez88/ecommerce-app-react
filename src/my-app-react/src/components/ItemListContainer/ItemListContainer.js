import { useState, useEffect } from "react"
import { getDocs, collection, query, where} from "firebase/firestore"
import Itemlist from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { db } from "../../service/firebase/index"

const ItemListContaniner=({greeting})=>{
    const [Servicios, setServicios]=useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)

        const collectionRef = !categoryId ? collection(db, 'Servicios'): 
        query(collection(db, 'Servicios'), where('category', '==', categoryId)) 

        getDocs(collectionRef).then(response =>{
        
            const Servicios = response.docs.map(doc=>{
                const values= doc.data()
                return{ id: doc.id, ...values}
            })
            setServicios(Servicios)
        }).catch(error=>{
            console.log(error)
        }).finally(()=>
            setLoading(false)
        )

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