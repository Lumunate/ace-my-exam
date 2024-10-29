'use client';

import { styled, Typography, Box,  } from '@mui/material';

export const TestimonialsWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '150px 0 120px',
  textAlign: 'center',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    padding: '100px 0 ',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '80px 0 ',
  },
  [theme.breakpoints.down(400)]: {
    padding: '60px 0 ',
  },
}));

export const TestimonialsHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '50px',
  color: '#000000',
  fontFamily: 'Jost, sans-serif',
  marginBottom: '20px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '16px',
  },
}));
