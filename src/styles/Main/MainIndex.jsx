import React from 'react'
import { Box,Grid,styled,keyframes } from '@mui/material'
import { Translate } from '@mui/icons-material'
import Logo from '../../assets/1g.png';
import Logo2 from '../../assets/2g.png';
import Logo3 from '../../assets/3g.png';

export const MainIndex = () => {
  return (
    <div>Index</div>
  )
}

export const  ContainerMain=styled(Grid)((theme)=>({
  background:"rgb(238,174,202)",
  background: "radial-gradient(circle, rgba(174,184,236,1) 0%, rgba(69,190,198,1) 100%)",
  height:"39rem",
  padding:"4.2% 0",
}))

export const CustomLogo=styled('img')((theme)=>({
  display:"flex",
  height:"20vh",
}))

export const BannerContainer=styled('div')((theme)=>({

  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  transformStyle:"preserve-3d",
}))
export const Banner=styled('div')((theme)=>({
  width:"300px",
  height:"375px",
  background:`url(${Logo3})`,
  backgroundSize:"cover",
  backgroundRepeat:"repeat-x",
  animation: `${rotation3d} 10s linear infinite`,
}))

const rotation3d=keyframes`
  from{
    background-position: 0 0;
  }
  to{
    background-position: 666px 0;
  }`;