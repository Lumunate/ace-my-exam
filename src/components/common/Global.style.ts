'use client';

import { Box, styled } from '@mui/material';

interface AppContentWrapperProps {
  width?: string; 
}

export const AppContentWrapper = styled(Box)<AppContentWrapperProps>(({ width }) => ({
  maxWidth: width || '1605px', 
  width: '100%',
  padding: '0 2rem',
  margin: '0 auto',
}));
