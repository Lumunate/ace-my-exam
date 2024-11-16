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
  [theme.breakpoints.down(350)]: {
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

export const ResourcesContentHeading = styled(Typography)(({ theme }) => ({ 
  fontWeight: 600,
  fontSize: '4rem',
  color: '#000000',
  fontFamily: 'Jost, sans-serif',
  [theme.breakpoints.down('xl')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '1.2rem',
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

export const ResourcesContentPara = styled(Typography)(({ theme }) => ({
  color: '#808080',
  fontFamily: 'Jost, sans-serif',
  marginBottom: '2.3rem',
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

export const ResourcesCardTypography = styled(Typography)(({ theme }) => ({
  color: '#000',
  fontSize: '1.6rem',
  fontWeight: 500,
  fontFamily: 'Lato, sans-serif',
  [theme.breakpoints.down('lg')]: {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
  }
}));

export const ResourcesContentSubHeading = styled(Typography)(({ theme }) => ({
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
  border: '1px solid #818181',
  boxShadow: '0px 4px 52.5px 0px rgba(0, 0, 0, 0.08)',
  borderRadius: '50px',
  background: '#fcfdff',
});
