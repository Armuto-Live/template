import { Grid, Box, Typography } from "@mui/material";
import { Product } from "./Product";
import { useContext, useState } from "react";
import { DataContext } from "../../context/Context";

export const Products = () => {
  const [searchProduct,setSearchProduct]=useState("");

  return (
    <>
      <Grid
        container
        justifyContent="center"
        padding="72px 0"
        bgcolor="#F6F9FC"
      >
        <Grid item xs={11} sm={11} md={10} lg={9} xl={8}>
          <input type="text" placeholder="Buscar producto" onChange={(e)=>setSearchProduct(e.target.value.toUpperCase())}/>
          <Box sx={{display:"flex",justifyContent:"center"}}>
            <Typography variant="h3" fontWeight="700">
              Products
            </Typography>
          </Box>
          <Grid container justifyContent="space-evenly">
            
                <Product request={searchProduct}/>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
