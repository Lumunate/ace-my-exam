'use client';
import Box from '@mui/material/Box';
import Image from 'next/image';
import * as React from 'react';

import { Button } from '@/components/buttons/Button.style';
import { NavbarButtonsContainer, NavbarContainer, NavbarContentWrapper, NavbarLink, NavbarLinksContainer } from './Navbar.style';

const pages = ['Home', 'About', 'Resorces', 'Pricing', 'Contact'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <NavbarContainer position="fixed">
      <Box>
        <NavbarContentWrapper>
          <Image src={'/logo.png'} width={52} height={49} alt="Logo" />

          <NavbarLinksContainer>
            {pages.map((page) => (
              <NavbarLink key={page} href={'/'} onClick={handleCloseNavMenu}>
                {page}
              </NavbarLink>
            ))}
          </NavbarLinksContainer>

          <NavbarButtonsContainer>
            <Button>Login</Button>
            <Button special>Register</Button>
          </NavbarButtonsContainer>
        </NavbarContentWrapper>
      </Box>
    </NavbarContainer>
  );
}
export default Navbar;
