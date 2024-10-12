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

export const AuthBackdrop = styled(Backdrop)({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(7.8px)',
});

export const AuthBaseModalContainer = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const AuthModalContainer = styled(AuthBaseModalContainer)({});

export const BaseModalContent = styled(Box)({
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '20px',
  width: '100%',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  zIndex: 1,
});

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

export const AuthBaseTypography = styled(Typography)({
  fontFamily: 'var(--font-poppins)',
  color: '#000000',
  textAlign: 'center',
});

export const AuthHeadingTypography = styled(AuthBaseTypography)({
  fontWeight: 600,
  fontSize: '16px',
  textTransform: 'uppercase',
});

export const AuthParaTypography = styled(AuthBaseTypography)({
  fontWeight: 400,
  fontSize: '8px',
});

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

export const AuthStyledLinkTwo = styled(AuthStyledLinkOne)({
  color: '#00B8C9',
  textAlign: 'center',
  display: 'inline-block',
});
