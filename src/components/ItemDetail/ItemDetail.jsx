import { useState, useContext } from "react";
import Contador from "../Contador/Contador";
import { Link } from "react-router-dom";
import "./ItemDetail.css"
import { CarritoContext } from "../../context/CarritoContext";

const ItemDetail = ({id, nombre, stock, precio, img}) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const {agregarAlCarrito} = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        
        const item = {id, nombre, precio};
        agregarAlCarrito(item, cantidad);
    }


    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>Id: {id} </h3>
            <img src={img} alt={nombre} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deserunt obcaecati cum ratione ad, error ut quo doloribus blanditiis esse autem officia id, quia delectus adipisci reprehenderit sapiente qui, dolorum recusandae quisquam assumenda aspernatur laboriosam consequatur architecto? Soluta esse incidunt provident minima dignissimos, at, odit delectus numquam nam aut in.</p>

            {
                agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<Contador inicial={1} 
                    stock={stock} funcionAgregar={manejadorCantidad} />)
            }

        </div>  
    )    
}
    
export default ItemDetail