import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import {
  HeroContent,
  HeroContentContainer,
  HeroCTAButton,
  HeroHeading,
  HeroImage,
  HeroImageContainer,
  HeroImageOverlay,
  HeroWrapper,
} from "./Hero.style";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroImageContainer>
        <HeroImage src={"/Home/hero-bg.png"} width={1197} height={-1} alt="Hero background" />
        <HeroImageOverlay />
      </HeroImageContainer>

      <HeroContentContainer>
        <HeroHeading>WELCOME TO ACE MY EXAMS</HeroHeading>
        <HeroContent>
          Based in Cambridge, UK, Acemyexam provides best-in-class personalised learning to students in order to achieve academic
          excellence, confidence and academic growth.
        </HeroContent>
        <HeroContent>Serving students from UK and worldwide Offering bespoke tuition in Science and Maths.</HeroContent>
        <HeroContent>Achieve Your Goals Today!</HeroContent>
        <HeroCTAButton>Book Now</HeroCTAButton>
      </HeroContentContainer>
    </HeroWrapper>
  );
};

export default Hero;
