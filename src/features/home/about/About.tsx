import Grid from '@mui/material/Grid2';
import Image from 'next/image';

import SectionHeading from '@/components/section-heading/SectionHeading';

import { AboutWrapper, AboutImgHead, AboutContentHead, AboutHeading, AboutPara, AboutImage, AboutCardContainer, AboutCardHeading, AboutOverlayHead, AboutCardTwoHead, AboutLink } from './About.style';

interface AboutCardProps {
  title: string;
  bgColor: string;
  textColor: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, bgColor, textColor }) => (
  <AboutCardContainer bgColor={bgColor}>
    <Image
      src={'/icons/brain-black.svg'}
      width={19}
      height={23}
      alt='icon'
    />
    <AboutCardHeading textColor={textColor}>{title}</AboutCardHeading>
  </AboutCardContainer>
);

const About: React.FC = () => {
  return (
    <AboutWrapper>
      <Grid container columnSpacing={'22px'} columns={24} alignItems={'center'}>
        <Grid size={{ xs: 24, md: 11 }} sx={{position: 'relative'}}>
          <AboutImgHead>
            <AboutImage src={'/home/about.png'} width={0} height={0} sizes='100vw' alt='about' />
          </AboutImgHead>
          <AboutOverlayHead>
            <AboutCard
              title='One-to-one lessons'
              bgColor='#DA9694'
              textColor='#fff'
            />
            <AboutCardTwoHead>
              <AboutCard
                title='Small group classes'
                bgColor='#FFF'
                textColor='#000'
              />
            </AboutCardTwoHead>
          </AboutOverlayHead>
        </Grid>
        <Grid size={{ xs: 24, md: 13 }}>
          <AboutContentHead>
            <SectionHeading text='About Us' align='start' showLeftLine={false} color='#DA9694' />
            <AboutHeading>A Legacy of Excellence</AboutHeading>
            <AboutPara>
              ACEMYEXAM is a leading tuition service based in Cambridge, UK, specializing in personalized, one-to-one and small group learning. Our mission is to empower students to achieve academic excellence, confidence, and growth through bespoke learning solutions.
            </AboutPara>
            <AboutPara>
              We offer expert tuition in Maths and Science for students preparing for GCSE, IGCSE, A-Levels, and a variety of other exams, including entrance exams to independent schools and scholarship opportunities. Whether you’re aiming for top exam results or building a strong academic foundation, we provide the support and expertise to help you succeed.
            </AboutPara>

            <Grid container columnSpacing={'24px'} columns={24} sx={{mt: '30px'}}>
              <Grid size={{ xs: 24, md: 8 }}>
                <AboutCard
                  title='GCSE to Alevel Exam Preparation'
                  bgColor='#FFF'
                  textColor='#000'
                />
              </Grid>
              <Grid size={{ xs: 24, md: 8 }}>
                <AboutCard
                  title='Scholarship Exams (13+)'
                  bgColor='#FFF'
                  textColor='#000'
                />
              </Grid>
              <Grid size={{ xs: 24, md: 8 }}>
                <AboutCard
                  title='Entrance Exams'
                  bgColor='#FFF'
                  textColor='#000'
                />
              </Grid>
            </Grid>
            <AboutLink href={'#'}>Learn More
              <Image
                src={'/icons/arrow-right.svg'}
                width={25}
                height={7}
                alt='icon'
                style={{marginLeft: '16px'}}
              />
            </AboutLink>
          </AboutContentHead>
        </Grid>
      </Grid>
    </AboutWrapper>
  );
};

export default About;
