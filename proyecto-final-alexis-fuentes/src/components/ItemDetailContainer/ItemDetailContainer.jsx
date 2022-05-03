import React ,{useState, useEffect} from 'react'
import './ItemDetailContainer.css';
import { getProducts } from '../ItemDetail/asyncMock';
import ItemDetails from '../ItemDetail/ItemDetailList'; 



export const ItemDetailContainer = () => {

  const [productos,setProductos] = useState([]);
  useEffect( () => {
    getProducts().then(products => setProductos(products))
    },[])
 return (
      <div className='ItemDetailContainer'>
        <div className='CardsContainer'>
          <ItemDetails products={productos}/>
        </div>
      </div>
  )
    

}
export default ItemDetailContainer;