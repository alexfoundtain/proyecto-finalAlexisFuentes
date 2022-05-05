import React ,{useState, useEffect} from 'react'
import './ItemDetailContainer.css';
import { getProductbyId } from '../../components/ItemDetail/asyncMock';
import ItemDetails from '../../components/ItemDetail/ItemDetailList'; 
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
          <ItemDetails productsProp={productos}/>
        </div>
      </div>
  )    

}
export default ItemDetailContainer;