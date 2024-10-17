import Grid from '@mui/material/Grid2';
import Image from 'next/image';

import { Button } from '@/components/buttons/Button.style';
import SectionHeading from '@/components/section-heading/SectionHeading';

import {
  ChooseWrapper,
  ChooseCard,
  ChooseHeading,
  ChoosePara,
  ChooseImgHead,
  ChooseSkillCard,
  ChooseSkillCardHeading
} from './Choose.styles';

const AboutChoose: React.FC = () => {

  return (
    <ChooseWrapper>
      <Grid container justifyContent={'center'} alignItems={'center'} columns={24}>
        <Grid size={{ xs: 24, lg: 15 }} sx={{ px: '15px', position: 'relative', display: 'flex', justifyContent: 'end' }}>
          <ChooseCard>
            <SectionHeading
              text='Our Founder'
              align='start'
              showLeftLine={false}
              color='#DA9694'
              gradientType='second'
            />
            <ChooseHeading>About Acemyexam</ChooseHeading>
            <ChoosePara>An Educator Driven by Passion</ChoosePara>
            <Button
              special
              fontSize='16px'
              borderRadius='50px'
              width='212px'
              height='60px'
            >
              Get Started
            </Button>
          </ChooseCard>
          <ChooseImgHead>
            <Image src="/about/choose.webp" alt="Choose" layout="fill" objectFit="cover" />
          </ChooseImgHead>
        </Grid>
        <Grid size={{ xs: 24, lg: 9 }} sx={{ px: '15px' }}>
          <ChooseSkillCard>
            <Image src="/icons/tutoring.svg" alt="icons" width={39} height={39} style={{ marginRight: '15px' }} />
            <ChooseSkillCardHeading>15+ years of successful tutoring</ChooseSkillCardHeading>
          </ChooseSkillCard>
          <ChooseSkillCard>
            <Image src="/icons/proven-track.svg" alt="icons" width={49} height={49} style={{ marginRight: '15px' }} />
            <ChooseSkillCardHeading>Proven track record of success</ChooseSkillCardHeading>
          </ChooseSkillCard>
          <ChooseSkillCard>
            <Image src="/icons/tailored-learning.svg" alt="icons" width={40} height={54} style={{ marginRight: '15px' }} />
            <ChooseSkillCardHeading>Tailored learning experiences</ChooseSkillCardHeading>
          </ChooseSkillCard>
          <ChooseSkillCard>
            <Image src="/icons/regular-assessments.svg" alt="icons" width={50} height={40} style={{ marginRight: '15px' }} />
            <ChooseSkillCardHeading>Regular Assessments & Exam Techniques</ChooseSkillCardHeading>
          </ChooseSkillCard>
        </Grid>
      </Grid>
    </ChooseWrapper>
  );
};

export default AboutChoose;