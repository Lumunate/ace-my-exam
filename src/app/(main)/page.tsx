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
        <Process />
        <Institutes />
        <Resources />
      </AppContentWrapper>
      <Support />
      <AppContentWrapper>
        <Testimonials />
      </AppContentWrapper>
    </>
  );
}
