import Image from 'next/image';

import { AppContentWrapper } from '@/components/common/Global.style';
import Hero from '@/components/home/hero/Hero';
import Stats from '@/components/home/stats/Stats';

export default function Home() {
  return (
    <>
      <Hero />

      <AppContentWrapper>
        <Stats />

        <Image src={'/decorative/crosses.svg'} width={14} height={80} alt="crosses" style={{ float: 'right' }} />

      </AppContentWrapper>
    </>
  );
}
