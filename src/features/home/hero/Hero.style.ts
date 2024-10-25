'use client';

import { Box, styled, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const CommonHeroTypography = styled(Typography)({
  fontWeight: 400,
  fontStyle: 'normal',
});

export const HeroHeading = styled(CommonHeroTypography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '50px',
  marginTop: '43px',
  lineHeight: '53px',
  fontFamily: 'Jost, sans-serif',
  maxWidth: '600px',
  textTransform: 'capitalize',
  color: '#fff',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  [theme.breakpoints.down(1400)]: {
    fontSize: '44px',
  },
  [theme.breakpoints.down('xl')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px',
    lineHeight: 'normal',
    marginTop: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    maxWidth: '450px',
    lineHeight: 'normal',
    marginTop: '20px',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '16px',
    marginTop: '10px',
  },
}));

export const HeroContent = styled(CommonHeroTypography)(({ theme }) => ({
  fontSize: '18px',
  marginBottom: '10px',
  fontFamily: 'Lato, sans-serif',
  maxWidth: '779px',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  color: '#fff',
  [theme.breakpoints.down('xl')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    lineHeight: 'normal',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '12px',
  }

}));

export const HeroWrapper = styled(Box)({
  width: '100%',
  position: 'relative',
});

export const HeroImage = styled(Image)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const HeroImageOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(106deg, rgba(0, 0, 0, 0.29) 0.91%, rgba(218, 150, 148, 0.45) 99.09%)',
});

export const HeroContentContainer = styled(Box)(({ theme }) =>({
  padding: '265px 0 349px',
  display: 'flex',
  alignItems: 'end',
  [theme.breakpoints.down('lg')]: {
    padding: '180px 0 300px',
    flexWrap: 'wrap'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '160px 0 280px',
  },
  [theme.breakpoints.down(400)]: {
    padding: '150px 0 280px',
  },
}));

export const HeroLeftContentCont = styled(Box)(({ theme }) => ({
  paddingBottom: '73px',
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    paddingBottom: '100px',
  },
  [theme.breakpoints.down('sm')]: {
    paddingBottom: '30px',
  },
}));

export const HeroRightContentCont = styled(Box)(({ theme }) => ({
  position: 'relative',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  paddingRight: '110px',
  [theme.breakpoints.down('xl')]: {
    paddingRight: '70px',
  },
  [theme.breakpoints.down('sm')]: {
    paddingRight: '0',
    alignItems: 'start'
  },
}));

export const HeroCard = styled(Box)<{ width?: number }>(({ theme, width }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(6.9px)',
  padding: '20px 14px',
  borderRadius: '20px',
  border: '1px solid rgba(255, 255, 255, 0.10)',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
  maxWidth: width ? `${width}px` : '100%',
  [theme.breakpoints.down('sm')]: {
    width:'100%',
    padding: '15px 10px',
  },

}));

export const HeroCardHeading = styled(CommonHeroTypography)(({ theme }) => ({
  fontSize: '18px',
  fontFamily: 'Lato, sans-serif',
  textTransform: 'capitalize',
  marginLeft: '21px',
  flex: 1,
  color: '#fff',
  [theme.breakpoints.down('xl')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '12px',
  }
}));

export const HeroMediaHead = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '40px',
  position: 'absolute',
  right: '0px',
  bottom: '70px',
  transform: 'rotate(90deg) translateY(-160px)',
  zIndex: 10,
  [theme.breakpoints.down(1400)]: {
    bottom: '110px',
  },
  [theme.breakpoints.down('xl')]: {
    bottom: '160px',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const SocialIconsWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '21px',
});

export const HeroLink = styled(Link) ({
  display: 'inline-block',
  transition: 'transform 0.3s ease, filter 0.3s ease', 
  transform: 'rotate(-90deg)',
  '&:hover': {
    filter: 'invert(54%) sepia(34%) saturate(2600%) hue-rotate(329deg) brightness(92%) contrast(101%)',
    transform: 'scale(1.2) rotate(-90deg)',
  },
});

export const HeroImageContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
});
