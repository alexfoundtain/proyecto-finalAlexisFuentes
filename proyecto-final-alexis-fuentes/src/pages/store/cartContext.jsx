import {createContext, useState} from 'react'

const cartContext = createContext ({
    products :[],
    addProducto: ()=>{}
});

const removeProduct = (id) =>{
    setproductList(productList.filter(i => i.id !== id))
}
const clear = (id) =>{
    setproductList([])
}
const IsinCart = (id) =>{
    const elementIn = productList.find(element => element.id === id);
    return elementIn.length > 0 ? true : false;
}


export const cartContextProvider = ({children}) => {
    const [productList, setproductList] = useState([]);

    const addProduct = (product) =>{
        setproductList([product,...productList])
    }
  return (
    <cartContext.Provider value={{
        products: productsList,
        addProduct: addProduct,
        removeProduct: removeProduct,
        clear: clear,
        IsinCart: IsinCart
    }}>
        {children}
    </cartContext.Provider>
  )
}

