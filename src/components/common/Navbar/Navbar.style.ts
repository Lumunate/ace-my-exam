import { AppBar, Box, styled, Toolbar } from "@mui/material";
import Link from "next/link";

export const NavbarContainer = styled(AppBar)({
  backgroundColor: "white",
  maxWidth: "1600px !important",
  borderRadius: "20px",
  padding: "20px !important",
  right: "50%",
  transform: "translateX(50%)",
  marginTop: "25px !important",
  blur: "26px",
  boxShadow: "0 4px 37.5px 0 rgba(0,0,0,0.17)",
});

export const NavbarContentWrapper = styled(Toolbar)({
  justifyContent: "space-between",
  height: "max-content",
  minHeight: "16px !important",
});

export const NavbarLinksContainer = styled(Box)({
  margin: "0 3rem",
  display: "flex",
  width: "100%",
  maxWidth: "710px",
  justifyContent: "space-between",
});

export const NavbarButtonsContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
});

export const NavbarLink = styled(Link)({
  color: "black",
  fontWeight: "500",
  fontSize: "1rem",
});
