import Grid from '@mui/material/Grid2';
import Image from 'next/image';

import {
  ApproachWrapper,
  ApproachHeading,
  ApproachCard,
  ApproachCardHeading,
  ApproachCardPara,
  ApproachCardDivider
} from './Approach.style';
import SectionHeading from '../../../components/section-heading/SectionHeading';

const AboutApproach: React.FC = () => {
  return (
    <ApproachWrapper>
      <SectionHeading text='Our Approach'
        align='center'
        showLeftLine={true}
        color='#DA9694'
        textWidth='160px'
        gradientType='second' />
      <ApproachHeading variant='h2'>Tailored Tuition for Every Learner</ApproachHeading>

      <Grid container justifyContent={{xs: 'start', lg: 'center'}} alignItems={'center'} rowSpacing={'40px'} columns={24}>
        <Grid size={{ xs: 24, md: 11, lg: 7 }}>
          <ApproachCard>
            <Image
              src={'/icons/Tailored-Tuition.svg'}
              width={81}
              height={89}
              alt='icon'
            />
            <ApproachCardHeading variant='h4' >Tailored Tuition</ApproachCardHeading>
            <ApproachCardPara variant='body1' >We get that every student learns differently, so we tailor our lessons to fit each person’s style. Whether it’s one-on-one sessions or small group classes, we focus on what you need and go at a pace that works for you. This personalized approach helps students see real improvements in just a few weeks.</ApproachCardPara>
          </ApproachCard>
        </Grid>
        <Grid size={{ xs: 24, md: 1, }}>
          <ApproachCardDivider orientation='vertical' variant='middle' />
        </Grid>
        <Grid size={{ xs: 24, md: 11, lg: 7 }}>
          <ApproachCard>
            <Image
              src={'/icons/regular-assessments.svg'}
              width={81}
              height={89}
              alt='icon'
            />
            <ApproachCardHeading variant='h4' >Mentoring and Motivation</ApproachCardHeading>
            <ApproachCardPara variant='body1' >We’re here to inspire curiosity and help you stay motivated. We adapt to how you learn best, whether you&apos;re an independent learner or someone who needs more hands-on guidance. Our goal is to create a positive, supportive environment that helps you reach (and exceed) your goals.</ApproachCardPara>
          </ApproachCard>
        </Grid>
        <Grid size={{ xs: 24, md: 1, }}>
          <ApproachCardDivider orientation='vertical' variant='middle' />
        </Grid>
        <Grid size={{ xs: 24, md: 11, lg: 7 }}>
          <ApproachCard>
            <Image
              src={'/icons/tailored-learning.svg'}
              width={81}
              height={89}
              alt='icon'
            />
            <ApproachCardHeading variant='h4' >Regular Assessments</ApproachCardHeading>
            <ApproachCardPara variant='body1' >We mix regular check-ins with lots of exam practice to keep you on track. After going over the important stuff in a way that makes sense, we dive into exam-style questions so you’re ready for test day. This balance of learning and practicing makes sure you feel confident and prepared when it matters most.</ApproachCardPara>
          </ApproachCard>
        </Grid>
      </Grid>
    </ApproachWrapper>
  );
};

export default AboutApproach;