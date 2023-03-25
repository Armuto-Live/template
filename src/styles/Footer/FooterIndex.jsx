import { Grid,styled,Typography,Box } from "@mui/material";

export const ContainerFooter = styled(Grid)((theme) => ({}));
export const LeftFooter = styled(Grid)((theme) => ({
  justifyContent:"center",
  flexDirection:"column",
  alignItems:"center",
}));

export const CustomLogoFooter=styled('img')((theme)=>({
  display:"flex",
  height:"20vh",
}))

export const RightFooter = styled(Grid)((theme) => ({
}));


export const TitleFooter=styled(Typography)((theme)=>({
    marginBottom:"1.5rem",
}))

export const ContactItemFooter=styled(Box)((theme)=>({
    display:"flex",
    marginBottom:"1.3rem"
}))