import { AppContentWrapper } from '@/components/common/Global.style';
// import About from '@/features/home/about/About';
import Hero from '@/features/home/hero/Hero';
import Stats from '@/features/home/stats/Stats';
import Testimonials from '@/features/home/testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AppContentWrapper>
        {/* <About /> */}
        <Testimonials />
      </AppContentWrapper>
    </>
  );
}
