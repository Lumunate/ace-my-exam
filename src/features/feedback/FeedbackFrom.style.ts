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
    fontWeight: 600,
    height: '36px !important',
    fontFamily: 'Jost, sans-serif !important',
    marginTop: '15px'
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
  '& .react-datepicker': {
    fontFamily: 'Lato, sans-serif',
    borderRadius: '12px',
    overflow: 'hidden',
    border: 'none',
    boxShadow: '0px 4px 39.5px 0px rgba(0, 0, 0, 0.10)',
    width: '220px',
  },
  '& .react-datepicker__month-container': {
    width: '100%',
  },
  '& .react-datepicker__header': {
    background: '#fff',
    borderBottom: '1px solid #e5e5e5',
    padding: '10px 15px'
  },
  '& .react-datepicker__day': {
    fontSize: '10px'
  },
  '& .react-datepicker__day-names': {
    marginTop: '6px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  '& .react-datepicker__day-name': {
    fontWeight: 600,
    fontSize: '10px',
  },
  '& .react-datepicker__day--selected': {
    borderRadius: '50%',
    background: '#da9694',
  },
  '& .react-datepicker__current-month': {
    fontSize: '14px',
    fontWeight: 500,
  },
  '& .react-datepicker__month': {
    margin: '10px 15px 20px'
  },
  '& .react-datepicker__week': {
    padding: '3px 0',
    display: 'flex',
    justifyContent: 'space-between',
  },
  '& .react-datepicker-popper .react-datepicker__triangle': {
    stroke: 'none',
    display: 'none'
  },
  '& .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle': {
    fill: 'none',
    color: 'none',
  },
  '& .react-datepicker__navigation': {
    top: '5px'
  },
  '& .react-datepicker__navigation-icon::before': {
    borderColor: '#000',
    borderWidth: '1px 1px 0 0'
  },
}));