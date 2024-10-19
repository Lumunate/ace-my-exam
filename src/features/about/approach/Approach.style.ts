'use client';

import { styled, Typography, Box, Divider } from '@mui/material';

export const  ApproachWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '120px 0 100px',
  textAlign: 'center',
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

export const ApproachHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '46px',
  color: '#000000',
  fontFamily: 'Jost, sans-serif',
  marginTop: '20px',
  marginBottom: '80px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '30px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '30px',
    lineHeight: 'normal',
    marginBottom: '60px'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '30px',
    lineHeight: 'normal',
    marginBottom: '40px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    marginTop: '10px',
    marginBottom: '30px'
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '16px',
  },
}));

export const  ApproachCardHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '32px',
  color: '#000',
  fontFamily: 'Lato, sans-serif',
  margin: '15px 0',
  [theme.breakpoints.down('xl')]: {
    fontSize: '26px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '22px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    margin: '10px 0',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '14px',
  },
}));

export const  ApproachCardPara = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '14px',
  color: '#000000',
  fontFamily: 'Lato, sans-serif',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    margin: '10px 0',
  },
}));

export const  ApproachCard = styled(Box)({
  textAlign: 'center',
});

export const ApproachCardDivider = styled(Divider)(({ theme }) => ({
  background: 'linear-gradient(to top, #FFFFFF 0%, #666666 46%, #FFFFFF 100%)',
  border: 'unset',
  width: '1px',
  height: '112px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    height: '1px',
    width: '60%',
    background: 'linear-gradient(to left, #FFFFFF 0%, #666666 46%, #FFFFFF 100%)',
  },
}));