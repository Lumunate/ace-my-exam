'use client';

import { Box, styled, Typography } from '@mui/material';

export const PrivacyPolicyContainer = styled(Box)(({ theme }) => ({
  paddingTop: '240px !important',
  width: '1200px',
  maxWidth: 'calc(100% - 60px) !important',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100% !important',
    padding: '0 20px',
  },
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: '#1F1F1F',
  fontSize: '50px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '40px',
    lineHeight: 'normal',
  },
}));