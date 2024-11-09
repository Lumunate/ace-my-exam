import { Pagination } from '@mui/material';
import {  styled } from '@mui/system';

export const StyledPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPagination-ul': {
    justifyContent: 'center',
    padding: '10px',
    [theme.breakpoints.down('sm')]: {
      padding: '0',
      height: '41px'
    },
    [theme.breakpoints.down(400)]: {
      height: '34px !important',
      padding: '0',
    },
  },
  '& .MuiPaginationItem-root': {
    color: '#000',
    fontSize: '14px',
    fontFamily: 'Lato, sans-serif',
    [theme.breakpoints.down('sm')]: {
      minWidth: '20px',
      height: '20px',
      fontSize: '12px',
    },
    '&.Mui-selected': {
      backgroundColor: '#DA9694', 
      color: '#FFF',
      '&:hover': {
        backgroundColor: '#DA9694',
      },
    },
    '&:hover': {
      backgroundColor: '#F0C0C0',
    },
  },
}));