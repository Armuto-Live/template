import React from "react";
import accounting from "accounting";
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

export const Product = ({
  product: { title, type, img, description, price },
}) => {
  return (
    <>
      <CardProduct>
        <CardHeader
          action={<Typography variant="h6">{accounting.formatMoney(price,"S/.")}</Typography>}
          title={title}
          subheader={type}
        />
        <CardMedia component="img" height="194" image={img} alt="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
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
