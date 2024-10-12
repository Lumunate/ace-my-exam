'use client';

import {
  Box,
  ButtonBase,
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

export const ContactFormContainer = styled(Box)({
  backgroundColor: '#FCFDFF',
  padding: '92px 68px 68px 51px',
  borderRadius: '20px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  zIndex: 1,
});
export const ContactLinksHead = styled(Box)({
  padding: '33px 0 33px 39px',
  borderLeft: '2px solid #00B8C9'
});

export const ContactButton = styled(ButtonBase)({
  padding: '8px',
  fontWeight: 400,
  fontFamily: 'var(--font-poppins)',
  fontSize: '14px',
  color: 'white',
  lineHeight: '2.4rem',
  backgroundColor: 'rgba(0, 184, 201, 1)',
  textAlign: 'center',
  border: 'none',
  borderRadius: '4px',
  transition: 'all 0.3s ease-in-out',
  boxShadow: '0 4px 11px rgba(0, 0, 0, 0.1)',
  width: '170px',
  marginTop: '60px',
  '&:hover': {
    backgroundColor: 'gray',
  },
});

export const ContactHeadingTypography = styled(Typography)({
  fontWeight: 700,
  fontFamily: 'var(--font-poppins)',
  color: '#1F1F1F',
  fontSize: '46px',
  textTransform: 'uppercase',
});
export const ContactParaTypography = styled(Typography)({
  fontWeight: 500,
  fontFamily: 'var(--font-poppins)',
  color: '#000000',
  fontSize: '16px',
  maxWidth: '586px'
});
export const ContactStyledLinkOne = styled(Link)({
  color: '#000000',
  textDecoration: 'none',
  fontFamily: 'var(--font-poppins)',
  fontSize: '16px',
  display: 'block',
  '&:hover': {
    textDecoration: 'underline',
  },
});
