'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useDynamicBorderRadius = (
  elementRef: React.RefObject<HTMLDivElement>,
  maxRadius: number = 100,
  speedMultiplier: number = 2
) => {
  useEffect(() => {
    const element = elementRef.current;
    let trigger: ScrollTrigger | undefined;

    if (element) {
      trigger = ScrollTrigger.create({
        trigger: element,
        start: 'top 120%',
        end: 'top 60%',
        scrub: true,
        markers: false, 
        onUpdate: (self) => {
          const progress = self.progress * speedMultiplier;
          const clampedProgress = Math.min(progress, 1);
          const calculatedRadius = clampedProgress * maxRadius;

          element.style.setProperty('--dynamic-border-radius', `${calculatedRadius}px ${calculatedRadius}px 0 0`);
        },
      });
    }

    return () => {
      if (trigger) trigger.kill();
    };
  }, [elementRef, maxRadius, speedMultiplier]);
};
