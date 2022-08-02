import Contador from "../Counter/Counter"


const ItemDetail = ({Servicio})=>{
    return(
        <>
            <h2>{Servicio.titulo}</h2>
            <img src={Servicio.img}></img>
            <h5>{Servicio.duracion}</h5>
            <p>{Servicio.incluye}</p>
            <p>{Servicio.precio}</p>
            <Contador/>
        
        </>
    )


}
export default ItemDetail
