'use client';

import { Box, ButtonBase, styled, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const CommonHeroTypography = styled(Typography)({
  fontWeight: 400,
  fontStyle: 'normal',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
});

export const HeroHeading = styled(CommonHeroTypography)({
  fontWeight: 600,
  fontSize: '49px',
  marginTop: '43px',
  marginBottom: '10px',
  lineHeight: '53px',
  fontFamily: 'Jost, sans-serif',
  maxWidth: '600px',
  textTransform: 'capitalize',
});

export const HeroContent = styled(CommonHeroTypography)({
  fontSize: '18px',
  marginBottom: '10px',
  fontFamily: 'Lato, sans-serif',
  maxWidth: '779px',
});

export const HeroCTAButton = styled(ButtonBase)({
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

export const HeroContentContainer = styled(Box)({
  padding: '265px 0 349px',
  display: 'flex',
  alignItems: 'end',
});

export const HeroLeftContentCont = styled(Box)({
  paddingBottom: '73px',
});

export const HeroRightContentCont = styled(Box)({
  position: 'relative',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  paddingRight: '110px',
});

export const HeroCard = styled(Box)<{ width?: number }>(({ width }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(6.9px)',
  padding: '20px 14px',
  borderRadius: '20px',
  border: '1px solid rgba(255, 255, 255, 0.10)',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
  maxWidth: width ? `${width}px` : '100%',
}));

export const HeroCardHeading = styled(CommonHeroTypography)({
  fontSize: '18px',
  fontFamily: 'Lato, sans-serif',
  textTransform: 'capitalize',
  marginLeft: '21px',
  flex: 1,
});

export const HeroMediaHead = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '40px',
  position: 'absolute',
  right: '0px',
  bottom: '70px',
  transform: 'rotate(90deg) translateY(-160px)',
  zIndex: 10,
});

export const SocialIconsWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '21px',
});

export const HeroLink = styled(Link)({
  transform: 'rotate(-90deg)',
});

export const HeroImageContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
});
