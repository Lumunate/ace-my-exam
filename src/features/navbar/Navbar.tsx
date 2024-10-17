'use client';

import Fade from '@mui/material/Fade';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import React, { useState } from 'react';

import { Button as StyledButton } from '@/components/buttons/Button.style';
import LoginModal from '@/features/auth/login/LoginModal';
import SignUpModal from '@/features/auth/sign-up/SignUpModal';

import {
  CommonMenu,
  DropdownMenuWrapper,
  NavbarButtonsContainer,
  NavbarContainer,
  NavbarContentWrapper,
  NavbarLink,
  NavbarLinksContainer,
  NavbarLogoHead
} from './Navbar.style';

const pages = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Resources', link: '/' }, 
  { name: 'Pricing', link: '/pricing' },
  { name: 'Contact', link: '/contact' }
];

const resources = ['Alevel Maths', 'GCSE/IGCSE Maths', 'GCSE/IGCSE Science', 'Entrance & Scholarship Exams'];

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
      <NavbarContainer position="fixed">
        <NavbarContentWrapper>
          <NavbarLogoHead href="/">
            <Image src={'/logo.png'} width={52} height={49} alt="Logo" />
          </NavbarLogoHead>

          <NavbarLinksContainer>
            {pages.map((page, index) => (
              page.name === 'Resources' ? (
                <DropdownMenuWrapper key={index}>
                  <NavbarLink id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} href={''}>
                    {page.name}
                  </NavbarLink>

                  <CommonMenu
                    id="fade-menu"
                    MenuListProps={{
                      'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    disableScrollLock={true}
                  >
                    {resources.map((resource, idx) => (
                      <MenuItem key={idx} onClick={handleClose}>
                        {resource}
                      </MenuItem>
                    ))}
                  </CommonMenu>
                </DropdownMenuWrapper>
              ) : (
                <NavbarLink key={index} href={page.link}>
                  {page.name}
                </NavbarLink>
              )
            ))}
          </NavbarLinksContainer>

          <NavbarButtonsContainer>
            <StyledButton onClick={handleOpenLogin}>Login</StyledButton>
            <StyledButton special onClick={handleOpenSignUp}>
              Sign Up
            </StyledButton>
          </NavbarButtonsContainer>
        </NavbarContentWrapper>
      </NavbarContainer>

      <LoginModal open={openLogin} handleClose={handleCloseLogin} onSwitchToSignUp={handleOpenSignUp} />
      <SignUpModal open={openSignUp} handleClose={handleCloseSignUp} onSwitchToLogin={handleOpenLogin} />
    </>
  );
};

export default Navbar;
