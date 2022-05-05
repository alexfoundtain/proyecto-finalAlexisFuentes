import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

function Item({itemProp}){
        
        return (
            <div className='card' id={itemProp.id}>
                <div className='header'><h4>{itemProp.title}</h4> </div>
                <div className='content'>
                    <div className='img-container'>
                        <img src={itemProp.pictureUrl} alt='No image found' />
                    </div>
                    <div className='description'> {itemProp.description}</div>
                </div>
                <div>
                    <Link className='detailsButton' to={'/item/'+itemProp.id}>More details</Link>
                </div>
                <div className='footer'>${itemProp.price}</div>
            </div>
            )
}

export default Item