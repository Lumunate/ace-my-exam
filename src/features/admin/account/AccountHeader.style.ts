'use client';
import { Box, styled, Typography } from '@mui/material';

export const AccountHeaderBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '30rem',
  borderRadius: '8px',
  backgroundColor: theme.palette.accent.main,
  position: 'relative',
  padding: '2.3rem',

  marginBottom: '6rem',
}));

export const BgWrapper = styled(Box)(() => ({
  position: 'absolute',
  top: '0',
  bottom: '0',
  right: '0',
  left: '0',
  width: '100%',
  height: '100%',
}));

export const NavbarWrapper = styled(Box)(() => ({
  filter: 'brightness(0) invert(1)',
}));

export const AccountWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '1.5rem',
  backgroundColor: 'rgba(255,255,255,0.85)',
  padding: '1.65rem',
  borderRadius: '8px',
  border: '1.5px solid white',
  blur: '20px',
  position: 'absolute',
  zIndex: 10,
  width: 'calc(100% - 4.3rem)',
  bottom: '-6rem',
}));

export const AccountDetailsBox = styled(Box)(() => ({
  display: 'flex',
  gap: '2.2rem',
  alignItems: 'center',
}));

export const AccountName = styled(Typography)(() => ({
  fontSize: '1.6rem',
  fontWeight: 600,
}));

export const AccountTag = styled(Typography)(() => ({
  fontSize: '1.2rem',
  color: '#666',
}));
