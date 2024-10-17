'use client';

import {
  Box,
  styled,
  Typography
} from '@mui/material';
import Link from 'next/link';

export const ContactContainer = styled(Box)({
  padding: '235px 0',
});
export const ContactIconHead = styled(Box)({
  position: 'absolute',
  left: '-50px',
  top: '-60px',
});

export const ContactLinksHead = styled(Box)({
  padding: '33px 0 33px 39px',
  borderLeft: '2px solid #DA9694'
});

export const ContactHeadingTypography = styled(Typography)({
  fontWeight: 700,
  fontFamily: 'Jost, sans-serif',
  color: '#1F1F1F',
  fontSize: '49px',
  textTransform: 'uppercase',
});
export const ContactParaTypography = styled(Typography)({
  fontWeight: 500,
  fontFamily: 'Lato, sans-serif',
  color: '#000000',
  fontSize: '16px',
  maxWidth: '586px'
});
export const ContactStyledLinkOne = styled(Link)({
  color: '#000000',
  textDecoration: 'none',
  fontFamily: 'Lato, sans-serif',
  fontSize: '16px',
  display: 'block',
  '&:hover': {
    textDecoration: 'underline',
  },
});
