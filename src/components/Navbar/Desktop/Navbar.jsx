import React from 'react'
import { Grid,styled,Button, IconButton, Typography } from '@mui/material'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { CustomButton } from '../../../styles';

export const Navbar = () => {
  return (
    <>
    <Grid container justifyContent="center" height="60px">
        <Grid item xl={11}>
            <Grid container justifyContent="space-between" alignItems="baseline">
                <Grid item xl={1}>
                    <Typography variant="h3" color="initial">Logo</Typography>
                </Grid>
                <Grid item xl={11} height="100%">
                    <Grid container justifyContent="flex-end">
                        <CustomButton variant="text" color="primary">
                          Registrarme
                        </CustomButton>
                        <CustomButton variant="text" color="primary">
                          Iniciar Session
                        </CustomButton>
                        <IconButton>
                            <LocalGroceryStoreOutlinedIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    </>
  )
}
