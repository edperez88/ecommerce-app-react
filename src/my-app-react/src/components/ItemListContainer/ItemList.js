import Item from "../item/Item"

const Itemlist =({Servicios}) =>{
    return(
        <ul>
            {Servicios.map(service=>(
                <Item service={service}/>
            ))}
        </ul>
    )}

    export default Itemlist