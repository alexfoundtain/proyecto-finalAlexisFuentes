import React ,{useState, useEffect} from 'react'
import './ItemListContainer.css';
import { getProducts } from '../../components/Item/asyncMock';
import ItemList from '../../components/Item/ItemList';
import { useParams } from 'react-router-dom';



export const ItemListContainer = () => {
  const [productos,setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect( () => {
      getProducts(categoryId)
      .then(products => setProductos(products))
    },[categoryId])
 return (
      <div className='ItemListContainer'>
        <div className='CardsContainer'>
          <ItemList products={productos}/>
        </div>
      </div>
  )
}
export default ItemListContainer;