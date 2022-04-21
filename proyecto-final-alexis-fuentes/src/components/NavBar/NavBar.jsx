import React from 'react';

import './NavBar.css'

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
            <li><a href='#'>{children}</a></li>
            </ul>
            
        </div>
      </div>
    );
}
export function CarWidget(){
    return (
        <img className='carWidget' alt="this is an image" src="https://cdn-icons-png.flaticon.com/512/2271/2271049.png"></img>
    );
}

export default NavBar;