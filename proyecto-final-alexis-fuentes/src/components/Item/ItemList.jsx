import React from 'react'
import Item from './Item';

export const ItemList = ({products}) => {
  return(
    <>
      {products.map(unProducto => <Item  itemProp={unProducto}  /> )}
    </>
    )
}
export default ItemList;



