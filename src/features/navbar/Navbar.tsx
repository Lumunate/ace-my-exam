'use client';

import Box from '@mui/material/Box';
import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/components/buttons/Button.style';
import LoginModal from '@/features/(auth)/login/loginModal';
import SignUpModal from '@/features/(auth)/sign-up/signUpModal';

import {
  NavbarButtonsContainer,
  NavbarContainer,
  NavbarContentWrapper,
  NavbarLink,
  NavbarLinksContainer,
} from './Navbar.style';

const pages = ['Home', 'About', 'Resources', 'Pricing', 'Contact'];

function Navbar() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  // Open and close handlers for Login Modal
  const handleOpenLogin = () => {
    setOpenLogin(true);
    setOpenSignUp(false); // Close SignUpModal when opening LoginModal
  };
  const handleCloseLogin = () => setOpenLogin(false);

  // Open and close handlers for Sign Up Modal
  const handleOpenSignUp = () => {
    setOpenSignUp(true);
    setOpenLogin(false); // Close LoginModal when opening SignUpModal
  };
  const handleCloseSignUp = () => setOpenSignUp(false);

  return (
    <>
      <NavbarContainer position='fixed'>
        <Box>
          <NavbarContentWrapper>
            <Image src={'/logo.png'} width={52} height={49} alt='Logo' />

            <NavbarLinksContainer>
              {pages.map((page) => (
                <NavbarLink key={page} href={'/'}>
                  {page}
                </NavbarLink>
              ))}
            </NavbarLinksContainer>

            <NavbarButtonsContainer>
              {/* Open Login Modal when Login button is clicked */}
              <Button onClick={handleOpenLogin}>Login</Button>
              {/* Open Sign Up Modal when Register button is clicked */}
              <Button special onClick={handleOpenSignUp}>Register</Button>
            </NavbarButtonsContainer>
          </NavbarContentWrapper>
        </Box>
      </NavbarContainer>

      {/* Login Modal */}
      <LoginModal open={openLogin} handleClose={handleCloseLogin} onSwitchToSignUp={handleOpenSignUp} />

      {/* Sign Up Modal */}
      <SignUpModal open={openSignUp} handleClose={handleCloseSignUp} onSwitchToLogin={handleOpenLogin} />
    </>
  );
}

export default Navbar;
