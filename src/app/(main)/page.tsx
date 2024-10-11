import Image from 'next/image';

import { AppContentWrapper } from '@/components/common/Global.style';
import Hero from '@/components/Home/Hero/Hero';
import Stats from '@/components/Home/Stats/Stats';

export default function Home() {
  return (
    <>
      <Hero />

      <AppContentWrapper>
        <Stats />

        <Image src={'/Decorative/crosses.svg'} width={14} height={80} alt="crosses" style={{ float: 'right' }} />

      </AppContentWrapper>
    </>
  );
}
