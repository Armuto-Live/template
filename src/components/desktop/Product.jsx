import { useContext } from "react";
import { DataContext } from "../../context/Context";
import accounting from "accounting";

import ImageDefault from "../../assets/1g.png";

// mui components
import {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Box,
  Button,
  Grid,
} from "@mui/material";

// mui icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// styles components
import { CardProduct,Img } from "../../styles/index";

export const Product = () => {
  const { data,addToCart } = useContext(DataContext);
  
  return (
    <>
      {data.map((item) => {
        const {
          id,
          titulo,
          stock,
          images,
          price,
        } = item;
        
        const {listPrice}=price
        const precio=+listPrice;

        let link = "https://facturadorbabas.com";
        let Image = link + images[0];
        if (images[0] === undefined) {
          Image = ImageDefault;
        }
        return (
          <Grid item container margin="1rem 0" xs={6} sm={6} md={6} lg={4} xl={4} key={id} >
            <CardProduct
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardHeader
                action={
                  <Typography variant="body1" fontWeight="500">
                    {`S./ ${(precio)}`}
                  </Typography>
                }
                title={
                  <Typography variant="h5" color="primary" fontWeight="700">
                    {titulo}
                  </Typography>
                }
                subheader={`Stock: ${stock}`}
              />
              <Box display="flex" justifyContent="center">
                <Img src={Image} alt={titulo} />
              </Box>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <IconButton onClick={()=>addToCart(item)}>
                  <AddShoppingCartIcon />
                </IconButton>
                <Box display="flex">
                  <input type="radio" value="unidad" />
                  <p>Unidad</p>
                  <input type="radio" value="unidad" />
                  <p>Paquete</p>
                </Box>
              </CardActions>
            </CardProduct>
          </Grid>
        );
      })}
    </>
  );
};
