import React from "react";
import {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// styles
import { CardProduct } from "../../styles/index";

export const Product = ({
  product: { title, type, img, description, price },
}) => {
  return (
    <>
      <CardProduct>
        <CardHeader
          action={<Typography variant="h6">{price}</Typography>}
          title={title}
          subheader={type}
        />
        <CardMedia component="img" height="194" image={img} alt="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </CardProduct>
    </>
  );
};
