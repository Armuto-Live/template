import React from 'react'
import { GET_PRODUCT,GET_PRODUCTS } from '../Types'

export const ProductsReducer =(state,action)=>{
  const {payload,type}=action;
  switch(type){
    case GET_PRODUCTS:
      return{
        ...state,
        products:payload,
      }
    case GET_PRODUCT:
      return{
        ...state,
        selectedProduct:payload,
      }
    default:
      return state;
  }
}