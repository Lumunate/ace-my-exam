'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

import {
  AboutHeroContent,
  AboutHeroContentContainer,
  AboutHeroHeading,
  AboutHeroImage,
  AboutHeroImageContainer,
  AboutHeroImageOverlay,
  AboutHeroWrapper,
} from './About.style';
import FadeIn from '../../../components/animations/FadeIn';
import { AppContentWrapper } from '../../../components/common/Global.style';
import SectionHeading from '../../../components/section-heading/SectionHeading';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutHero: React.FC = () => {
  const aboutHeroWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = aboutHeroWrapperRef.current;

    if (element) {
      ScrollTrigger.create({
        trigger: element,
        start: 'bottom 100%', 
        end: 'bottom 60%',   
        scrub: true,
        markers: false, 
        onUpdate: (self) => {
          const progress = self.progress;
          const clampedProgress = Math.min(progress, 1);
          const calculatedRadius = clampedProgress * 100;

          element.style.setProperty('--dynamic-border-radius', `${calculatedRadius}px ${calculatedRadius}px 0 0`);
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <AboutHeroWrapper ref={aboutHeroWrapperRef}>
      <AboutHeroImageContainer>
        <picture>
          <source media="(max-width: 768px)" srcSet="/home/hero-bg-mbl.webp" />
          <source media="(min-width: 769px)" srcSet="/home/hero-bg.webp" />
          <AboutHeroImage
            src={'/home/hero-bg.webp'}
            width={0}
            height={0}
            sizes='100vw'
            alt='about'
          />
        </picture>
        <AboutHeroImageOverlay />
      </AboutHeroImageContainer>
      <AppContentWrapper width="1450px">
        <AboutHeroContentContainer>
          <FadeIn direction="left" distance={200} duration={1.5}>
            <SectionHeading
              text='About Us'
              align='start'
              showLeftLine={false}
              color='#fff'
              gradientType='first'
            />
            <AboutHeroHeading>About Acemyexam</AboutHeroHeading>
            <AboutHeroContent>
              Shaping Futures Through Personalized Education
            </AboutHeroContent>
          </FadeIn>
        </AboutHeroContentContainer>
      </AppContentWrapper>
    </AboutHeroWrapper>
  );
};

export default AboutHero;
