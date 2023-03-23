import React from 'react'
import { NavLink } from 'react-router-dom';
import { Grid, IconButton, Typography } from '@mui/material'

import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { FabWhatsapp } from './FabWhatsapp';
export const Navbar = () => {
  return (
    <>
    <Grid container justifyContent="center" height="60px" alignItems="center">
        <Grid item xs={11} sm={11} md={10} lg={9} xl={8}>
            <Grid container justifyContent="space-between" alignItems="baseline">
                <Grid item xl={1}>
                    <Typography variant="h3">Logo</Typography>
                </Grid>
                <Grid item xl={11} height="100%">
                    <Grid container justifyContent="flex-end">
                        <NavLink to={`/cart`}>
                            <IconButton>
                                <LocalGroceryStoreOutlinedIcon/>
                            </IconButton>
                        </NavLink>
                        <FabWhatsapp/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    </>
  )
}
