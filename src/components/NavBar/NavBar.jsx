import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <Link to="/">
            <h1>Aullido</h1>
            </Link>


            <nav>
                <ul>
                    <li className='boton'>
                        <NavLink to="categoria/2">Remeras y Pantalones</NavLink>
                    </li>

                    <li className='boton'>
                        <NavLink to="categoria/3">Camperitas y Buzos</NavLink>
                    </li>

                </ul>
            </nav>

            <CartWidget/>
        </header>
    )
}

export default NavBar