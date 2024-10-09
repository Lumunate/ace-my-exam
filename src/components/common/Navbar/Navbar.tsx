"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Button } from "../Button.style";
import { NavbarButtonsContainer, NavbarContainer, NavbarContentWrapper, NavbarLink, NavbarLinksContainer } from "./Navbar.style";

const pages = ["Home", "About", "Resorces", "Pricing", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

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
          <Image src={"/Logo.png"} width={52} height={49} alt="Logo" />

          <NavbarLinksContainer>
            {pages.map((page) => (
              <NavbarLink key={page} href={"/"} onClick={handleCloseNavMenu}>
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
