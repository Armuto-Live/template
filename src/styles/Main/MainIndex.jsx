import React from 'react'
import { Box,Grid,styled,keyframes } from '@mui/material'
import { Translate } from '@mui/icons-material'
import Logo from '../../assets/1g.png';
import Logo2 from '../../assets/5g.png';
import Logo3 from '../../assets/4g.jpg';

export const MainIndex = () => {
  return (
    <div>Index</div>
  )
}

export const  ContainerMain=styled(Grid)((theme)=>({
  background: "#FFF1F1",
  height:"39rem",
  padding:"4.2% 0",
}))

export const CustomLogo=styled('img')((theme)=>({
  display:"flex",
  height:"20vh",
}))

export const Banner=styled('img')((theme)=>({
  display:"flex",
  width:"100%",
}));

const rotation3d=keyframes`
  from{
    background-position: 0 0;
  }
  to{
    background-position: 666px 0;
  }`;