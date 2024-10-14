'use client';

import {  Box, List, ListItem, styled, Typography,  } from '@mui/material';
import Link from 'next/link';

export const FooterMain = styled(Box)({
  backgroundColor: '#00b8c9',
});
export const FooterContainer = styled(Box)({
  maxWidth: '1740px',
  width: '100%',
  margin: '0 auto',
  borderRadius: '20px 20px 0 0',
  padding: '22px 20px',
});

export const FooterWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const FooterLinksContainer = styled(List)({
  display: 'flex',
  alignItems: 'center'
});
export const FooterLogoHead = styled(Link)({
  display: 'flex',
  alignItems: 'center'
});
export const FooterMediaIcons = styled(List)({
  display: 'flex',
  alignItems: 'center'
});
export const FooterMediaItem = styled(ListItem)({
  padding: '0',
  paddingLeft: '18px',
  cursor: 'pointer'
});

export const FooterLink = styled(Link)({
  color: '#fff',
  fontWeight: 500,
  fontSize: '15px',
  textTransform: 'capitalize',
  fontStyle: 'normal',
  fontFamily: 'var(--font-poppins)',
  margin: '0 36px',
  whiteSpace: 'nowrap'
});
export const FooterHeading = styled(Typography)({
  color: '#fff',
  fontWeight: 500,
  fontSize: '15px',
  textTransform: 'capitalize',
  fontStyle: 'normal',
  fontFamily: 'var(--font-poppins)',
  marginLeft: '6.5px',
  whiteSpace: 'nowrap'
});
