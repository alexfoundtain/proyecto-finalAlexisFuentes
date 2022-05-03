import React ,{useState, useEffect} from 'react'
import './ItemListContainer.css';
import { getProducts } from '../Item/asyncMock';
import ItemList from '../Item/ItemList';



export const ItemListContainer = ({greeting}) => {

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
      </div>
  )
}
export default ItemListContainer;