import React from 'react';
import ItemDetail from './ItemDetail';
export const ItemDetails = ({productsProp}) => {
    return(
      <>
        <ItemDetail key={productsProp.id} id={productsProp.id} title={productsProp.title} description={productsProp.description} price={productsProp.price} pictureUrl={productsProp.pictureUrl} /> 
      </>
      )
  }
  export default ItemDetails;