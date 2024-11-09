'use client';

import { Box } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import { AppContentWrapper } from '@/components/common/Global.style';
import About from '@/features/home/about/About';
import Hero from '@/features/home/hero/Hero';
import Institutes from '@/features/home/Institutes/Institutes';
import Process from '@/features/home/process/Process';
import Resources from '@/features/home/resources/Resources';
import Stats from '@/features/home/stats/Stats';
import Support from '@/features/home/support/Support';
import Testimonials from '@/features/home/testimonials/Testimonials';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const contentWrapperRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.scrolling-section',
        start: 'top  center',
        end: '+=300%',
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    tl.to(
      '.scrolling-section',
      {
        opacity: 0,
        duration: 0.5,
      },
      '<'
    );
    // .to(
    //   contentWrapperRef.current,
    //   {
    //     scrollTrigger: {
    //       trigger: ".scrolling-section",
    //       start: "top center", 
    //       end: "bottom bottom",

    //       onEnter: () => {
    //         window.scrollTo({
    //           top: window.scrollY + window.innerHeight * 0.95,
    //           behavior: "smooth"
    //         });
    //       },

    //     },
    //   },
    //   ">"
    // )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Box ref={contentWrapperRef}>
      <Hero />
      <Stats />
      <AppContentWrapper>
        <About />
      </AppContentWrapper>

      <Box className="scrolling-section">
        <Process />
      </Box>
      <Box
        sx={{
          backgroundColor: '#fffbfb',
          zIndex: 20,
          position: 'relative',
        }}
      >
        <Institutes />
        <AppContentWrapper>
          <Resources />
        </AppContentWrapper>
        <Support />
        <AppContentWrapper>
          <Testimonials />
        </AppContentWrapper>
      </Box>
    </Box>
  );
}
