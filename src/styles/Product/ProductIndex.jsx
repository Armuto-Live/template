import { Box,styled,Card} from "@mui/material"

export const CardProduct=styled(Card)((theme)=>({
    background:"#fff",
    borderRadius:"10px",
    margin:"0 8px",
    width:"90%",
    border:"0.1rem solid #eee",
    ':hover':{
        border:".1rem solid rgb(238,129,129)",
    }
}))