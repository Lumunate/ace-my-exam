'use client';
import Grid from '@mui/material/Grid2';

import {
  AboutTestimonialsWrapper,
  AboutTestimonialsHeading,
  AboutTestimonialsPara
} from './AboutTestimonials.style';
import { Button } from '../../../components/buttons/Button.style';
import SectionHeading from '../../../components/section-heading/SectionHeading';
import AboutTestimonialsSwiper from '../../../components/swiper/testimonials-swiper/AboutTestimonialsSwiper';

const AboutTestimonials: React.FC = () => {
  return (
    <AboutTestimonialsWrapper>

      <Grid container justifyContent={'center'} alignItems={'center'} columns={24} sx={{ maxWidth: '1200px', mx: 'auto' }}>
        <Grid size={{ xs: 24, lg: 12 }} sx={{ px: '16px' }}>
          <SectionHeading text="Testimonials"
            align='start'
            showLeftLine={false}
            color='#DA9694'
            gradientType="second" />
          <AboutTestimonialsHeading variant="h2">What Our Students Say</AboutTestimonialsHeading>
          <AboutTestimonialsPara variant="h4">We believe in the individuality of each student, offering tailored lessons to unlock their full potential</AboutTestimonialsPara>
          <Button
            special
            fontSize='16px'
            borderRadius='50px'
            width='212px'
            height='60px'
            onClick={() => {
              window.open('https://www.firsttutors.com/uk/tutor/asma.maths.physics.1/#:~:text=Educated%20to%20PhD%20level%20%2D%20a,across%20all%20boards%20and%20levels', '_blank');
            }}
          >
            Learn More
          </Button>
        </Grid>
        <Grid size={{ xs: 24, lg: 12 }} sx={{ px: '0' }}>
          <AboutTestimonialsSwiper />
        </Grid>
      </Grid>
    </AboutTestimonialsWrapper>
  );
};

export default AboutTestimonials;