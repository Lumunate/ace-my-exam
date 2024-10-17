import { AppContentWrapper } from '@/components/common/Global.style';
import SectionHeading from '@/components/section-heading/SectionHeading';

import {
  AboutHeroContent,
  AboutHeroContentContainer,
  AboutHeroHeading,
  AboutHeroImage,
  AboutHeroImageContainer,
  AboutHeroImageOverlay,
  AboutHeroWrapper,
} from './About.style';

const AboutHero: React.FC = () => {
  return (
    <AboutHeroWrapper>
      <AboutHeroImageContainer>
        <AboutHeroImage
          src={'/home/hero-bg.png'}
          width={1197}
          height={100}
          alt='Hero background'
        />
        <AboutHeroImageOverlay />
      </AboutHeroImageContainer>
      <AppContentWrapper  width="1450px">
        <AboutHeroContentContainer>
          <SectionHeading
            text='About Us'
            align='start'
            showLeftLine={false}
            color='#fff'
            gradientType='first'
          />
          <AboutHeroHeading>About Acemyexam</AboutHeroHeading>
          <AboutHeroContent>
            Shaping Futures Through Personalized Education
          </AboutHeroContent>
          <AboutHeroContent>Lprem Ipsum</AboutHeroContent>
        </AboutHeroContentContainer>
      </AppContentWrapper>
    </AboutHeroWrapper>
  );
};

export default AboutHero;
