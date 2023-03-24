import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import Logo from "../../../assets/logo.svg";

export const Product = ({product:{id,title,type,img,description,price}}) => {
  return (
    <>
      <Card sx={{ maxWidth: 345, margin:"25px 0", bgcolor:"lightcyan"}} >
        <CardHeader
          action={<Typography variant="h6">{price}</Typography>}
          title={title}
          subheader={type}
        />
        <CardMedia
          component="img"
          height="194"
          image={img}
          alt="Paella dish"
        />
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
      </Card>
    </>
  );
};
