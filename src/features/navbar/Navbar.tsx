'use client';

import Box from '@mui/material/Box';
import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/components/buttons/Button.style';
import LoginModal from '@/features/auth/login/LoginModal';
import SignUpModal from '@/features/auth/sign-up/SignUpModal';

import {
  NavbarButtonsContainer,
  NavbarContainer,
  NavbarContentWrapper,
  NavbarLink,
  NavbarLinksContainer,
  NavbarLogoHead
} from './Navbar.style';

const pages = ['Home', 'About', 'Resources', 'Pricing', 'Contact'];

function Navbar() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const handleOpenLogin = () => {
    setOpenLogin(true);
    setOpenSignUp(false);
  };
  const handleCloseLogin = () => setOpenLogin(false);

  const handleOpenSignUp = () => {
    setOpenSignUp(true);
    setOpenLogin(false);
  };
  const handleCloseSignUp = () => setOpenSignUp(false);

  return (
    <>
      <NavbarContainer position='fixed'>
        <Box>
          <NavbarContentWrapper>
            <NavbarLogoHead>
              <Image src={'/logo.png'} width={52} height={49} alt='Logo' />
            </NavbarLogoHead>

            <NavbarLinksContainer>
              {pages.map((page, index) => (
                <NavbarLink key={index} href={page === 'Contact' ? '/contact' : '/'}>
                  {page}
                </NavbarLink>
              ))}
            </NavbarLinksContainer>

            <NavbarButtonsContainer>
              <Button onClick={handleOpenLogin}>Login</Button>
              <Button special onClick={handleOpenSignUp}>Sign Up</Button>
            </NavbarButtonsContainer>
          </NavbarContentWrapper>
        </Box>
      </NavbarContainer>

      <LoginModal open={openLogin} handleClose={handleCloseLogin} onSwitchToSignUp={handleOpenSignUp} />
      <SignUpModal open={openSignUp} handleClose={handleCloseSignUp} onSwitchToLogin={handleOpenLogin} />
    </>
  );
}

export default Navbar;