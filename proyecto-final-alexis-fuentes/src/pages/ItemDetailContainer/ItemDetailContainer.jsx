import React ,{useState, useEffect} from 'react'
import './ItemDetailContainer.css';;
import { getProductbyId } from '../../model/asyncMock';
import ItemDetail from '../../components/ItemDetail/ItemDetail'; 
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {
  const [productos,setProductos] = useState([]);
  const { id } =useParams();

  useEffect( () => {
    getProductbyId(id)
    .then(
      products => setProductos(products)
      )
    },[id]);
    
 return (
      <div className='ItemDetailContainer'>
        <div className='CardsContainer'>
          {/* <ItemDetails productsProp={productos}/> */}
          <ItemDetail key={productos.id} item={productos} /> 
        </div>
      </div>
  )    

}
export default ItemDetailContainer;