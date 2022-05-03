import React from 'react'
const  Productos = [
    {id: 1 , title : "2022 TOYOTA COROLLA", description : "The 2022 Toyota Corolla Hybrid sits in the lower half of our hybrid car rankings. Its fuel economy estimates are among the best in the class, and its cabin is packed with features, but it’s held back in part by its below-average trunk capacity and limited rear-seat headroom.", price : 25000.00, pictureUrl: "https://i.ytimg.com/vi/XSJy2wy5c64/maxresdefault.jpg" }
];
export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(()=>{
            resolve(Productos)
        },2000)
        
    })
}
