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
            <p>Nuestra indumentaria siempre estan echas de la mejor calidad, ya que somos fabricantes de ellas y nos aseguramos que asi sea. Todas nuestran prendas se pueden cambiar dentro de los 15 dias de la compra.</p>

            {
                agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<Contador inicial={1} 
                    stock={stock} funcionAgregar={manejadorCantidad} />)
            }

        </div>  
    )    
}
    
export default ItemDetail