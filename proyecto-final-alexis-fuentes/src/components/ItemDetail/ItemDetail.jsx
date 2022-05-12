/* eslint-disable import/first */
import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import ItemCount from './../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import CartContext from '../../store/CartContext';

function ItemDetail({item}){

    const [cantidadDeproductos, setCantidadDeproductos] = useState(null);
    const cartCtx =useContext(CartContext);
    const addHandler = (quantityToAdd) => {
        // cartCtx.addProduct(item);
        // setCantidadDeproductos(quantityToAdd); 
        cartCtx.addProduct({quantity: quantityToAdd, ...item});  
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
                <ItemCount initial={0} stock={item.stock} onAdd={addHandler} />
                <div className='count-container'>
                        <button onClick={() => console.log(cartCtx.products)} >Print the cart content</button>
                        <button onClick={() => cartCtx.removeProduct(item.id)} >Remove product</button>
                        <button onClick={() => cartCtx.clear()} >Clear</button>
                        <button onClick={() => console.log(cartCtx.isInCart(item.id))} >Is in cart</button>
                        <button onClick={() => console.log(cartCtx.getCartQuantity())} >Quantity</button>
                        {cartCtx.products.length &&
                            <button onClick={() => console.log(cartCtx)}>
                                <Link to='/cart'>
                                    Terminar compra ({ cartCtx.getCartQuantity() } items)
                                </Link>
                            </button>
                        }
                </div>
            </div>
            
        </>
    )
}
    

export default ItemDetail