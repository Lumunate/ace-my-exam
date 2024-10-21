'use client';

import { styled, Typography, Box, } from '@mui/material';

export const  AboutTestimonialsWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '120px 0',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    padding: '100px 0',
  },
  [theme.breakpoints.down('md')]: {
    padding: '80px 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '60px 0',
  },
  [theme.breakpoints.down(576)]: {
    padding: '40px 0',
  },
}));

export const  AboutTestimonialsHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '49px',
  color: '#000000',
  fontFamily: 'Jost, sans-serif',
  margin: '10px 0',
  [theme.breakpoints.down('xl')]: {
    fontSize: '30px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '30px',
    lineHeight: 'normal',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '30px',
    lineHeight: 'normal',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '16px',
  },
}));

export const  AboutTestimonialsPara = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '16px',
  color: '#787878',
  fontFamily: 'Jost, sans-serif',
  marginBottom: '26px',
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    marginBottom: '20px',
  },
}));
