import Contador from "../Counter/Counter";
import './ItemDetail.css';




const ItemDetail = ({titulo, img, incluye, duracion, precio})=>{

    {/*const handleOnAdd= (quantity)=>{
        console.log('Agregue al Carrito', quantity)
    */}

    return(
        <>

            <h2 className="titulo">
                    titulo:{titulo}
            </h2>
            
            <picture>
                img: <img src={img} className="ItemImg"/>
            </picture>
            <section>
                <p className="incluye">
                    incluye: {incluye}
                </p>
                <p className="duracion">
                    duracion:{duracion}
                </p>
                <p className="precio">
                    precio: ${precio}
                </p>
            </section>
            <footer className="footercard">
                <Contador/>
            </footer>



        
        </>  
    )


}
export default ItemDetail