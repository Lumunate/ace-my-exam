// import Image from 'next/image';

import { AppContentWrapper } from '@/components/common/Global.style';
import Hero from '@/features/home/hero/Hero';
import Stats from '@/features/home/stats/Stats';
import Testimonials from '@/features/home/testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />

      <AppContentWrapper>
        <Stats />

        {/* <Image src={'/decorative/crosses.svg'} width={14} height={80} alt="crosses" style={{ float: 'right' }} /> */}

        <Testimonials />

      </AppContentWrapper>
    </>
  );
}
