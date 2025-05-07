import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import {
  ConsultantLink,
  HeroCard,
  HeroCardHeading,
  HeroContent,
  HeroContentContainer,
  HeroHeading,
  HeroImage,
  HeroImageContainer,
  HeroImageOverlay,
  HeroLeftContentCont,
  // HeroLink,
  // HeroMediaHead,
  HeroRightContentCont,
  HeroWrapper,
  // SocialIconsWrapper,
} from './Hero.style';
import FadeIn from '../../../components/animations/FadeIn'; 
import { Button } from '../../../components/buttons/Button.style';
import { AppContentWrapper } from '../../../components/common/Global.style';
import SectionHeading from '../../../components/section-heading/SectionHeading';

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
                <HeroHeading>Unlock Your Full Potential with Acemyexam</HeroHeading>
                <HeroContent>
                Based in Cambridge, UK, Acemyexam offers premium bespoke in-person and online tuition with a 99% success rate, helping students achieve top grades, secure school & university placements, and access exceptional educational resources.
                </HeroContent>
                <HeroContent sx={{ mt: '30px' }}>Excel Academically Today!</HeroContent>
                <Link href={'/contact'}>
                  <Button
                    special
                    fontSize='16px'
                    borderRadius='50px'
                    width='212px'
                    height='60px'
                  
                  >
                  Reach out now
                  </Button>
                </Link>
                <ConsultantLink href="/contact">Book a Free Consultation Now<Image
                  src={'/icons/arrow-right-w.svg'}
                  width={25}
                  height={7}
                  alt='icon'
                  style={{ marginLeft: '16px' }}
                /></ConsultantLink>
                
              </Box>
            </FadeIn>
          </HeroLeftContentCont>
          <HeroRightContentCont>
            <Box sx={{ transform: { xs: 'translateX(10px)', sm: 'translateX(-130px)' } }}>
              <FadeIn direction="right" distance={200} duration={1.5}>
                <HeroCardComponent width={282}>
                  <Image
                    src={'/icons/education-school-study-stickerL.svg'}
                    width={26}
                    height={32}
                    alt='icon'
                  />
                  <HeroCardHeading>Serving Students Across UK And Worldwide.</HeroCardHeading>
                </HeroCardComponent>
              </FadeIn>
            </Box>
            <Box sx={{ transform: { xs: 'translateX(10px)', sm: 'translateX(40px)' } }}>
              <FadeIn direction="right" distance={200} duration={1.5}>
                <HeroCardComponent width={364}>
                  <Image
                    src={'/icons/education-school-study-stickerL.svg'}
                    width={26}
                    height={32}
                    alt='icon'
                  />
                  <HeroCardHeading>Offering bespoke tuition in Science and Maths.</HeroCardHeading>
                </HeroCardComponent>
              </FadeIn>
              
            </Box>
            <Box sx={{ transform: { xs: 'translateX(10px)', sm: 'translateX(-130px)' } }}>
              <FadeIn direction="right" distance={200} duration={1.5}>
                <HeroCardComponent width={430}>
                  <Image
                    src={'/icons/education-school-study-stickerL.svg'}
                    width={26}
                    height={32}
                    alt='icon'
                  />
                  <HeroCardHeading>Entrance Exams to Independent Schools: 11+, 13+, 16+, and 13+ Scholarship.</HeroCardHeading>
                </HeroCardComponent>
              </FadeIn>
              
            </Box>
            <Box sx={{ transform: { xs: 'translateX(10px)', sm: 'translateX(40px)' } }}>
              <FadeIn direction="right" distance={200} duration={1.5}>
                <HeroCardComponent width={410}>
                  <Image
                    src={'/icons/education-school-study-stickerL.svg'}
                    width={26}
                    height={32}
                    alt='icon'
                  />
                  <HeroCardHeading>We offer KS3, (I)GCSE, A-level, and IB</HeroCardHeading>
                </HeroCardComponent>
              </FadeIn>
              
            </Box>
            {/* removed temporarily   */}
            {/* <HeroMediaHead>
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
            </HeroMediaHead> */}
          </HeroRightContentCont>
        </HeroContentContainer>
      </AppContentWrapper>
    </HeroWrapper>
  );
};

export default Hero;
