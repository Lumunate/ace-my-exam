'use client';

import { styled, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';

export const ResourcesWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '150px 0',
  textAlign: 'center',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    padding: '120px 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '80px 0',
  },
  [theme.breakpoints.down(400)]: {
    padding: '60px 0',
  },
}));

export const ResourcesHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '49px',
  color: '#000000',
  fontFamily: 'Jost, sans-serif',
  fontStyle: 'normal',
  marginBottom: '75px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '30px',
    marginBottom: '50px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
    marginBottom: '40px',
  },
  [theme.breakpoints.down(400)]: {
    marginBottom: '20px',
    fontSize: '16px',
  },
}));

export const ResourcesImageContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
});

export const ResourcesImage = styled(Image)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const ResourcesImageOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(180deg, rgba(218, 150, 148, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%)',
});

export const ResourceGrid = styled(Grid)({
  maxWidth: '907px',
  margin: '0 auto',
  position: 'relative',
});

export const ResourceCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '273px',
  padding: '80px 28px 40px',
  borderRadius: '50px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
  alignItems: 'start',
  textAlign: 'start',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  cursor: 'pointer',
  [theme.breakpoints.down('md')]: {
    borderRadius: '30px',
  },
  '&:hover': {
    boxShadow: '0 6px 25px rgba(0, 0, 0, 0.15)',
    '& .resources-subtitle': {
      opacity: 1, 
      transform: 'translateY(0)', 
    },
  },
}));

export const BaseTypography = styled(Typography)({
  fontFamily: 'Lato, sans-serif',
  fontWeight: 400,
  color: '#fff',
});

export const ResourcesCardHeading = styled(BaseTypography)(({ theme }) => ({
  fontSize: '30px',
  marginBottom: '20px',
  lineHeight: '36px',
  maxWidth: '315px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '28px',
  },
  [theme.breakpoints.down(576)]: {
    fontSize: '20px',
    lineHeight: 'normal',
    maxWidth: '100%',
  },
}));

export const ResourcesCardSubHeading = styled(BaseTypography)(({ theme }) => ({
  fontSize: '14px',
  marginBottom: '10px',
  opacity: 0,
  transform: 'translateY(20px)', 
  transition: 'all 0.3s ease-in-out',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  [theme.breakpoints.down(400)]: {
    fontSize: '12px',
  },
}));
