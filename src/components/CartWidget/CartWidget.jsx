import React from 'react';
import './CartWidget.css';
const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/3825/3825062.png"
    return (
        <div>
            <img className='carrito' src={imgCarrito} alt="Imagen de un carrito" />
            <strong> 2 </strong>
        </div>
    )
}

export default CartWidget