import React from 'react';
import ItemDetail from './ItemDetail';
export const ItemDetails = ({productsProp}) => {
    return(
      <>
        <ItemDetail key={productsProp.id} item={productsProp} /> 
      </>
      )
  }
  export default ItemDetails;