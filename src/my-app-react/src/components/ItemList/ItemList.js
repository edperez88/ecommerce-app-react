import Item from "../item/Item"

const Itemlist =({Servicios}) =>{
    return(
        <ul>
            {Servicios.map(service => (
                <Item key={service.id} {...service}/>))}
        </ul>
    )}

    export default Itemlist