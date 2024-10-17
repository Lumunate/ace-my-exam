'use client';

import { Box, ButtonBase, styled, Typography } from '@mui/material';
import Image from 'next/image';

const CommonHeroTypography = styled(Typography)({
  fontWeight: 400,
  fontStyle: 'normal',
});

export const AboutHeroHeading = styled(CommonHeroTypography)({
  fontWeight: 600,
  fontSize: '49px',
  marginTop: '43px',
  marginBottom: '10px',
  lineHeight: '53px',
  fontFamily: 'Jost, sans-serif',
  maxWidth: '600px',
  textTransform: 'capitalize',
});

export const AboutHeroContent = styled(CommonHeroTypography)({
  fontSize: '18px',
  marginBottom: '10px',
  fontFamily: 'Lato, sans-serif',
  maxWidth: '779px',
});

export const AboutHeroCTAButton = styled(ButtonBase)({
  padding: '20px 65px',
  fontWeight: 400,
  fontSize: '16px',
  color: '#FFF',
  backgroundColor: '#DA9694',
  border: 'none',
  borderRadius: '100px',
  fontStyle: 'normal',
  fontFamily: 'Lato, sans-serif',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: 'gray',
  },
});

export const AboutHeroWrapper = styled(Box)({
  width: '100%',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: '-2px',
    left: '0',
    width: '100%',
    height: '150px',
    backgroundColor: '#fffbfb',
    borderRadius: '100px 100px 0 0',
    zIndex: '0',
  },
});

export const AboutHeroImage = styled(Image)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'top',
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
  background: 'linear-gradient(106deg, rgba(0, 0, 0, 0.29) 0.91%, rgba(218, 150, 148, 0.45) 99.09%)',
});

export const AboutHeroContentContainer = styled(Box)({
  padding: '265px 0 244px',
});