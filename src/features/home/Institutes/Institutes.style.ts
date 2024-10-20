'use client';

import { Box, styled, keyframes } from '@mui/material';

const infiniteScroll = keyframes`
  0% {
    transform: translateX(0); 
  }
  100% {
    transform: translateX(-50%); 
  }
`;

export const InstituteWrapper = styled(Box)({
  width: '100%',
  overflow: 'hidden', 
  padding: '20px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

export const InstituteTrack = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  whiteSpace: 'nowrap',
  animation: `${infiniteScroll} 40s linear infinite`, 
  '&:hover': {
    animationPlayState: 'paused', 
  },
});

export const InstituteImage = styled('img')(({ theme }) => ({
  width: 'auto',
  height: '100px',
  objectFit: 'contain',
  padding: '0 40px',
  [theme.breakpoints.down('lg')]: {
    height: '80px',
    padding: '0 30px',
  },
  [theme.breakpoints.down('md')]: {
    height: '60px',
    padding: '0 15px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '40px',
    padding: '0 10px',
  },
}));