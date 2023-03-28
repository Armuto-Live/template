import React, { useReducer } from "react";
import { Box, styled } from "@mui/material";
import { Navbar, Footer } from "../components";
import { CartReducer } from "../context/products/CartState";
import { cardInitialState } from "../context/products/CartState";
import { ProductItem } from "../components/desktop/ProductItem";
import { CartItem } from "../components/desktop/CartItem";
import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../context/Types";

const Wrapper = styled(Box)((theme) => ({
  paddingTop: "60px",
}));
export const Cart = () => {
  const [state, dispatch] = useReducer(CartReducer, cardInitialState);
  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({
      type: ADD_TO_CART,
      payload: id,
    });
  };
  const delFromCart = (id,all=false) => {
    console.log(id,all);
    if(all){
      dispatch(
        {
          type:REMOVE_ALL_FROM_CART,
          payload:id, 
        }
      )
    }else{
      dispatch(
        {
          type:REMOVE_ONE_FROM_CART,
          payload:id, 
        }
      )
    }
  };
  const clearCart = () => {
    dispatch({
      type:CLEAR_CART,
    })
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <h2>carrrito</h2>
        <Box>
          <h3>Productos</h3>
          <Box>
            {products.map((product) => (
              <ProductItem
                key={product.id}
                data={product}
                addToCart={addToCart}
              />
            ))}
          </Box>
        </Box>
        <Box>
          <h3>Carrito</h3>
          <Box>
            {cart.map((item, index) => (
              <CartItem key={index} data={item} delFromCart={delFromCart} />
            ))}
          </Box>
          <button onClick={clearCart}>Limpiar carrito</button>
        </Box>
      </Wrapper>
      <Footer />
    </>
  );
};
