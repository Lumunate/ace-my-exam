import { AppBar, Box, Drawer, List, ListItem, Menu, styled, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const CommonNavbarBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const CommonMenu = styled(Menu)({
  '& .MuiPaper-root': {
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
    padding: '8px',
  },
});

export const NavbarContainer = styled(AppBar)(({ theme }) => ({
  maxWidth: '1605px !important',
  backgroundColor: 'transparent',
  width: '100%',
  padding: '20px !important',
  boxShadow: 'unset',
  [theme.breakpoints.up('lg')]: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '20px !important',
    right: '50%',
    transform: 'translateX(50%)',
    marginTop: '25px !important',
    blur: '26px',
    boxShadow: '0 4px 37.5px 0 rgba(0,0,0,0.17)',
    width: '97.5%',
    maxWidth: '1605px !important',
  },
}));

export const NavbarContentWrapper = styled(Toolbar)({
  height: 'max-content',
  minHeight: '16px !important',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 !important',
  width: '100%'
});

export const NavbarLinksContainer = styled(CommonNavbarBox)({});

export const NavbarButtonsContainer = styled(CommonNavbarBox)({
  justifyContent: 'space-between',
  gap: '11px',
  width: '203px',
});

export const NavbarLogoHead = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('lg')]: {
    width: '203px',
  },
}));

export const NavbarDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    padding: '20px',
    borderRadius: '20px 0 0 20px',
    boxShadow: '0px 4px 39.5px 0px rgba(0, 0, 0, 0.10)',
  },
  '& .MuiBackdrop-root':{
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
    backdropFilter: 'blur(14px)',
  }
});

export const NavbarLinkWrapper = styled(ListItem)<{ smallSR?: boolean }>(
  ({ theme, smallSR }) => ({
    margin: smallSR ? '12px 0' : '0 36px',
    textAlign: smallSR ? 'start' : 'center',
    padding: '0',
    [theme.breakpoints.down('lg')]: {
      margin: smallSR ? '12px 0' : '0 10px', 
    },
  })
);

export const NavbarLink = styled(Link)({
  color: '#000',
  fontWeight: 700,
  fontSize: '15px',
  textTransform: 'capitalize',
  fontFamily: 'Lato, sans-serif',
});

export const NavTypography = styled(Typography)({
  color: '#000',
  fontWeight: 700,
  fontSize: '15px',
  textTransform: 'capitalize',
  fontFamily: 'Lato, sans-serif',
  marginBottom: '28px',
});

export const SmallScreenList = styled(List)({
  display: 'flex',
  flexDirection: 'column',
});

export const DropdownMenuWrapper = styled(Box)({});

export const IconHeadBlack = styled(Image)({
  filter: 'brightness(0) saturate(100%) invert(0%) sepia(5%) saturate(7500%) hue-rotate(228deg) brightness(106%) contrast(106%)',
});
