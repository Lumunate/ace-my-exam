import { AppContentWrapper } from '@/components/common/Global.style';
import AboutHero from '@/features/about/about-hero/AboutHero';
import AboutTestimonials from '@/features/about/about-testimonials/AboutTestimonials';
import AboutApproach from '@/features/about/approach/Approach';
import AboutChoose from '@/features/about/choose/Choose';
import AboutFounder from '@/features/about/founder/Founder';

export default function About() {
  return (
    <>
      <AboutHero />
      <AppContentWrapper width="1450px">
        <AboutFounder />
        <AboutChoose />
        <AboutApproach />
        <AboutTestimonials />
      </AppContentWrapper>
    </>
  );
}
