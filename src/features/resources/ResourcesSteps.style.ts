import { Card, styled, Typography, Link, Table, TableContainer } from '@mui/material';
import LinkNext from 'next/link';

export const ResourcesStepsLink = styled(LinkNext)(({ theme }) => ({
  color: '#818181',
  textAlign: 'start',
  fontFamily: 'Lato, sans-serif',
  fontSize: '16px',
  fontWeight: '400',
  textTransform: 'capitalize',
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}));

export const ResourcesCard = styled(Card)(({ theme }) => ({
  background: '#FFF',
  padding: '30px 20px',
  borderRadius: '20px',
  boxShadow: '0px 4px 39.5px 0px rgba(0, 0, 0, 0.10)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  justifyContent: 'center',
  [theme.breakpoints.down('xl')]: {
    padding: '30px 15px',
  },
}));

export const ResourcesCardTitle = styled(Typography)(({ theme }) => ({
  color: '#000',
  fontSize: '20px',
  fontWeight: 400,
  textAlign: 'center',
  fontFamily: 'Lato, sans-serif',
  marginTop: '12px',
  lineHeight: 'normal',
  [theme.breakpoints.down('xl')]: {
    fontSize: '18px',
  },
}));

export const TablePara = styled(Typography)(({ theme }) => ({
  color: '#818181',
  fontSize: '16px',
  fontWeight: 400,
  fontFamily: 'Jost, sans-serif',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}));

export const ResourcesTableContainer = styled(TableContainer)({
  boxShadow: 'unset',
  padding: 'unset',
  backgroundColor: 'unset',
  borderRadius: 'unset',
});

export const StyledTable = styled(Table)(({ theme }) => ({
  '& .MuiTableHead-root .MuiTableCell-root': {
    color: '#000',
    fontSize: '20px',
    fontWeight: 600,
    fontFamily: 'Jost, sans-serif',
    border: 'none',
    padding: '15px 0',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      padding: '10px 0',
    },
  },
  '& .MuiTableCell-root': {
    color: '#000',
    fontSize: '18px',
    fontWeight: 400,
    fontFamily: 'Jost, sans-serif',
    border: 'none',
    padding: '5px 0',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      padding: '4px 0',
    },
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: '#FF7F7B',
  fontFamily: 'Jost, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  textDecoration: 'none',
  cursor: 'pointer',
  marginLeft: '8px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    marginLeft: '4px',
  },
}));
