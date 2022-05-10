import React from 'react';

import './NavBar.css'
import CarWidget from '../CarWidget/CarWidget';
import { NavLink } from 'react-router-dom';


function NavBar() {
    return (
    <div className="navigation-bar">
        <div id="navigation-container">
            <img alt="this is an image" src="https://i.imgur.com/hCrQkJi.png"/>
            <ul>
                <li><NavLink className={nav => nav.isActive ? 'NavLinksActive': 'NavLinks'} to='/'>HOME</NavLink></li>
                <li><NavLink className={nav => nav.isActive ? 'NavLinksActive': 'NavLinks'} to='/category/SEDAN'>SEDANS</NavLink></li>
                <li><NavLink className={nav => nav.isActive ? 'NavLinksActive': 'NavLinks'} to='/category/TRUCK'>SUVS</NavLink></li>
                <li><NavLink className={nav => nav.isActive ? 'NavLinksActive': 'NavLinks'} to='/category/SUV'> TRUCKS</NavLink></li>
                <li><CarWidget className='NavLinks'/></li>
            </ul>
        </div>
      </div>
    ); 
}

export default NavBar;