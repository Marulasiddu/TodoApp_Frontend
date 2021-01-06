import React, { useState } from 'react';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
//import Dropdown from '../dropdown/Dropdown';
import './Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    
   
    return (
        <div className='navbar'>
            <Link to="/" className="navbar-logo">
                Fractal Analytics 
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times': 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu' } >
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/create-Todo' className='nav-links' onClick={closeMobileMenu}>
                        Createtodo
                    </Link>
                </li>
        
                <li className='nav-item'>
                    <Link to='/contact-me' className='nav-links' onClick={closeMobileMenu}>
                        Contact Me
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        sign Up
                    </Link>
                </li>
                <Button />
            </ul>
        </div>
    );
}

export default Navbar;