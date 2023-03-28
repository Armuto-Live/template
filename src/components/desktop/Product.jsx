import React from "react";
import accounting from "accounting";

import Image from '../../assets/1g.png'

// mui components
import {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Box,
} from "@mui/material";

// mui icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// styles components
import { CardProduct } from "../../styles/index";

export const Product = (
  {
  product: { titulo, stock,images,description, price:{listPrice} },
}) => {
  const selectFruta=images.map(fruta=>(
      // "https://api.babasdevel.com/invoice"+fruta
      fruta
    ))
  console.log(typeof(selectFruta))
  return (
    <>
      <CardProduct>
        <CardHeader
          action={<Typography variant="h7">{accounting.formatMoney(listPrice,"S/.")}</Typography>}
          title={<Typography variant="h5">{titulo}</Typography>}
          subheader={`Stock: ${stock}`}
        />
        <CardMedia component="img" height="194" image={""} alt={titulo} />
        <CardContent>
          <Typography color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{justifyContent:"space-around"}}>
          <IconButton aria-label="add to favorites">
            <AddShoppingCartIcon />
          </IconButton>
          <Box display="flex">
            <input type="radio" value="unidad"/>
            <p>Unidad</p>
            <input type="radio" value="unidad"/>
            <p>Paquete</p>
          </Box>
        </CardActions>
      </CardProduct>
    </>
  );
};
