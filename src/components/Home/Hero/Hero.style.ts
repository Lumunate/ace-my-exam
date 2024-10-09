"use client";
import { Button } from "@/components/common/Button.style";
import { Box, ButtonBase, styled, Typography } from "@mui/material";
import Image from "next/image";

export const HeroHeading = styled(Typography)({
  fontWeight: 700,
  fontSize: "4.6rem",
  lineHeight: "6.9rem",
  marginBottom: "2rem",
  textShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  textAlign: "center",
});

export const HeroContent = styled(Typography)({
  fontWeight: 600,
  fontSize: "1.8rem",
  lineHeight: "2.7rem",
  marginBottom: "1.2rem",
  textAlign: "center",
});

export const HeroCTAButton = styled(ButtonBase)({
  padding: "1.8rem 6.5rem",
  fontWeight: 700,
  fontFamily: "var(--font-poppins)",
  fontSize: "1.6rem",
  color: "white",
  lineHeight: "2.4rem",
  backgroundColor: "rgba(0, 184, 201, 1)",
  textAlign: "center",
  border: "none",
  borderRadius: "8px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "gray",
  },
});

export const HeroWrapper = styled(Box)({
  width: "100%",
  height: "100vh",
  position: "relative",
});

export const HeroImage = styled(Image)({
  width: "100%",
  height: "100vh",
  objectFit: "cover",
});

export const HeroImageOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 182, 201, 0.45)",
});

export const HeroContentContainer = styled(Box)({
  maxWidth: "770px",
  display: "flex",
  margin: "0 auto",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100%",
});

export const HeroImageContainer = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,

  boxShadow: "0px 4px 20.8px 0px rgba(0, 0, 0, 0.55)",
  maskImage: `url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H1917.5L1854.62 845.749C1850.04 907.354 1798.72 955 1736.95 955H0V0Z' fill='black'/%3E%3C/svg%3E")`,
  maskPosition: "center",
  maskRepeat: "no-repeat",
});
