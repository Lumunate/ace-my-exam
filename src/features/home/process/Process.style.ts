'use client';

import { styled, Typography, Box } from '@mui/material';

export const ProcessWrapper = styled(Box)(({ theme }) =>({
  width: '100%',
  padding: '150px 0 70px',
  textAlign: 'center',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    padding: '100px 0 60px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '80px 0 40px',
  },
}));

export const ProcessMain = styled(Box)({
  width: '100%',
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: '10px',
    borderRadius: '50px',
    height: '10px'
  },

  '&::-webkit-scrollbar-track': {
    background: '#da969440',
    borderRadius: '50px',
  },

  '&::-webkit-scrollbar-thumb': {
    background: '#1f1f1f',
    borderRadius: '50px',
  }

});

export const ProcessHeading = styled(Typography)(({ theme }) =>({
  fontWeight: 600,
  fontSize: '49px',
  color: '#000000',
  fontFamily: 'Jost, sans-serif',
  fontStyle: 'normal',
  marginTop: '23px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '30px',
    marginTop: '15px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
    marginTop: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '16px',
  },
}));