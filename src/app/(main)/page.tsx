'use client';
import { Box } from '@mui/material';

import ScrollingFadeOut from '@/components/animations/ScrollingFadeOut';
import { AppContentWrapper } from '@/components/common/Global.style';
import About from '@/features/home/about/About';
import Hero from '@/features/home/hero/Hero';
import Institutes from '@/features/home/Institutes/Institutes';
import Process from '@/features/home/process/Process';
import Resources from '@/features/home/resources/Resources';
import Stats from '@/features/home/stats/Stats';
import Support from '@/features/home/support/Support';
import Testimonials from '@/features/home/testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AppContentWrapper>
        <About />
      </AppContentWrapper>

      {/* <ScrollingFadeOut> */}
        <Process />
      {/* </ScrollingFadeOut> */}
      <Box
        sx={{
          backgroundColor: '#fffbfb',
          zIndex: 20,
          position: 'relative',
        }}
      >
        <Institutes />
        <ScrollingFadeOut>
          <AppContentWrapper>
            <Resources />
          </AppContentWrapper>
        </ScrollingFadeOut>

        <Box
          sx={{
            backgroundColor: '#fffbfb',
            zIndex: 20,
            position: 'relative',
          }}
        >
          <Support />
          <AppContentWrapper>
            <Testimonials />
          </AppContentWrapper>
        </Box>
      </Box>
    </>
  );
}
