'use client';

import { Avatar, Box, IconButton, MenuItem, } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';

import {
  CommonMenu,
  DropdownMenuWrapper,
  IconHeadBlack,
  NavbarButtonsContainer,
  NavbarContainer,
  NavbarContentWrapper,
  NavbarLink,
  NavbarLinksContainer,
  NavbarLinkWrapper,
  NavbarLogoHead,
  NavTypography,
  SmallScreenList,
  NavbarDrawer,
  AvatarDropdownMenuWrapper,
  DropdownIcon,
} from './Navbar.style';
import { Button } from '../../components/buttons/Button.style';
import { AppContentWrapper } from '../../components/common/Global.style';
import { IStepOption } from '../../contexts/MultiStepperContext';
import LoginModal from '../../features/auth/login/LoginModal';
import SignUpModal from '../../features/auth/sign-up/SignUpModal';
import { educationLevelOptions } from '../../hooks/resources/useReferenceData';
import useMultiStepForm from '../../hooks/useMultiStepper';
import { EducationLevel } from '../../types/resources';

const pages = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Resources', link: '/resources' },
  { name: 'Pricing', link: '/pricing' },
  { name: 'Contact', link: '/contact' },
];

const Navbar: React.FC = () => {
  const router = useRouter();
  const session = useSession();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [avatarAnchorEl, setAvatarAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const {
    selectOptionNavbar,
    setCurrentStep,
  } = useMultiStepForm();

  const open = Boolean(anchorEl);
  const avatarOpen = Boolean(avatarAnchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAvatarAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleResourcesClick = (resource: IStepOption) => {
    selectOptionNavbar('educationalResources', resource);

    const step = resource.value === EducationLevel.ENTRANCE_EXAMS ? 1.5 : 2;

    setCurrentStep(step);

    router.push('/resources');

    handleClose();
  };

  const handleAvatarClose = () => {
    setAvatarAnchorEl(null);
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

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <>
      <NavbarContainer position="fixed">
        <AppContentWrapper>
          <NavbarContentWrapper>
            <NavbarLogoHead href="/">
              <Image src={'/logo.svg'} width={120} height={65} alt="Logo" />
            </NavbarLogoHead>

            <NavbarLinksContainer sx={{ display: { xs: 'none', lg: 'flex' } }}>
              {pages.map((page, index) =>
                page.name === 'Resources' ? (
                  <DropdownMenuWrapper key={index}>
                    <NavbarLinkWrapper>
                      <NavbarLink
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        href="/resources"
                      >
                        {page.name}
                      </NavbarLink>
                      <DropdownIcon
                        src="/icons/down-black.svg"
                        alt="dropdown-icon"
                        sx={{ cursor: 'pointer' }}
                        open={open}
                        width={12}
                        height={9}
                        onClick={handleClick}
                      />
                    </NavbarLinkWrapper>

                    <CommonMenu
                      id="fade-menu"
                      MenuListProps={{
                        'aria-labelledby': 'fade-button',
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      disableScrollLock={true}
                      transformOrigin={{
                        horizontal: 'center',
                        vertical: 'top',
                      }}
                      anchorOrigin={{
                        horizontal: 'center',
                        vertical: 'bottom',
                      }}
                      sx={{ transform: 'translate(-40px ,20px)' }}
                    >
                      {educationLevelOptions.map((resource, idx) => (
                        <MenuItem
                          key={idx}
                          onClick={() => handleResourcesClick(resource)}
                        >
                          {resource.name}
                        </MenuItem>
                      ))}
                    </CommonMenu>
                  </DropdownMenuWrapper>
                ) : (
                  <NavbarLinkWrapper key={index} smallSR={false}>
                    <NavbarLink href={page.link}>{page.name}</NavbarLink>
                  </NavbarLinkWrapper>
                )
              )}
            </NavbarLinksContainer>

            <NavbarButtonsContainer
              sx={{ display: { xs: 'none', lg: 'flex' } }}
            >
              {/* Avatar Dropdown for logged-in user, were going to use it in future */}
              {session.data ? (
                <AvatarDropdownMenuWrapper>
                  <IconButton onClick={handleAvatarClick}>
                    <Avatar src="" alt="User Avatar" />
                  </IconButton>
                  <CommonMenu
                    id="avatar-menu"
                    anchorEl={avatarAnchorEl}
                    open={avatarOpen}
                    onClose={handleAvatarClose}
                    disableScrollLock={true}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <MenuItem> 
                      <strong style={{ textTransform: 'none' }}>{session.data?.user?.email}</strong> 
                    </MenuItem>
                    {session?.data?.user?.role === 'ADMIN' && (
                      <MenuItem
                        onClick={() => {
                          router.push('/admin');
                        }}
                      > Admin</MenuItem>
                    )}
                    <MenuItem
                      onClick={() => {
                        signOut();
                      }}
                    >
                      Logout
                    </MenuItem>
                  </CommonMenu>
                </AvatarDropdownMenuWrapper>
              ) : (
                <>
                  <Button
                    fontSize="16px"
                    borderRadius="8px"
                    width="96px"
                    height="37px"
                    onClick={handleOpenLogin}
                  >
                    Login
                  </Button>

                  <Button
                    special
                    fontSize="16px"
                    borderRadius="8px"
                    width="96px"
                    height="37px"
                    onClick={handleOpenSignUp}
                  >
                    Sign Up
                  </Button>
                </>
              )}

              {/* Test Login/Sign Up buttons */}
            </NavbarButtonsContainer>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: 'block', lg: 'none' } }}
            >
              <Image
                src="/icons/menu.svg"
                alt="menu icon"
                width={24}
                height={24}
                style={{ filter: 'brightness(0%)' }}
              />
            </IconButton>

            <NavbarDrawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              sx={{ display: { xs: 'block', lg: 'none' } }}
            >
              <Box
                sx={{ maxWidth: 297, width: '90%', padding: '61px 58px' }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <SmallScreenList>
                  {pages?.map((page, index) => (
                    <NavbarLinkWrapper key={index} smallSR>
                      <NavbarLink href={page.link}>{page.name}</NavbarLink>
                    </NavbarLinkWrapper>
                  ))}
                </SmallScreenList>
                <Box sx={{ mt: 2 }}>
                  <NavTypography>Follow Us</NavTypography>
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}
                  >
                    <IconHeadBlack
                      src="/icons/youtube.svg"
                      alt="YouTube"
                      width={17}
                      height={12}
                    />
                    <IconHeadBlack
                      src="/icons/instagram.svg"
                      alt="Instagram"
                      width={14}
                      height={14}
                    />
                    <IconHeadBlack
                      src="/icons/degree.svg"
                      alt="degree"
                      width={19}
                      height={12}
                    />
                  </Box>
                </Box>
                <NavbarButtonsContainer
                  sx={{ display: { xs: 'flex', lg: 'none' }, mt: '20px' }}
                >
                  {session.data ? (
                    <Button
                      special
                      sx={{
                        minWidth: '140px',
                      }}
                      onClick={handleOpenSignUp}
                    >
                      Your Account
                    </Button>
                  ) : (
                    <>
                      <Button
                        fontSize="16px"
                        borderRadius="8px"
                        width="96px"
                        height="37px"
                        onClick={handleOpenLogin}
                      >
                        Login
                      </Button>

                      <Button
                        special
                        fontSize="16px"
                        borderRadius="8px"
                        width="96px"
                        height="37px"
                        onClick={handleOpenSignUp}
                      >
                        Sign Up
                      </Button>
                    </>
                  )}
                </NavbarButtonsContainer>
              </Box>
            </NavbarDrawer>
          </NavbarContentWrapper>
        </AppContentWrapper>
      </NavbarContainer>

      <LoginModal
        open={openLogin}
        handleClose={handleCloseLogin}
        onSwitchToSignUp={handleOpenSignUp}
      />
      <SignUpModal
        open={openSignUp}
        handleClose={handleCloseSignUp}
        onSwitchToLogin={handleOpenLogin}
      />
    </>
  );
};

export default Navbar;