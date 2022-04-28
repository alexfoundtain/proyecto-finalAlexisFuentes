import React ,{useState, useEffect} from 'react'
import './ItemListContainer.css';
import ItemCount from './../ItemCount/ItemCount';
import { getProducts } from '../Item/asyncMock';
import ItemList from '../Item/ItemList';



export const ItemListContainer = ({greeting}) => {
  //   const handleOnAdd = (count) => {
  //     alert("Se cargaron al carrito "+count+" articulos");        
  // }
  const [productos,setProductos] = useState([]);
  useEffect( () => {
    getProducts().then(products => setProductos(products))
    },[])
 return (
      <div className='ItemListContainer'>
        <h1>{greeting}</h1>
        <div className='CardsContainer'>
          <ItemList products={productos}/>
        </div>
        {/* <ItemCount stock={5} initial={1} onAdd={handleOnAdd}   /> */}
      </div>
  )
    

}
export default ItemListContainer;