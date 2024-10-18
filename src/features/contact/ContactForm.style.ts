'use client';

import { Box, ButtonBase, styled } from '@mui/material';

export const ContactFormContainer = styled(Box)({
  backgroundColor: '#FCFDFF',
  padding: '92px 68px 68px 51px',
  borderRadius: '20px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  zIndex: 1,
});

export const ContactButton = styled(ButtonBase)({
  padding: '8px',
  fontWeight: 400,
  fontFamily: 'Lato, sans-serif',
  fontSize: '14px',
  color: 'white',
  backgroundColor: '#DA9694',
  textAlign: 'center',
  border: 'none',
  borderRadius: '4px',
  transition: 'all 0.3s ease-in-out',
  boxShadow: '0 4px 11px rgba(0, 0, 0, 0.1)',
  width: '170px',
  marginTop: '60px',
  '&:hover': {
    backgroundColor: '#c0605e',
  },
});