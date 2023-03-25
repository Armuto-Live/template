import { Box,styled,Card} from "@mui/material"

export const CardProduct=styled(Card)((theme)=>({
    background:"#F7FAFC",
    border:"1px solid black",
    borderRadius:"10px",
    boxShadow:"10px 10px 20px #5e6066 , -10px -10px 20px #ffffff",
    margin:"25px 10px",
    ':hover':{
        background:"red",
        width:"350px",
        Width:"100%",
    }
}))