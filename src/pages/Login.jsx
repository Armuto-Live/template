import React from 'react'
import { Box,styled,TextField,Grid, Typography } from '@mui/material'

const Container=styled(Box)((theme)=>({
    width:"100vw",
    height:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background:"lightblue",
}))

const FormLogin=styled(Grid)((theme)=>({
    width:"25vw",
    background:"#f4f4f4f4",
    padding:"2rem",
}))
export const Login = () => {
  return (
    <Container>
        <FormLogin container justifyContent="center">
            <Grid item xs={12} marginBottom="2rem">
                <Grid container justifyContent="center">
                    <Typography variant="h5" color="initial">
                        Inicar Session
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent="center">
                    <TextField fullWidth label="Nombre usuario"/>
                    <TextField fullWidth label="Contraseña"/>
                </Grid>
            </Grid>
        </FormLogin>
    </Container>
  )
}
