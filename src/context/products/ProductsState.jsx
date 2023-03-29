import React, { useReducer } from "react"
import { ProductContext } from "./ProductsContext";
import { ProductsReducer } from "./ProductsReducer";
import axios from "axios"

export const ProductState=(props)=>{
    const initialState={
        products:[],
        selectedProduct:null
    }
    const [state, dispatch] = useReducer(ProductsReducer, initialState);

    const TOKEN="GCSQAVKDCT20GUACJAOT76TMDAZFZ6GAI3XCG";
    const axiosInstance=axios.create({
        headers:{
            'Authorization':'Bearer '+TOKEN,
        }
    })

    const getProducts= async ()=>{
        const res = await axiosInstance.get('https://api.babasdevel.com/invoice/range/1/15/');
        console.log(res);
        dispatch({
            type:'GET_PRODUCTS',
            payload:res.data,
        })
    }
    
    const getProduct= async(id)=>{
        const res= await axios.get('https://641fbbe425cb6572103c73ea.mockapi.io/products/'+id);
        dispatch({
            type:"GET_PRODUCT",
            payload:res.data,
        })
    }
    return(
        <ProductContext.Provider value={
            {
                products:state.products,
                selectedProduct:state.selectedProduct,
                getProducts,
                getProduct,
            }
        }>
            {props.children}
        </ProductContext.Provider>
    )
}
