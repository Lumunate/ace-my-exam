'use client';
import { Box } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const ScrollingFadeOut = ({ children }: { children: React.ReactNode }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top  center',
        end: '+=30%',
        scrub: true,
        pin: true,
        pinSpacing: false,
        onUpdate: (self) => {
          const opacity = 1 - self.progress;

          gsap.set(sectionRef.current, { opacity: opacity });
        },
      },
    });

    tl.to(
      sectionRef.current,
      {
        opacity: 0,
        duration: 0.5,
      },
      '<'
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <Box ref={sectionRef}>{children}</Box>;
};

export default ScrollingFadeOut;
