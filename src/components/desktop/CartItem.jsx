import React, { useContext, useState } from "react";

import {
  Grid,
  Typography,
  Box,
  styled,
  Button,
  IconButton,
  Icon,
} from "@mui/material";
import AddIcon from "@mui/icons-material/add";
import RemoveIcon from "@mui/icons-material/Remove";

import { DataContext } from "../../context/Context";

const Info = styled(Grid)((theme) => ({
  border: "thin solid gray",
  margin: "1rem 0",
  minWidth: "10vw",
}));

const Product = styled(Box)((theme) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minWidth: "100vh",
}));

const ProductDetail = styled(Box)((theme) => ({
  display: "flex",
}));

const Image = styled("img")((theme) => ({
  width: "200px",
}));

const Details = styled(Box)((theme) => ({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const PriceDetail = styled(Box)((theme) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
}));

const ProductAmountContainer = styled(Box)((theme) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
}));

const ProductAmount = styled(Typography)((theme) => ({
  margin: "5px",
}));

const ProductPrice = styled(Typography)((theme) => ({
  fontWeight: "200",
}));

const Summary = styled(Grid)((theme) => ({
  position: "sticky",
  top: "25px",
  bottom: "22vw",
  borderRadius: "10px",
}));

const SummaryTitle = styled(Typography)((theme) => ({
  fontWeight: "200",
}));
const SummaryItem = styled(Box)((theme) => ({
  display: "flex",
  margin: "30px 0",
  justifyContent: "space-between",
  fontWeight: "500",
}));
const SummaryItemText = styled(Typography)((theme) => ({}));
const SummaryItemPrice = styled(Typography)((theme) => ({}));
const CheckButton = styled(Button)((theme) => ({
  width: "100%",
  padding: "10px",
  background: "black",
  color: "white",
  fontWeight: "600",
  "&:hover": {
    background: "#333",
  },
}));
export const CartItem = () => {
  const { cartItems, addToCart, totalPrice,deleteOneProduct,deleteProduct } = useContext(DataContext);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={11}>
        {cartItems.length === 0 && (
          <Typography variant="h4" textAlign="center" width="700">
            Tu carrito está vacio
          </Typography>
        )}
        <Grid container>
          {cartItems.map((cartItem) => {
            const { id, titulo, stock, images, price, cantidad } = cartItem;
            const { listPrice } = price;
            const precio = +listPrice;
            let link = "https://facturadorbabas.com" + images[0];

            const cantidadPorProducto = precio * cantidad;

            return (
              <Info item xs={12} sm={9} lg={7} key={id}>
                <Product>
                  <ProductDetail>
                    <Image src={link} alt={titulo} />
                    <Details>
                      <Typography>
                        <b>{`Producto: `}</b>
                        {titulo}
                      </Typography>
                      <Typography>
                        <b>{`Cantidad:`} </b>
                        {cantidad}
                      </Typography>
                      <Typography>
                        <b>{`Precio:`} </b>
                        {precio}
                      </Typography>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <IconButton onClick={()=>deleteOneProduct(id)}>
                        <RemoveIcon />
                      </IconButton>
                      <ProductAmount> {cantidad} </ProductAmount>
                      <IconButton onClick={() => addToCart(cartItem)}>
                        <AddIcon />
                      </IconButton>
                    </ProductAmountContainer>
                    <ProductPrice>
                      <b>{`Total S./ ${cantidadPorProducto}`}</b>{" "}
                    </ProductPrice>
                    <Button variant="contained" color="primary" onClick={()=>deleteProduct(id)}>
                      Eliminar Producto
                    </Button>
                  </PriceDetail>
                </Product>
              </Info>
            );
          })}
          {cartItems.length !== 0 && (
            <Summary item xs={4} sm={3} lg={4}>
              <SummaryItem>
                <SummaryItemText variant="h4">Total</SummaryItemText>
                <SummaryItemPrice variant="h4">{totalPrice}</SummaryItemPrice>
              </SummaryItem>
              <CheckButton>Pagar Ahora</CheckButton>
            </Summary>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
