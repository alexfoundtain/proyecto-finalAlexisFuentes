import React from 'react';
import 'bootstrap';

import './NavBar.css'

function NavBar(props) {
    return (
    <div class="navigation-bar">
        <div id="navigation-container">
            <img src="https://i.imgur.com/hCrQkJi.png"></img>
            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Get in Touch</a></li>
            </ul>
        </div>
      </div>
    );
}

export default NavBar;