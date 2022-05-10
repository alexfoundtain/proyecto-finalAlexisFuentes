import React ,{useState, useEffect} from 'react'
import './ItemListContainer.css';
import { getProducts } from '../../model/asyncMock';
import Item from '../../components/Item/Item';
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
          {productos.map(unProducto => <Item key={unProducto.id} itemProp={unProducto}  /> )}
        </div>
      </div>
  )
}
export default ItemListContainer;