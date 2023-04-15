import React, { useReducer } from "react";
import { Box, styled } from "@mui/material";
import { Navbar, Footer } from "../components";


import { CartItem } from "../components/index";
const Wrapper = styled(Box)((theme) => ({
  paddingTop: "60px",
}));
export const Cart = () => {

  return (
    <>
      <Navbar />
      <Wrapper>
      <CartItem/>
      </Wrapper>
      <Footer />
    </>
  );
};
