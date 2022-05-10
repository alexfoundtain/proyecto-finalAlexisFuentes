import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from './../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

function ItemDetail({item}){

    const [cantidadDeproductos, setCantidadDeproductos] = useState(null);
    const addHandler = (quantityToAdd) => {
        console.log("Se cargaron al carrito "+quantityToAdd+" articulos");   
        setCantidadDeproductos(quantityToAdd);   
    }
    return (
        <>
            <div className='containerDetail'>
                <img src={item.pictureUrl} alt='No image found' />
            </div>
            <div className='content-description-detail'>
                <h1>{item.title}</h1> 
                <h3 className='description'> {item.description}</h3>
                <div className=''>${item.price}</div>
                {
                    cantidadDeproductos ?
                    <button><Link to={'/cart'}> Terminar la compra({cantidadDeproductos} items) </Link></button> :
                    <ItemCount stock={item.stock} initial={1} onAdd={addHandler}  /> 
                }

            </div>
            
        </>
    )
}
    

export default ItemDetail