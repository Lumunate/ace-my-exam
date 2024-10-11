'use client';
import Box from '@mui/material/Box';
import Image from 'next/image';
import * as React from 'react';

import { Button } from '@/components/buttons/Button.style';

import { NavbarButtonsContainer, NavbarContainer, NavbarContentWrapper, NavbarLink, NavbarLinksContainer } from './Navbar.style';

const pages = ['Home', 'About', 'Resorces', 'Pricing', 'Contact'];

function Navbar() {
  return (
    <NavbarContainer position="fixed">
      <Box>
        <NavbarContentWrapper>
          <Image src={'/logo.png'} width={52} height={49} alt="Logo" />

          <NavbarLinksContainer>
            {pages.map((page) => (
              <NavbarLink key={page}  href={page === 'Contact' ? '/contact' : '/'}>
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
