import { useContext, useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Product } from "./Product";

import { ProductContext } from "../../context/products/ProductsContext";

export const Products = () => {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Grid
        container
        justifyContent="center"
        padding="72px 0"
        bgcolor="#F8F8F8"
      >
        <Grid item xs={11} sm={11} md={10} lg={9} xl={8}>
          <Box sx={{display:"flex",justifyContent:"center"}}>
            <Typography variant="h3" color="primary" fontWeight="700">
              Products
            </Typography>
          </Box>
          <Grid container justifyContent="space-evenly">
            {products.map((product) => (
              <Grid
                item
                key={product.id}
                container
                margin="1rem 0"
                sm={12}
                md={6}
                lg={4}
                xl={4}
              >
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
