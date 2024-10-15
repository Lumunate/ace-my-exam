'use client';

import { Box, styled } from '@mui/material';

export const InstituteWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const InstituteGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
  gap: '29px',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '1200px',
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',  
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', 
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',  
    gap: '10px',  
  },
}));

export const InstituteImage = styled('img')({
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
  aspectRatio: '4 / 3', 
  borderRadius: '8px',
});
