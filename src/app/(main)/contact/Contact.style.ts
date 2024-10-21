'use client';

import {
  Box,
  styled,
  Typography
} from '@mui/material';
import Link from 'next/link';

export const ContactContainer = styled(Box)(({ theme }) => ({
  padding: '235px 0',
  [theme.breakpoints.down('lg')]: {
    padding: '170px 0 100px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '150px 0 80px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '150px 0 60px',
  },
  [theme.breakpoints.down(576)]: {
    padding: '120px 0 40px',
  },
}));

export const ContactIconHead = styled(Box)({
  position: 'absolute',
  left: '-50px',
  top: '-60px',
});

export const ContactLinksHead = styled(Box)(({ theme }) => ({
  padding: '33px 0 33px 39px',
  borderLeft: '2px solid #DA9694',
  [theme.breakpoints.down('md')]: {
    padding: '0 30px',
    marginBottom: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0 20px',
  },
}));

export const ContactHeadingTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontFamily: 'Jost, sans-serif',
  color: '#1F1F1F',
  fontSize: '49px',
  textTransform: 'uppercase',
  [theme.breakpoints.down('xl')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px',
    lineHeight: 'normal',
    marginTop: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    maxWidth: '450px',
    lineHeight: 'normal',
    marginTop: '20px',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '16px',
    marginTop: '10px',
  },
}));
export const ContactParaTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontFamily: 'Lato, sans-serif',
  color: '#000000',
  fontSize: '16px',
  maxWidth: '586px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.down(576)]: {
    fontSize: '12px',
  }
}));

export const ContactStyledLinkOne = styled(Link)(({ theme }) => ({
  color: '#000000',
  textDecoration: 'none',
  fontFamily: 'Lato, sans-serif',
  fontSize: '16px',
  display: 'block',
  '&:hover': {
    textDecoration: 'underline',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.down(576)]: {
    fontSize: '12px',
  }
}));
