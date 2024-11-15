'use client';

import { Box, styled, Typography } from '@mui/material';
import Image from 'next/image';

const CommonHeroTypography = styled(Typography)({
  fontWeight: 400,
  fontStyle: 'normal',
});

export const AboutHeroHeading = styled(CommonHeroTypography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '50px',
  marginTop: '25px',
  marginBottom: '10px',
  lineHeight: '53px',
  fontFamily: 'Jost, sans-serif',
  maxWidth: '600px',
  textTransform: 'capitalize',
  color: '#fff',
  [theme.breakpoints.down('xl')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px',
    lineHeight: 'normal',
  },
}));

export const AboutHeroContent = styled(CommonHeroTypography)(({ theme }) => ({
  fontSize: '18px',
  marginBottom: '20px',
  fontFamily: 'Lato, sans-serif',
  maxWidth: '779px',
  color: '#fff',
  [theme.breakpoints.down('xl')]: {
    fontSize: '16px',
  },
}));

export const AboutHeroWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: '-2px',
    left: '0',
    width: '100%',
    height: '50px',
    backgroundColor: '#fffbfb',
    borderRadius: 'var(--dynamic-border-radius, 0px)',
    zIndex: '0',
    [theme.breakpoints.down('lg')]: {
      borderRadius: '50px 50px 0 0',
    },
    [theme.breakpoints.down('md')]: {
      height: '100px',
    },
  },
}));

export const AboutHeroImage = styled(Image)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
});

export const AboutHeroImageContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
});

export const AboutHeroImageOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.46) 0%, rgba(0, 0, 0, 0.46) 100%)',
  filter: 'drop-shadow(0px 4px 20.8px rgba(0, 0, 0, 0.55)'
});

export const AboutHeroContentContainer = styled(Box)(({ theme }) => ({
  padding: '244px 0',
  [theme.breakpoints.down('lg')]: {
    flexWrap: 'wrap'
  },
}));