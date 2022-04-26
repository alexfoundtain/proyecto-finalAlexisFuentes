import React from 'react'
import './ItemListContainer.css';
import ItemCount from './../ItemCount/ItemCount';


export const ItemListContainer = ({greeting}) => {
    const handleOnAdd = (count) => {
      alert("Se cargaron al carrito "+count+" articulos");        
  }
  return (
    <div className='ItemListContainer'>
      <h1>{greeting}</h1>
      <ItemCount stock={5} initial={1} onAdd={handleOnAdd}   />
    </div>
  )
}
export default ItemListContainer;