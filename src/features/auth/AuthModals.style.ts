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
  border: '1px solid rgba(255, 255, 255, 0.10)',
  backgroundColor: 'rgba(255, 255, 255, 0.10)',
  backdropFilter: 'blur(10px)',
});

export const AuthBaseModalContainer = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const AuthModalContainer = styled(AuthBaseModalContainer)({});

export const BaseModalContent = styled(Box)({
  backgroundColor: '#FCFDFF',
  padding: '0',
  borderRadius: '20px',
  width: '100%',
  boxShadow: '0px 4px 37px 0px rgba(0, 0, 0, 0.30)',
  zIndex: 1,
});

export const AuthModalContent = styled(BaseModalContent)({
  padding: '80px 56px',
  width: '347px',
});

export const AuthButton = styled(ButtonBase)({
  padding: '10.5px',
  fontWeight: 400,
  fontFamily: 'Lato, sans-serif',
  fontSize: '14px',
  color: 'white',
  lineHeight: '2.4rem',
  textAlign: 'center',
  border: 'none',
  borderRadius: '4px',
  transition: 'all 0.3s ease-in-out',
  width: '100%',
  boxShadow: '0px 4px 11.4px 0px rgba(0, 0, 0, 0.25)',
  backgroundColor: '#DA9694',
  '&:hover': {
    backgroundColor: 'gray',
  },
  marginTop: '2rem',
});

export const AuthBaseTypography = styled(Typography)({
  fontFamily: 'Lato, sans-serif',
  color: '#000000',
  textAlign: 'center',
});

export const AuthHeadingTypography = styled(AuthBaseTypography)({
  fontWeight: 600,
  fontSize: '16px',
  textTransform: 'uppercase',
  fontFamily: 'Jost, sans-serif',
});

export const AuthParaTypography = styled(AuthBaseTypography)({
  fontWeight: 400,
  fontSize: '8px',
});

export const AuthStyledLinkOne = styled(Link)({
  color: '#000000',
  textDecoration: 'none',
  fontFamily: 'Lato, sans-serif',
  fontSize: '8px',
  textAlign: 'end',
  display: 'block',
  '&:hover': {
    textDecoration: 'underline',
  },
});

export const AuthStyledLinkTwo = styled(AuthStyledLinkOne)({
  color: '#DA9694',
  textAlign: 'center',
  display: 'inline-block',
});
