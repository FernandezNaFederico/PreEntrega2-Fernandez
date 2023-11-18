import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext);
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/3825/3825062.png"
    return (
        <div>

            <Link to="/cart">
            <img className='carrito' src={imgCarrito} alt="Imagen de un carrito" />
            {
                cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
            }

            </Link>

        </div>
    )
}

export default CartWidget