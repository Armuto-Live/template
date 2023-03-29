import { createTheme,responsiveFontSizes } from "@mui/material";

let theme=createTheme({
    palette:{
        primary:{
            main:"#ee8181",
        }
    },
    typography:{
        h1:{
            fontSize:"3rem",
        },
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    toUpperCase:"true",
                    textTransform:"none",
                }
            }
        }
    }
});

theme=responsiveFontSizes(theme);
export default theme;