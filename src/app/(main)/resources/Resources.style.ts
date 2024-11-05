import { styled, Box, Typography } from '@mui/material';

export const Resourceswrapper = styled(Box)({
  padding: '135px 0  42px',
});

export const ResourcesContainer = styled(Box)(({ theme }) => ({
  padding: '50px 80px',
  backgroundColor: '#FCFDFF',
  borderRadius: '20px',
  border: '1px solid rgba(218, 150, 148, 0.32)',
  boxShadow: '0px 4px 52.5px 0px rgba(0, 0, 0, 0.08)',
  maxWidth: ' 1300px',
  width: '100%',
  margin: '0 auto',
  [theme.breakpoints.down('lg')]: {
    padding: '40px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '40px 30px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '30px 20px',
  },
  [theme.breakpoints.down(400)]: {
    padding: '30px 10px',
  },
}));

export const ResourcesHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '50px',
  color: '#000000',
  textAlign: 'center',
  fontFamily: 'Jost, sans-serif',
  [theme.breakpoints.down('xl')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '20px',
  },
}));

export const ResourcesPara = styled(Typography)(({ theme }) => ({
  color: '#808080',
  textAlign: 'center',
  fontFamily: 'Jost, sans-serif',
  fontSize: '18px',
  fontWeight: 500,
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '12px',
  },
}));

export const BreadcrumbsHeading = styled(Typography)(({ theme }) => ({
  color: '#818181',
  fontFamily: 'lato, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '10px',
  },
}));

export const ResourcesSubHeading = styled(Typography)(({ theme }) => ({
  color: '#000',
  fontSize: '30px',
  fontWeight: 600,
  fontFamily: 'Jost, sans-serif',
  textTransform: 'capitalize',
  [theme.breakpoints.down('lg')]: {
    fontSize: '24px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '22px',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '14px',
  },
}));

export const ResourcesErrorPara = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 300,
  fontFamily: 'Jost, sans-serif',
  textTransform: 'capitalize',
  [theme.breakpoints.down('lg')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '12px',
  },
}));

export const PaginationHead = styled(Box)({
  padding: '4px 10px',
  border: '1px solid #818181',
  boxShadow: '0px 4px 52.5px 0px rgba(0, 0, 0, 0.08)',
  borderRadius: '50px',
  background: '#fcfdff',
});
