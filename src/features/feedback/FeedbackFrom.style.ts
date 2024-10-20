'use client';

import { Box, styled } from '@mui/material';

export const FeedbackFormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#FCFDFF',
  padding: '70px 58px 36px',
  borderRadius: '20px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  zIndex: 1,
  [theme.breakpoints.down('xl')]: {
    padding: '50px 40px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '40px 30px',
  },

  '& .react-datepicker-wrapper': {
    width: '100% !important',
    background: '#ffffff !important',
    color: 'black !important',
    border: 'none !important',
    outline: 'none !important',
  },

  '& .feedback-datepicker': {
    width: '100% !important',
    background: '#ffffff !important',
    border: 'none !important',
    outline: 'none !important',
    borderBottom: '1px solid #818181 !important',
    fontSize: '18px !important',
    color: '#000 !important',
    fontWeight: 500,
    height: '36px !important',
  },

  '& .feedback-datepicker::placeholder': {
    color: '#818181 !important',
    fontFamily: 'Jost, sans-serif !important',
    fontSize: '16px !important',
    textTransform: 'capitalize !important',
    fontWeight: 500,
  },

  '& .feedback-datepicker:focus': {
    borderBottom: '1px solid #000 !important',
  },
}));
