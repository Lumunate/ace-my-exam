'use client';

import { Box, styled, Typography,} from '@mui/material';

export const ChooseWrapper = styled(Box)(({ theme }) => ({
  padding: '120px 0',
  width: '100%',
  position: 'relative',
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

export const ChooseCard = styled(Box)(({ theme }) => ({
  width: '630px',
  height: '416px',
  position: 'absolute',
  left: '15px',
  top: '128px',
  zIndex: 2,
  padding: '80px 47px',
  boxShadow: '0px 4px 13.6px 0px rgba(0, 0, 0, 0.25)',
  borderRadius: '20px',
  background: '#FFF',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [theme.breakpoints.down('xl')]: {
    width: '500px',
  },
  [theme.breakpoints.down('md')]: {
    width: '80%',
    left: '10%',
    top: 'unset',
    bottom: '0',
    height: 'unset',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '40px 20px',
  },
  [theme.breakpoints.down(400)]: {
    width: '90%',
    left: '5%',
  },
}));

export const ChooseSkillCard = styled(Box)(({ theme }) => ({
  padding: '26px 30px',
  boxShadow: '0px 4px 13.6px 0px rgba(0, 0, 0, 0.25)',
  borderRadius: '20px',
  background: '#FFF',
  marginBottom: '15px',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('lg')]: {
    marginTop: '30px'
  },
  [theme.breakpoints.down(576)]: {
    padding: '16px 20px',
    borderRadius: '14px',
    marginTop: '20px'
  },
}));

const CommonHeroTypography = styled(Typography)({
  fontWeight: 400,
  fontStyle: 'normal',
  color: '#000000'
});

export const ChooseHeading = styled(CommonHeroTypography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '50px',
  marginTop: '10px',
  marginBottom: '10px',
  fontFamily: 'Jost, sans-serif',
  textTransform: 'capitalize',
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
    marginTop: '10px',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '16px',
  },
}));

export const ChoosePara = styled(CommonHeroTypography)(({ theme }) => ({
  fontSize: '16px',
  marginBottom: '26px',
  fontFamily: 'Jost, sans-serif',
  color: '#787878',
  fontWeight: 600,
  
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.down(576)]: {
    fontSize: '12px',
  },
}));

export const ChooseSkillCardHeading = styled(CommonHeroTypography)(({ theme }) => ({
  fontSize: '18px',
  fontFamily: 'Lato, sans-serif',
  color: '#000',
  fontWeight: 700,
  [theme.breakpoints.down('xl')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.down(576)]: {
    fontSize: '12px',
  },
}));

export const ChooseImgHead = styled(Box)(({ theme }) => ({
  height: '671px',
  width: '466px',
  borderRadius: '8px',
  boxShadow: '0px 4px 18.6px 0px rgba(0, 0, 0, 0.19)',
  overflow: 'hidden',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '0',
    top: '0',
    right: '0',
    background: 'linear-gradient(84deg, #DA9694 1.69%, rgba(0, 0, 0, 0.00) 98.3%)',
    borderRadius: '8px',
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: '671px',
    marginBottom: '140px'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '550px',
    marginBottom: '140px'
  },
  [theme.breakpoints.down(576)]: {
    width: '100%',
    height: '500px',
    marginBottom: '140px'
  },
  [theme.breakpoints.down(400)]: {
    width: '100%',
    height: '380px',
    marginBottom: '140px'
  },
}));