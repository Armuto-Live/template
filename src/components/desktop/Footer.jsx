// mui components
import { Grid, Stack, IconButton } from "@mui/material";

// mui icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

// style components
import {
  ContainerFooter,
  LeftFooter,
  CustomLogoFooter,
  TitleFooter,
  RightFooter,
  ContactItemFooter,
} from "../../styles";

// assets
import Logo from "../../assets/Adidas_Logo.png";

export const Footer = () => {
  return (
    <ContainerFooter container justifyContent="center" padding="45px 0">
      <Grid item xs={11} xl={8}>
        <Grid container justifyContent="space-between" spacing={2}>
          <LeftFooter item xl={6} container>
            <CustomLogoFooter src={Logo} />
            <TitleFooter variant="h6" margin="20px">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et autem
              cu
            </TitleFooter>
            <Stack direction="row" spacing={4}>
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
          </LeftFooter>
          <RightFooter item xl={6}>
            <TitleFooter variant="h6" sx={{justifyContent:"center", display:"flex"}}>Contacto</TitleFooter>
            <ContactItemFooter>
              <LocationOnIcon sx={{ marginRight: ".5rem" }} /> Direccion
            </ContactItemFooter>
            <ContactItemFooter>
              <LocalPhoneIcon sx={{ marginRight: ".5rem" }} /> 99999999
            </ContactItemFooter>
            <ContactItemFooter>
              <MailIcon sx={{ marginRight: ".5rem" }} /> asdsd@asd.com
            </ContactItemFooter>
          </RightFooter>
        </Grid>
      </Grid>
    </ContainerFooter>
  );
};
