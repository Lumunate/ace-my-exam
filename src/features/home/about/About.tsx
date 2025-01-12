import Grid from '@mui/material/Grid2';
import Image from 'next/image';

import {
  AboutWrapper,
  AboutImgHead,
  AboutContentHead,
  AboutHeading,
  AboutPara,
  AboutImage,
  AboutCardContainer,
  AboutCardHeading,
  AboutOverlayHead,
  AboutCardTwoHead,
  AboutLink,
} from './About.style';
import FadeIn from '../../../components/animations/FadeIn';
import SectionHeading from '../../../components/section-heading/SectionHeading';

interface AboutCardProps {
  title: string;
  bgColor: string;
  textColor: string;
  alignment: string;
  iconUrl?: string;
}

const AboutCard: React.FC<AboutCardProps> = ({
  title,
  bgColor,
  textColor,
  alignment,
  iconUrl = '/icons/brain-black.svg',
}) => (
  <AboutCardContainer bgColor={bgColor} alignment={alignment}>
    <Image src={iconUrl} width={26} height={32} alt='icon' />
    <AboutCardHeading textColor={textColor}>{title}</AboutCardHeading>
  </AboutCardContainer>
);

const About: React.FC = () => {
  return (
    <AboutWrapper>
      <Grid
        container
        columnSpacing={{ xs: 0, lg: '22px' }}
        columns={24}
        alignItems={{ xs: 'start', lg: 'center' }}
        justifyContent={'center'}
      >
        <Grid
          size={{ xs: 24, sm: 17, md: 12, lg: 11 }}
          sx={{
            position: 'relative',
            order: { xs: 2, lg: 1 },
            mt: { xs: '20px', lg: '0' },
          }}
        >
          <AboutImgHead>
            <AboutImage
              src={'/home/about.webp'}
              width={0}
              height={0}
              sizes='100vw'
              alt='about'
            />
          </AboutImgHead>
          <AboutOverlayHead>
            <FadeIn direction="right" distance={50} duration={1.5} delay={0.5}>
              <AboutCard
                title='One-to-one lessons'
                bgColor='#DA9694'
                textColor='#fff'
                alignment='center'
                iconUrl='/icons/education-school-study-stickerL.svg'
              />
              <AboutCardTwoHead>
                <AboutCard
                  title='Small group classes'
                  bgColor='#FFF'
                  textColor='#000'
                  alignment='center'
                  iconUrl='/icons/education-school-study-stickerL.svg'
                />
              </AboutCardTwoHead>
            </FadeIn>
          </AboutOverlayHead>
        </Grid>

        <Grid size={{ xs: 24, lg: 13 }} sx={{ order: { xs: 1, lg: 2 } }}>
          <AboutContentHead>
            <SectionHeading
              text='About Us'
              align='start'
              showLeftLine={false}
              color='#DA9694'
              gradientType='second'
            />
            <FadeIn direction="up" distance={50} duration={1.5} delay={0.3}>
              <AboutHeading>A Legacy of Excellence</AboutHeading>
              <AboutPara>
                Acemyexam is a leading tuition service based in Cambridge, UK,
                specializing in personalized, one-to-one and small group learning.
                Our mission is to empower students to achieve academic excellence,
                confidence, and growth through bespoke learning solutions.
              </AboutPara>
              <AboutPara>
                We offer expert tuition in Maths and Science for students
                preparing for GCSE, IGCSE, A-Level, and a variety of other exams,
                including entrance exams to independent schools and scholarship
                opportunities. Whether you’re aiming for top exam results or
                building a strong academic foundation, we provide the support and
                expertise to help you succeed.
              </AboutPara>
            </FadeIn>

            <FadeIn direction="up" distance={50} duration={1.5} delay={0.5}>
              <Grid
                container
                columnSpacing={{ xs: '10px', xl: '15px' }}
                rowSpacing={{ xs: '10px', xl: '0px' }}
                columns={24}
                sx={{ mt: '30px' }}
              >
                <Grid size={{ xs: 24, sm: 12, md: 8, lg:12, xl: 8 }}>
                  <AboutCard
                    title='(I)GCSE to A-level Exam Preparation.'
                    bgColor='#FFF'
                    textColor='#000'
                    alignment='start'
                  />
                </Grid>
                <Grid size={{ xs: 24, sm: 12, md: 8, lg:12, xl: 8 }}>
                  <AboutCard
                    title='Scholarship Exams (13+)'
                    bgColor='#FFF'
                    textColor='#000'
                    alignment='start'
                  />
                </Grid>
                <Grid size={{ xs: 24, sm: 12, md: 8, lg:12, xl: 8 }}>
                  <AboutCard
                    title='Entrance Exams 11+, 13+ and 16+.'
                    bgColor='#FFF'
                    textColor='#000'
                    alignment='start'
                  />
                </Grid>
              </Grid>
              <AboutLink href={'/about'}>
              More About Us…
                <Image
                  src={'/icons/arrow-right.svg'}
                  width={25}
                  height={7}
                  alt='icon'
                  style={{ marginLeft: '16px' }}
                />
              </AboutLink>
            </FadeIn>

          </AboutContentHead>
        </Grid>
      </Grid>
    </AboutWrapper>
  );
};

export default About;
