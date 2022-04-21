import React from 'react';

import './NavBar.css'
import CarWidget from '../CarWidget/CarWidget';


function NavBar({children}) {
    return (
    <div className="navigation-bar">
        <div id="navigation-container">
            <img alt="this is an image" src="https://i.imgur.com/hCrQkJi.png"></img>
            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Get in Touch</a></li>
            <li><a href='#'><CarWidget/></a></li>
            </ul>
        </div>
      </div>
    );
}

export default NavBar;