import { createTheme,responsiveFontSizes } from "@mui/material";

let theme=createTheme({
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