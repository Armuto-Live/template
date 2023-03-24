import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Grid, IconButton, Typography,Badge } from '@mui/material'

import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { FabWhatsapp } from './FabWhatsapp';

import LogoHome from '../../../assets/logo.svg'
export const Navbar = () => {
  return (
    <>
    <Grid container justifyContent="center" height="60px" alignItems="center" position="fixed" zIndex={1} bgcolor="lightskyblue">
        <Grid item xs={11} sm={11} md={10} lg={9} xl={8}>
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item xs={3}>
                    <NavLink to={`/`}>
                        <img src={LogoHome} alt="" />
                    </NavLink>
                </Grid>
                <Grid item xs={9} height="100%">
                    <Grid container justifyContent="flex-end">
                        <NavLink to={`/cart`}>
                            <Badge badgeContent={2} color="primary">
                                <IconButton>
                                    <LocalGroceryStoreOutlinedIcon/>
                                </IconButton>
                            </Badge>
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
