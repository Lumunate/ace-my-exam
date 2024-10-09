"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonBase, ButtonBaseProps, styled } from '@mui/material';
import { Button } from './Button.style';
import { NavbarButtonsContainer, NavbarContainer, NavbarContentWrapper, NavbarLink, NavbarLinksContainer } from './Navbar.style';

const pages = ['Home', 'About', 'Resorces', 'Pricing', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <NavbarContainer position="static">
      <Box>
        <NavbarContentWrapper>
          <Image src={"/Logo.png"} width={52} height={49} alt='Logo' />

          <NavbarLinksContainer>
            {pages.map((page) => (
              <NavbarLink
                key={page}
                href={"/"}
                onClick={handleCloseNavMenu}
              >
                {page}
              </NavbarLink>
            ))}
          </NavbarLinksContainer>

          <NavbarButtonsContainer>
            <Button>
              Login
            </Button>
            <Button special>
              Register
            </Button>
          </NavbarButtonsContainer>
        </NavbarContentWrapper>
      </Box>
    </NavbarContainer>
  );
}
export default Navbar;