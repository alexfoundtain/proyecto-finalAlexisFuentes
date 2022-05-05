import React from 'react';
import './ItemDetail.css';
import ItemCount from './../ItemCount/ItemCount';

function ItemDetail({id, title, description, price, pictureUrl}){
    const handleOnAdd = (count) => {
        alert("Se cargaron al carrito "+count+" articulos");        
    }
        return (
            <>
                <div className='containerDetail'>
                    <img src={pictureUrl} alt='No image found' />
                </div>
                <div className='content-description-detail'>
                    <h1>{title}</h1> 
                    <h3 className='description'> {description}</h3>
                    <div className='footer'>${price}</div>
                    <ItemCount stock={5} initial={1} onAdd={handleOnAdd}   /> 
                </div>
                
            </>
            )
}
    

export default ItemDetail