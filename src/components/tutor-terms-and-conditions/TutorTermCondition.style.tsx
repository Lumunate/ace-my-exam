"use client"

import { Box, styled, Typography } from "@mui/material"

export const TutorTermConditionContainer = styled(Box)(({theme})=>({
    paddingTop:'240px !important',
    width:'1200px', 
    maxWidth: "calc(100% - 60px) !important",
    margin:'0 auto',
    [theme.breakpoints.down('sm')]: {
        maxWidth: "100% !important",
        padding:'0 20px',
      },

}))

export const Heading = styled(Typography)(({theme})=>({
    fontWeight: 700,
    color: '#1F1F1F',
    fontSize: '50px',
    textTransform: 'uppercase',
    [theme.breakpoints.down('xl')]: {
      fontSize: '40px',
      
      lineHeight: 'normal',
    },
    
}))

export const SubHeading = styled(Typography)(({theme})=>({
    fontWeight: 700,
  fontSize: '36px',
  color: '#000000',
  fontFamily: 'Jost, sans-serif',
  marginTop: '20px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '30px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '30px',
    lineHeight: 'normal',
  },
  
}))