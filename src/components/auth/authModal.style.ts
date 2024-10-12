'use client';

import {
  Modal,
  Box,
  ButtonBase,
  Typography,
  Backdrop,
  styled,
} from '@mui/material';
import Link from 'next/link';

// Style for the Backdrop
export const AuthBackdrop = styled(Backdrop)({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(7.8px)',
});

// Base Modal Container Styles
export const AuthBaseModalContainer = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

// Auth Modal Container extending the base modal container
export const AuthModalContainer = styled(AuthBaseModalContainer)({});

// Base Box content styles
export const BaseModalContent = styled(Box)({
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '20px',
  width: '100%',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  zIndex: 1,
});

// Auth Modal Content extending the base box content styles
export const AuthModalContent = styled(BaseModalContent)({
  padding: '69px 49px',
  width: '347px',
});

export const AuthButton = styled(ButtonBase)({
  padding: '10.5px',
  fontWeight: 400,
  fontFamily: 'var(--font-poppins)',
  fontSize: '14px',
  color: 'white',
  lineHeight: '2.4rem',
  textAlign: 'center',
  border: 'none',
  borderRadius: '4px',
  transition: 'all 0.3s ease-in-out',
  width: '100%',
  boxShadow: '0 4px 11px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'rgba(0, 184, 201, 1)',
  '&:hover': {
    backgroundColor: 'gray',
  },
  marginTop: '2rem',
});

// Base Typography Styles
export const AuthBaseTypography = styled(Typography)({
  fontFamily: 'var(--font-poppins)',
  color: '#000000',
  textAlign: 'center',
});

// AuthHeadingTypography extending AuthBaseTypography
export const AuthHeadingTypography = styled(AuthBaseTypography)({
  fontWeight: 600,
  fontSize: '16px',
  textTransform: 'uppercase',
});

// AuthParaTypography extending AuthBaseTypography with different font size and weight
export const AuthParaTypography = styled(AuthBaseTypography)({
  fontWeight: 400,
  fontSize: '8px',
});

// Base Link styles
export const AuthStyledLinkOne = styled(Link)({
  color: '#000000',
  textDecoration: 'none',
  fontFamily: 'var(--font-poppins)',
  fontSize: '8px',
  textAlign: 'end',
  display: 'block',
  '&:hover': {
    textDecoration: 'underline',
  },
});

// AuthStyledLinkTwo extending AuthStyledLinkOne with modified styles
export const AuthStyledLinkTwo = styled(AuthStyledLinkOne)({
  color: '#00B8C9',
  textAlign: 'center',
  display: 'inline-block',
});
