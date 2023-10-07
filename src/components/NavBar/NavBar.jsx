import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <h1>Aullido</h1>

            <nav>
                <ul>
                    <li>Remeras</li>
                    <li>Pantalones</li>
                    <li>Calzado</li>
                </ul>
            </nav>

            <CartWidget/>
        </header>
    )
}

export default NavBar