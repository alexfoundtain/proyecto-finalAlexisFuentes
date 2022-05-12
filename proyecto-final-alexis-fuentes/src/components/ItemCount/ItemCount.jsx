import React, {useState} from 'react'
import './ItemCount.css';

export const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] =useState(initial);
    function handlePlusButton(){
        if (count < stock) {
            setCount( count + 1 );
        }
    }
    function handleMinusButton(){
        if (count>0) {
            setCount( count - 1);
        }
    }
  return (
    <div className='item-count-container-grandfa'>
        <div className='item-count-container-fa'>
                <button onClick={() => handleMinusButton()}>-</button>
                <input readOnly type="text" value={count} />
                <button onClick={() => handlePlusButton()}>+</button>
         </div>
         <div className='item-count-container-fa1'>   
            <button onClick={() =>(count <=stock && count>0) && onAdd(count)}>Agregar al carrito </button>
        </div>

    </div>
  )
}
export default ItemCount;
