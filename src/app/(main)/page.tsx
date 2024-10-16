import { AppContentWrapper } from '@/components/common/Global.style';
import About from '@/features/home/about/About';
import Hero from '@/features/home/hero/Hero';
import Institutes from '@/features/home/Institutes/Institutes';
import Practicing from '@/features/home/practicing/Practicing';
import Process from '@/features/home/process/Process';
import Stats from '@/features/home/stats/Stats';
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
        <Practicing />
        <Testimonials />
      </AppContentWrapper>
    
    </>
  );
}
