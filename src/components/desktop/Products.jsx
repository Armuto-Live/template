import { useContext,useEffect } from "react";
import { Grid } from "@mui/material";
import { Product } from "./Product";

import { ProductContext } from "../../context/products/ProductsContext";

export const Products = () => {
  const {products,getProducts}=useContext(ProductContext)
  
  useEffect(()=>{
    getProducts();
  },[])


  return (
    <>
      <Grid container justifyContent="center" padding="72px 0" bgcolor="#F7FAFC">
        <Grid item xs={11} sm={11} md={10} lg={9} xl={8}>
          <Grid container justifyContent="space-evenly">
            {products.map((product) => (
              <Grid item key={product.id} width="300px" height="500px" container  margin="1rem 0">
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
