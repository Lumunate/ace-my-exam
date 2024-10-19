'use client';

import { Box, styled, Typography } from '@mui/material';

export const PricingWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '280px 0 150px',
  textAlign: 'center',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    padding: '170px 0 100px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '150px 0 80px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '150px 0 60px',
  },
  [theme.breakpoints.down(576)]: {
    padding: '120px 0 40px',
  },
}));

export const PricingHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '49px',
  color: '#000000',
  fontFamily: 'Jost, sans-serif',
  margin: '20px 0',
  [theme.breakpoints.down('xl')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '30px',
    lineHeight: 'normal',
    margin: '15px 0',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    lineHeight: 'normal',
    margin: '10px 0',

  },
  [theme.breakpoints.down(400)]: {
    fontSize: '16px',
    margin: '8px 0',

  },
}));

export const PricingPara = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '36px',
  color: '#666',
  fontFamily: 'Jost, sans-serif',
  [theme.breakpoints.down('xl')]: {
    fontSize: '28px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    lineHeight: 'normal',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
    lineHeight: 'normal',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '16px',
  },
}));
