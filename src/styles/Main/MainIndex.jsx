import React from 'react'
import { Box,Grid,styled } from '@mui/material'

export const MainIndex = () => {
  return (
    <div>Index</div>
  )
}

export const  ContainerMain=styled(Grid)((theme)=>({
  background:"#eee",
  height:"39rem",
  padding:"4.2% 0",
}))

export const CustomLogo=styled('img')((theme)=>({
  display:"flex",
  height:"20vh",
}))