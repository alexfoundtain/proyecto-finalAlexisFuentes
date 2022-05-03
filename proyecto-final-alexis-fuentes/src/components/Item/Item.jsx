import React from 'react';
import './Item.css';

function Item({id, title, description, price, pictureUrl}){
        
        return (
            <div className='card' id={id}>
                <div className='header'><h4>{title}</h4> </div>
                <div className='content'>
                    <div className='img-container'>
                        <img src={pictureUrl} alt='No image found' />
                    </div>
                    <div className='description'> {description}</div>
                </div>
                <div>
                    <button className='detailsButton'>See more details</button>
                </div>
                <div className='footer'>${price}</div>
            </div>
            )
}

export default Item