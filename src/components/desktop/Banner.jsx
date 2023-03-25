// styled components
import { Grid, Typography,Box } from '@mui/material'
import { ContainerMain,CustomLogo } from '../../styles'

//components

//assets
import Logo from '../../assets/Adidas_Logo.png'

export const Main = () => {
  return (
    <ContainerMain container justifyContent="center" position="relative">
        <Grid item  xs={11} sm={11} md={10} lg={9} xl={8}>
            <Grid container justifyContent="space-between" alignItems="center"  height="100%">
                <Grid item xs={12} md={8} lg={8}  xl={8}>
                    <Typography variant="h1" color="initial">
                        Empieza a vender en línea
                    </Typography>
                </Grid>
                <Grid item sm={4} md={4} lg={4} xl={4} sx={{display:{xs:"none",md:"block"}}}>
                    <Box sx={{display:"flex",justifyContent:"center", alignItems:"center" }}>
                        <CustomLogo src={Logo} alt="" />
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    </ContainerMain>
  )
}
