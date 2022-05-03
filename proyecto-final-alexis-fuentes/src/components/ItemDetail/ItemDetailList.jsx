import React from 'react';
import ItemDetail from './ItemDetail';
export const ItemDetails = ({products}) => {
    return(
      <>
        {products.map(unProducto => <ItemDetail key={unProducto.id} id={unProducto.id} title={unProducto.title} description={unProducto.description} price={unProducto.price} pictureUrl={unProducto.pictureUrl} /> )}
      </>
      )
  }
  export default ItemDetails;