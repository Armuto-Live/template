import React from "react";
import { Fab, Grid, styled,Link } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ContainerFap = styled(Grid)((theme) => ({
}));

export const FabWhatsapp = () => {
  return (
    <>
      <ContainerFap container >
        <Grid item xl={12}>
          <Grid container justifyContent="flex-end" alignItems="flex-start">
            <Grid item position="fixed" bottom="2rem" right="3rem">
                <Link href="https://api.whatsapp.com/send?phone=+51974263772&text=hola">
                  <Fab color="success">
                    <WhatsAppIcon sx={{color:"white"}}/>
                  </Fab>
                </Link>
            </Grid>
          </Grid>
        </Grid>
      </ContainerFap>
    </>
  );
};
