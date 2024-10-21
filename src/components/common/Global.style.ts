'use client';

import { Box, styled } from '@mui/material';

interface AppContentWrapperProps {
  width?: string; 
}

export const AppContentWrapper = styled(Box)<AppContentWrapperProps>(({ theme, width }) => ({
  maxWidth: width || '1605px', 
  width: '100%',
  margin: '0 auto',
  [theme.breakpoints.down(1800)]: {
    padding: '0 100px',
  },
  [theme.breakpoints.down('xl')]: {
    padding: '0 60px',
  },
  [theme.breakpoints.down('lg')]: {
    padding: '0 40px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0 30px',
  },
  [theme.breakpoints.down(400)]: {
    padding: '0 20px',
  },
}));
