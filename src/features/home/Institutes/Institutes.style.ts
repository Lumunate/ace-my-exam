'use client';

import { Box, styled, keyframes } from '@mui/material';

const infiniteScroll = keyframes`
  0% {
    transform: translateX(0); /* Start with all images in view */
  }
  100% {
    transform: translateX(-50%); /* Move to left and wrap halfway */
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

export const InstituteImage = styled('img')({
  width: '150px',
  height: 'auto',
  objectFit: 'contain',
  padding: '0 20px',
});