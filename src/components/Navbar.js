import './Navbar.css';
import { NavLink } from 'react-router-dom';

import Searchbar from './Searchbar'

export default function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                <NavLink to='/' className='brand'>
                    <h1>The Tasty Table</h1>
                </NavLink>
                <Searchbar/>
                <NavLink to='/create'>Create recipe</NavLink>
            </nav>
        </div>
    );
}