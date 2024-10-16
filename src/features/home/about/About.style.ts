'use client';

import { Box, styled, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export const AboutWrapper = styled(Box)({
  width: '100%',
  position: 'relative',
});

export const AboutImgHead = styled(Box)({
  width: '100%',
});

export const AboutOverlayHead = styled(Box)({
  position: 'absolute',
  right: 0,
  top: '52px',
  width: '300px',
});

export const AboutCardTwoHead = styled(Box)({
  transform: 'translateX(-49px)'
});

export const AboutImage = styled(Image)({
  width: '90%',
  height: '100%',
  objectFit: 'cover',
  boxShadow: '0px 4px 37.5px 0px rgba(0, 0, 0, 0.33)',
  borderRadius: '28px',
});

export const AboutContentHead = styled(Box)({
  width: '100%',
});

const CommonHeroTypography = styled(Typography)({
  fontWeight: 400,
  fontStyle: 'normal',
});

export const AboutHeading = styled(CommonHeroTypography)({
  fontWeight: 600,
  fontSize: '49px',
  margin: '23px 0',
  fontFamily: 'Jost, sans-serif',
  maxWidth: '600px',
  color: '#000',
});

export const AboutPara = styled(CommonHeroTypography)({
  fontSize: '16px',
  fontFamily: 'Lato, sans-serif',
  color: '#000',
  fontWeight: 400,
  marginBottom: '20px'
});

export const AboutCardHeading = styled(CommonHeroTypography)<{ textColor: string }>(({ textColor }) =>({
  fontSize: '12px',
  fontFamily: 'Lato, sans-serif',
  color: textColor || '#000',
  fontWeight: 700,
  flex: 1,
  marginLeft: '12px'
}));

export const AboutCardContainer = styled(Box)<{ bgColor: string}>(({ bgColor }) => ({
  backgroundColor: bgColor,
  padding: '17px 14px',
  borderRadius: '20px',
  boxShadow: '0px 4px 13.6px 0px rgba(0, 0, 0, 0.25)',
  display: 'flex', 
  alignItems: 'center',
  height: '100%',
  marginBottom: '8px'
}));

export const AboutLink = styled(Link)({
  fontSize: '18px',
  marginBottom: '10px',
  fontFamily: 'Lato, sans-serif',
  color: '#DA9694',
  display: 'flex', 
  alignItems: 'center',
  marginTop: '23px',
});