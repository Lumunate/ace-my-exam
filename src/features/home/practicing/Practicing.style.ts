'use client';

import { styled, Typography, Box, Button,  } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';

export const PracticingWrapper = styled(Box)({
  width: '100%',
  padding: '150px 0',
  textAlign: 'center',
  overflow: 'hidden',
});

export const PracticingHeading = styled(Typography)({
  fontWeight: 600,
  fontSize: '49px',
  color: '#000000',
  fontFamily: 'var(--font-jost)',
  fontStyle: 'normal',
  marginBottom: '75px',
});

export const PracticingImageContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
});
export const PracticingImage = styled(Image)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const PracticingImageOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(180deg, rgba(218, 150, 148, 0.25) 0%, rgba(0, 0, 0, 0.7) 100%)',
});

export const ResourceGrid = styled(Grid)({
  maxWidth: '907px',
  margin: '0 auto',
  position: 'relative'
});

export const ResourceCard = styled(Box)({
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
  boxShadow:'0px 4px 4px 0px rgba(0, 0, 0, 0.25)',

});

export const PracticingCardHeading = styled(Typography)({
  fontSize: '30px',
  fontWeight: 400,
  marginBottom: '20px',
  fontFamily: 'var(--font-lato)',
  lineHeight: '36px',
  maxWidth: '315px',
});

export const ResourceButton = styled(Button)({
  backgroundColor: '#DA9694',
  color: '#fff',
  padding: '20px 59px',
  borderRadius: '50px',
  fontSize: '16px',
  textTransform: 'capitalize',
  fontWeight: 400,
  fontFamily: 'var(--font-lato)',
  boxShadow: '0px 4px 17px 0px rgba(0, 0, 0, 0.25)',
  '&:hover': {
    backgroundColor: '#c0605e',
  },
});
