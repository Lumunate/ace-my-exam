import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import FadeIn from '@/components/animations/FadeIn'; 
import { Button } from '@/components/buttons/Button.style';
import { AppContentWrapper } from '@/components/common/Global.style';
import SectionHeading from '@/components/section-heading/SectionHeading';

import {
  HeroCard,
  HeroCardHeading,
  HeroContent,
  HeroContentContainer,
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
        <picture>
          <source media="(max-width: 768px)" srcSet="/home/hero-bg-mbl.webp" />
          <source media="(min-width: 769px)" srcSet="/home/hero-bg.webp" />
          <HeroImage
            src="/home/hero-bg.webp"
            alt="Hero background"
            layout="fill"
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </picture>
        <HeroImageOverlay />
      </HeroImageContainer>
      <AppContentWrapper>
        <HeroContentContainer>
          <HeroLeftContentCont>
            <SectionHeading text="Success Starts Here" align="start" showLeftLine={false} color="#fff" gradientType="first" />
            <FadeIn direction="left" distance={200} duration={1.5}>
              <Box>
                <HeroHeading>Unlock Your Full Potential with AceMyExam</HeroHeading>
                <HeroContent>
                  Based in Cambridge, UK, Acemyexam provides best-in-class personalised learning to students in order to achieve academic excellence, confidence, and academic growth.
                </HeroContent>
                <HeroContent sx={{ mt: '30px' }}>Excel Academically Today!</HeroContent>
                <Link href={'/resources'}>
                  <Button
                    special
                    fontSize='16px'
                    borderRadius='50px'
                    width='212px'
                    height='60px'
                  
                  >
                  Get Started
                  </Button>
                </Link>
                
              </Box>
            </FadeIn>
          </HeroLeftContentCont>
          <HeroRightContentCont>
            <FadeIn direction="right" distance={200} duration={1.5}>
              <HeroCardComponent width={282}>
                <Image
                  src={'/icons/brain.svg'}
                  width={26}
                  height={32}
                  alt='icon'
                />
                <HeroCardHeading>Serving students from UK and worldwide</HeroCardHeading>
              </HeroCardComponent>
            </FadeIn>
            <Box sx={{ transform: { xs: 'translateX(10px)', sm: 'translateX(-33px)' } }}>
              <FadeIn direction="right" distance={200} duration={1.5}>
                <HeroCardComponent width={364}>
                  <Image
                    src={'/icons/brain.svg'}
                    width={26}
                    height={32}
                    alt='icon'
                  />
                  <HeroCardHeading>Offering bespoke tuition in Science and Maths.</HeroCardHeading>
                </HeroCardComponent>
              </FadeIn>
            </Box>

            <HeroMediaHead>
              <SectionHeading text="Follow Us" align="start" showLeftLine={false} color="#fff" gradientType="first" />
              <SocialIconsWrapper>
                <HeroLink href={'#'}>
                  <Image
                    src={'/icons/youtube.svg'}
                    width={27}
                    height={21}
                    alt='icon'
                  />
                </HeroLink>
                <HeroLink href={'#'}>
                  <Image
                    src={'/icons/instagram.svg'}
                    width={27}
                    height={24}
                    alt='icon'
                  />
                </HeroLink>
                <HeroLink href={'#'}>
                  <Image
                    src={'/icons/degree.svg'}
                    width={29}
                    height={22}
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
