import React from 'react'
import './ItemListContainer.css';

export const ItemListContainer = ({greeting, counter}) => {
  return (
    <div className='ItemListContainer'>
      <h1>{greeting}</h1>
      {counter}
    </div>
  )
}
export default ItemListContainer;