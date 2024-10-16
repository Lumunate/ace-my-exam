import { AppBar, Box, styled, Toolbar, Menu } from '@mui/material';
import Link from 'next/link';

const CommonNavbarBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const CommonMenu = styled(Menu)({
  '& .MuiPaper-root':{
    transform: 'translate(-30px, 25px)',
    borderRadius: '0 0 15px 15px',
    boxShadow: '4px 20px 27.5px 0 rgba(0,0,0,0.17)',
    background: '#FCFDFF',
    padding: '10px',
    paddingTop: '20px',
  },
  '& .MuiMenuItem-root': {
    color: '#000',
    fontWeight: 400,
    fontSize: '10px',
    textTransform: 'capitalize',
    fontFamily: 'Lato, sans-serif',
    borderRadius: '4px',
    padding: '8px'
  }
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

export const NavbarLogoHead = styled(Link)({
  width: '203px',
  display: 'flex',
  alignItems: 'center',
});

const CommonNavbarLink = styled(Link)({
  color: '#000',
  fontWeight: 700,
  fontSize: '15px',
  textTransform: 'capitalize',
  fontFamily: 'Lato, sans-serif',
});

export const NavbarLink = styled(CommonNavbarLink)({
  margin: '0 36px',
});

export const DropdownMenuWrapper = styled(Box)({
});
