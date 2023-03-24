import React from "react";
import { Box, styled, Grid, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import Logo from '../../../assets/Adidas_Logo.png'


import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Container = styled(Grid)((theme) => ({}));
const Left = styled(Grid)((theme) => ({
  justifyContent:"center",
}));

const CustomLogo=styled('img')((theme)=>({
  display:"flex",
  height:"20vh",
}))

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
    <Container container justifyContent="center" padding="45px 0">
      <Grid item xs={11} xl={8}>
        <Grid container justifyContent="space-between" spacing={2}>
            <Left item xl={6} container flexDirection="column" alignItems="center">
              <CustomLogo src={Logo}/>
              <Title variant="h6" margin="20px">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et autem cu
              </Title>
              <Stack direction="row" spacing={4} >
                <IconButton aria-label="delete">
                  <FacebookIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <InstagramIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <YouTubeIcon />
                </IconButton>
              </Stack>
            </Left>
            <Right item xl={6}>
                <Title variant="h6">Contacto</Title>
                <ContactItem>
                <LocationOnIcon sx={{marginRight:".5rem"}} /> Direccion
                </ContactItem>
                <ContactItem>
                <LocalPhoneIcon sx={{marginRight:".5rem"}} /> 99999999
                </ContactItem>
                <ContactItem>
                <MailIcon sx={{marginRight:".5rem"}} /> asdsd@asd.com
                </ContactItem>
            </Right>
        </Grid>
      </Grid>
    </Container>
  );
};
