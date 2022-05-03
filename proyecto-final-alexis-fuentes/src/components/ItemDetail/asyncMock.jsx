import React from 'react'
const  Productos = [
    {id: 1 , title : "SEDAN", description : "COROLLA HIB", price : 25000, pictureUrl: "https://pngset.com/images/2017-toyota-corolla-im-red-2018-toyota-yaris-ia-red-sedan-car-vehicle-transportation-transparent-png-1125442.png" }
];
export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(()=>{
            resolve(Productos)
        },2000)
        
    })
}
