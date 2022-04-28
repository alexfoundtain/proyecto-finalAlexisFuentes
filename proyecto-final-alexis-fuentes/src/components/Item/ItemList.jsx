import React from 'react'
import Item from './Item';

export const ItemList = ({products}) => {
  // function traerproductos(){
  //   const myPromise = new Promise((resolve, reject)=>{
  //     const  Productos = [
  //         {id: 1 , title : "Sedan", description : "Sedan hibrid", price : 25000, pictureUrl: "https://www.diariomotor.com/imagenes/2020/07/toyota-corolla-sedan-gr-sport-p.jpg" },
  //         {id: 2 , title : "SUV", description : "Rav 4", price : 30000, pictureUrl: "https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2022/rav4/hybridse/4524/8w2/2.png?fm=webp&bg=white&w=768&h=328&q=90" },
  //         {id: 3 , title : "Truck", description : "Hilux", price : 32000, pictureUrl: "https://img.remediosdigitales.com/9171a3/toyota-hilux-2021-pick-up-precio-mexico_/1366_2000.jpg"}
  //     ];
  //     setTimeout(()=>{
  //       resolve(Productos);
  //     },2000)
  //   });
  //   return myPromise;
  // }


  // traerproductos()
  // .then(res =>{
  //   return (
  //     <div>
  //     {res.map(producto => <Item key={producto.id} id={producto.id} title={producto.title} description={producto.description} price={producto.price} pictureUrl={producto.pictureUrl}/> )}
  //     </div>
  //   )
  // })
  // .catch(err => console.log(err))
  return(
    <>
      {products.map(unProducto => <Item key={unProducto.id} id={unProducto.id} title={unProducto.title} description={unProducto.description} price={unProducto.price} pictureUrl={unProducto.pictureUrl} /> )}
    </>
    )

}
export default ItemList;



