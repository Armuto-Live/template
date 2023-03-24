import { Grid } from "@mui/material";
import { Product } from "./Product";

import { products } from "../../../data";

export const Products = () => {
  return (
    <>
      <Grid container justifyContent="center" padding="72px 0">
        <Grid item xs={11} sm={11} md={10} lg={9} xl={8}>
          <Grid container justifyContent="space-evenly">
            {products.map((product) => (
              <Grid item key={product.id}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
