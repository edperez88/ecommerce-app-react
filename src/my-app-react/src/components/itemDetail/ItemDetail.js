import Contador from "../Counter/Counter";
import './ItemDetail.css';



const ItemDetail = ({titulo, img, incluye, duracion, precio})=>{

    return(
        <>

            <h2 className="titulo">
                    {titulo}
            </h2>

            <img src={img} alt={""}/>
          
            <section>
                <p className="incluye">
                    {incluye}
                </p>
                <p className="duracion">
                    {duracion}
                </p>
                <p className="precio">
                    {precio}
                </p>
            </section>
            <footer className="footercard">
                <Contador/>
            </footer>



        
        </>  
    )


}
export default ItemDetail