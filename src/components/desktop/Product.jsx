import React from "react";
import accounting from "accounting";

import ImageDefault from '../../assets/1g.png'

// mui components
import {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Box, Button,
} from "@mui/material";

// mui icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// styles components
import { CardProduct } from "../../styles/index";

export const Product = (
  {
  product: { titulo, stock,images,description, price:{listPrice} },
}) => {

  let link="https://facturadorbabas.com";
  let Image=link+images[0];
  if(images[0]==undefined){
    Image=ImageDefault;
  }
  return (
    <>
      <CardProduct sx={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
        <CardHeader
          action={<Typography variant="h6" fontWeight="500">{accounting.formatMoney(listPrice,"S/.")}</Typography>}
          title={<Typography variant="h5" color="primary" fontWeight="700" >{titulo}</Typography>}
          subheader={`Stock: ${stock}`}
        />
        <Box display="flex" justifyContent="center">
          <CardMedia component="img" height="194px" image={Image} alt={titulo}  />
        </Box>
        <CardContent>
          <Typography color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{justifyContent:"space-between"}}>
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
