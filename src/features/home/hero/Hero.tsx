import Image from 'next/image';

import { AppContentWrapper } from '@/components/common/Global.style';
import SectionHeading from '@/components/section-heading/SectionHeading';

import {
  HeroCard,
  HeroCardHeading,
  HeroContent,
  HeroContentContainer,
  HeroCTAButton,
  HeroHeading,
  HeroImage,
  HeroImageContainer,
  HeroImageOverlay,
  HeroLeftContentCont,
  HeroLink,
  HeroMediaHead,
  HeroRightContentCont,
  HeroWrapper,
  SocialIconsWrapper,
} from './Hero.style';

interface HeroCardProps {
  width: number;
  children: React.ReactNode; 
}

const HeroCardComponent: React.FC<HeroCardProps> = ({ width, children }) => (
  <HeroCard width={width}>
    {children}
  </HeroCard>
);

const Hero: React.FC = () => {
  return (
    <HeroWrapper>
      <HeroImageContainer>
        <HeroImage src={'/home/hero-bg.png'} width={1197} height={100} alt="Hero background" />
        <HeroImageOverlay />
      </HeroImageContainer>
      <AppContentWrapper>
        <HeroContentContainer>
          <HeroLeftContentCont>
            <SectionHeading text="Success Starts Here" align="start" showLeftLine={false} color="#fff"  gradientType="first" />
            <HeroHeading>Unlock Your Full Potential with AceMyExam</HeroHeading>
            <HeroContent>
              Based in Cambridge, UK, Acemyexam provides best-in-class personalised learning to students in order to achieve academic excellence, confidence, and academic growth.
            </HeroContent>
            <HeroContent>Excel Academically Today!</HeroContent>
            <HeroCTAButton>Get Started</HeroCTAButton>
          </HeroLeftContentCont>
          <HeroRightContentCont>
            <HeroCardComponent width={282}>
              <Image
                src={'/icons/brain.svg'}
                width={26}
                height={32}
                alt='icon'
              />
              <HeroCardHeading>Serving students from UK and worldwide</HeroCardHeading>
            </HeroCardComponent>
            <HeroCardComponent width={364}>
              <Image
                src={'/icons/brain.svg'}
                width={26}
                height={32}
                alt='icon'
              />
              <HeroCardHeading>Offering bespoke tuition in Science and Maths.</HeroCardHeading>
            </HeroCardComponent>
            <HeroMediaHead>
              <SectionHeading text="Follow Us" align="start" showLeftLine={false} color="#fff"  gradientType="first" /> 
              <SocialIconsWrapper>
                <HeroLink href={'#'}>
                  <Image
                    src={'/icons/youtube.svg'}
                    width={17}
                    height={11}
                    alt='icon'
                  />
                </HeroLink>
                <HeroLink href={'#'}>
                  <Image
                    src={'/icons/instagram.svg'}
                    width={14}
                    height={14}
                    alt='icon'
                  />
                </HeroLink>
                <HeroLink href={'#'}>
                  <Image
                    src={'/icons/degree.svg'}
                    width={19}
                    height={12}
                    alt='icon'
                  />
                </HeroLink>
              </SocialIconsWrapper>
            </HeroMediaHead>
          </HeroRightContentCont>
        </HeroContentContainer>
      </AppContentWrapper>
    </HeroWrapper>
  );
};

export default Hero;
