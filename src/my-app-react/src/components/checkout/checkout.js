import { CartContext } from "../../context/CartContext";
import { Fragment, useContext, useState} from "react";
import { addDoc, collection, documentId, getDocs, query, Timestamp, where, writeBatch } from "firebase/firestore";
import { db } from "../../service/firebase/index";
import Cart from "../Cart/Cart";
import { useForm } from "react-hook-form";
import React from "react";
import Swal from 'sweetalert2'




const Checkout = () => {

        const {handleSubmit} = useForm();

        const { cart,getTotal, vaciarCarro} = useContext(CartContext); 
        
        const total = getTotal()

        const onSubmit=(data)=>{
            console.log(data)
        }

        const [datos, setDatos]= useState({
            nombre:'',
            apellido:'',
            email:''
        })
        const handleInput =(e)=>{
            setDatos({
                ...datos,
                [e.target.name]:e.target.value
            })
        }
        
    
    
    const CrearOc = async () => {
    
        try{                

            const objOC = {
            cliente:datos,            
            items: cart,
            total: total,
            fechaOC: Timestamp.fromDate(new Date())
            }
            const sinStock=[]

            const ids = cart.map(serv=>serv.id)

            const serviceRef = collection(db,'Servicios')

            const serviciosAddFS = await getDocs(query(serviceRef, where(documentId(),'in', ids)))

            const { docs } = serviciosAddFS

            const batch = writeBatch(db)

                docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const stockDb = dataDoc.stock

                    const servicioAdd = cart.find(serv => serv.id === doc.id)
                    const cantServAdd = servicioAdd?.quantity

                    if(stockDb >= cantServAdd){
                        batch.update(doc.ref, {stock: stockDb - cantServAdd})
                    }else{
                        sinStock.push({id: doc.id, ...dataDoc})
                
                    }
                })

                if(sinStock.length === 0){
                const ocRef = collection(db,'fileOC')
                
                const ocCreada = await addDoc(ocRef, objOC)                
                batch.commit()
                console.log(ocCreada)
                vaciarCarro()
                Confirmed()
                
                } else {
                    console.log('Productos fuera de stock')
                }
                }catch(error){
                    console.log(error)
                }finally{
                    console.log('operacion finalizada')
                }

            }
            const Confirmed=(doc)=>{
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Orden Confirmada!',
                    showConfirmButton: true,
                    timer: 5000
                })
            }       
    
    return(
        <>
             <Fragment>
            <h2>Datos del Comprador</h2>
            <form  className="form-control my-2" required="datos" onSubmit={handleSubmit(onSubmit)}>
                
            <div >
                <input
                    placeholder="Nombre"
                    name="nombre"
                    type="text"
                    onChange={handleInput}
                    required="nombre"                   
                />
            </div>
            <div>
                <input
                    placeholder="Apellido"
                    type="text"
                    name="apellido"
                    onChange={handleInput}
                    required="apellido"
                />
            </div>
            <div>
                <input
                    placeholder="email"
                    type="email"
                    name="email"
                    onChange={handleInput}
                    required="email"
                />
            </div>
            <div>
                <input
                    placeholder="telefono"
                    type="number"
                    name="telefono"
                    onChange={handleInput}
                    required="telefono"
                />
            </div>
            <button className="btn btn-primary" type="submit">Guardar datos</button>
            
        </form>

            </Fragment>

            <Cart/>

             <button  className="btn-danger" onClick={CrearOc}>Generar Orden</button>
             
    
     </>
)}

export default Checkout