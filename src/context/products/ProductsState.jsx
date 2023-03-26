import React, { useReducer } from "react"
import { ProductContext } from "./ProductsContext";
import { ProductsReducer } from "./ProductsReducer";

import axios from "axios"

export const ProductState=(props)=>{
    const initialState={
        products:[],
        selectedProducts:null
    }

    const [state, dispatch] = useReducer(ProductsReducer, initialState);

    const getProducts= async ()=>{
        const res = await axios.get('https://641fbbe425cb6572103c73ea.mockapi.io/products');
        console.log(res);
    }
    
    const getProduct= async(id)=>{
        const res= await axios.get('https://641fbbe425cb6572103c73ea.mockapi.io/products/'+id)
    }
    return(
        <ProductContext.Provider value={
            {
                products:state.products,
                selectedProducts:state.selectedProducts,
                getProducts,
                getProduct,
            }
        }>
            {props.children}
        </ProductContext.Provider>
    )
}
