'use client';

import { Logout } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import { Box, IconButton, MenuItem, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';

import { StyledMenu } from './Navbar.style';

const Navbar = () => {
  const pathname = usePathname().split('/');
  const { data: session } = useSession();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
      }}
    >
      <Box>
        <BreadCrumbs pathname={pathname} />
        <Typography
          sx={{
            color: 'text.primary',
            fontWeight: 'bold',
            fontSize: '1.6rem',
          }}
        >
          {pathname[pathname.length - 1].charAt(0).toUpperCase() +
            pathname[pathname.length - 1].slice(1)}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          color: 'text.primary',
        }}
      >
        <NavbarMenuIcon email={session?.user?.email || ''} />
      </Box>
    </Box>
  );
};

const NavbarMenuIcon = ({ email }: { email: string }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    setAnchorEl(null);
    await signOut({ redirect: true, callbackUrl: '/' });
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <PersonIcon />
      </IconButton>

      <StyledMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'account-menu',
        }}
      >
        <MenuItem disableRipple>
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: '1rem',
              textAlign: 'center',
            }}
          >
            {email}
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout} disableRipple>
          <Logout />
          Logout
        </MenuItem>
      </StyledMenu>
    </>
  );
};

const BreadCrumbs = ({ pathname }: { pathname: string[] }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {pathname.map((path, index) => {
        if (index === 0) return null;

        return (
          <Typography
            sx={{
              color: index === pathname.length - 1 ? 'text.primary' : 'text.secondary',
              fontWeight: 'normal',
              fontSize: '1.4rem',
              lineHeight: '150%',
            }}
            key={index}
          >
            {path.charAt(0).toUpperCase() + path.slice(1)}
            {index !== pathname.length - 1 && <>&nbsp;/&nbsp;</>}
          </Typography>
        );
      })}
    </Box>
  );
};

export default Navbar;
