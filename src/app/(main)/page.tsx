'use client';
import { Box } from '@mui/material';

import { AppContentWrapper } from '../../components/common/Global.style';
import About from '../../features/home/about/About';
import Hero from '../../features/home/hero/Hero';
import Institutes from '../../features/home/Institutes/Institutes';
import Process from '../../features/home/process/Process';
import Resources from '../../features/home/resources/Resources';
import Stats from '../../features/home/stats/Stats';
import Support from '../../features/home/support/Support';
import Testimonials from '../../features/home/testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AppContentWrapper>
        <About />
      </AppContentWrapper>
      <AppContentWrapper>
        <Testimonials />
      </AppContentWrapper>

      {/* <ScrollingFadeOut> */}
      <Process />
      {/* </ScrollingFadeOut> */}
      <Institutes />
      {/* <ScrollingFadeOut> */}
      <AppContentWrapper>
        <Resources />
      </AppContentWrapper>
      {/* </ScrollingFadeOut> */}

      <Box
        sx={{
          backgroundColor: '#fffbfb',
          zIndex: 20,
          paddingBottom: '60px',
          position: 'relative',
        }}
      >
        <Support />
      </Box>
    </>
  );
}
