import React from "react";
import { Box, styled, Grid, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import Logo from '../../../assets/Adidas_Logo.png'

const Container = styled(Grid)((theme) => ({}));
const Left = styled(Grid)((theme) => ({
  justifyContent:"center",
}));

const CustomLogo=styled('img')((theme)=>({
  display:"flex",
  height:"20vh",
}))

const Center = styled(Grid)((theme) => ({
}));
const Right = styled(Grid)((theme) => ({
}));


const Title=styled(Typography)((theme)=>({
    marginBottom:"1.5rem",
}))

const ContactItem=styled(Box)((theme)=>({
    display:"flex",
    marginBottom:"1.3rem"
}))
export const Footer = () => {
  return (
    <Container container justifyContent="center" bgcolor="lightcyan">
      <Grid item xl={8}>
        <Grid container justifyContent="space-between">
            <Left item xl={3} container flexDirection="column" alignItems="center">
              <CustomLogo src={Logo}/>
              <Title variant="h6" margin="20px">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et autem cum quidem impedit. Atque hic aliquid vitae asperiores laudantium, ut eveniet praesentium officiis distinctio facilis in debitis quo saepe odio?
              </Title>
            </Left>
            <Center item xl={6} container justifyContent="center">
              <Typography variant="h6">Enlaces</Typography>
            </Center>
            <Right item xl={3}>
                <Title variant="h6">Contacto</Title>
                <ContactItem>
                <LocationOnIcon sx={{marginRight:".5rem"}} /> Direccion
                </ContactItem>
                <ContactItem>
                <LocalPhoneIcon sx={{marginRight:".5rem"}} /> 99999999
                </ContactItem>
                <ContactItem>
                <MailIcon sx={{marginRight:".5rem"}} /> 
                </ContactItem>
            </Right>
        </Grid>
      </Grid>
    </Container>
  );
};
