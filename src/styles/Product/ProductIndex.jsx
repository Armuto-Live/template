import { Box,styled,Card} from "@mui/material"

export const CardProduct=styled(Card)((theme)=>({
    background:"#F7FAFC",
    border:"1px solid black",
    borderRadius:"10px",
    boxShadow:"10px 10px 20px #5e6066 , -10px -10px 20px #ffffff",
    margin:"0 8px",
    width:"90%",
    transition:"all 0.2s ease",
    ':hover':{
        border:"4px solid red",
        transform:"scale(1.02)",
    }
}))