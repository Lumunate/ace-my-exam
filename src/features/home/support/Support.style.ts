'use client';

import { styled, Typography, Box, Button, Divider } from '@mui/material';
import Image from 'next/image';

export const SupportWrapper = styled(Box)({
  width: '100%',
  padding: '110px 0 150px',
  position: 'relative',
});

export const SupportContentHead = styled(Box)({
  width: '100%',
});

export const SupportImageContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
});

export const SupportImage = styled(Image)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const SupportImageOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(84deg, rgb(218 150 148 / 80%) 0%, rgb(0 0 0 / 50%) 100%)',
});

export const SupportHeading = styled(Typography)({
  fontWeight: 600,
  fontSize: '49px',
  color: '#fff',
  fontFamily: 'Jost, sans-serif',
  fontStyle: 'normal',
  maxWidth: '825px',
});

export const SupportPara = styled(Typography)({
  fontWeight: 400,
  fontSize: '16px',
  color: '#fff',
  fontFamily: 'Lato, sans-serif',
  fontStyle: 'normal',
  marginBottom: '69px',
  maxWidth: '779px',
});

export const SupportCardDivider = styled(Divider)({
  background: 'linear-gradient(to top, #FFFFFF 0%, #666666 46%, #FFFFFF 100%)',
  border: 'unset',
  width: '1px',
});

export const SupportCardInnerHead = styled(Box)({
  padding: '33px 48px',
  flex: 1,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  textAlign: 'start',
});

export const SupportCardBtnHead = styled(Box)({
  background: '#DA9694',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  width: '394px',
});

export const SupportCard = styled(Box) ({
  flex: 1,
  borderRadius: '20px',
  backgroundColor: '#fff',
  boxShadow: '0px 10px 21.2px 0px rgba(0, 0, 0, 0.13)',
  height: '174px',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  position: 'absolute',
  bottom: '-37px',
  maxWidth: '1148px',
});

export const SupportCardPara = styled(Typography)({
  fontWeight: 400,
  fontSize: '14px',
  color: '#787878',
  fontFamily: 'Lato, sans-serif',
  fontStyle: 'normal',
  lineHeight: '22px',
  maxWidth: '315px',
});

export const SupportButton = styled(Button)({
  fontSize: '28px',
  fontWeight: 900,
  backgroundColor: 'transparent',
  fontFamily: 'Lato, sans-serif',
  border: 'none',
  color: '#fff',
  textTransform: 'capitalize',
});