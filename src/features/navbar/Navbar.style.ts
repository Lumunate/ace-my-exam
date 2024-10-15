import { AppBar, Box, styled, Toolbar } from '@mui/material';
import Link from 'next/link';

const CommonNavbarBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const NavbarContainer = styled(AppBar)({
  backgroundColor: 'white',
  maxWidth: '1605px !important',
  borderRadius: '20px',
  padding: '20px !important',
  right: '50%',
  transform: 'translateX(50%)',
  marginTop: '25px !important',
  blur: '26px',
  boxShadow: '0 4px 37.5px 0 rgba(0,0,0,0.17)',
});

export const NavbarContentWrapper = styled(Toolbar)({
  height: 'max-content',
  minHeight: '16px !important',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const NavbarLinksContainer = styled(CommonNavbarBox)({});

export const NavbarButtonsContainer = styled(CommonNavbarBox)({
  justifyContent: 'space-between',
  gap: '11px',
  width: '203px',
});

export const NavbarLogoHead = styled(Box)({
  width: '203px',
});

const CommonNavbarLink = styled(Link)({
  color: '#000',
  fontWeight: 700,
  fontSize: '15px',
  textTransform: 'capitalize',
  fontFamily: 'var(--font-lato)',
});

export const NavbarLink = styled(CommonNavbarLink)({
  margin: '0 36px',
});
