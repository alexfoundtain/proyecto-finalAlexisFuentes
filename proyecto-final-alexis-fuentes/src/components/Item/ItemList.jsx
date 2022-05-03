import React from 'react'
import Item from './Item';

export const ItemList = ({products}) => {
  return(
    <>
      {products.map(unProducto => <Item key={unProducto.id} id={unProducto.id} title={unProducto.title} description={unProducto.description} price={unProducto.price} pictureUrl={unProducto.pictureUrl} /> )}
    </>
    )
}
export default ItemList;



