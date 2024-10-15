import SectionHeading from '@/components/section-heading/SectionHeading';
import TestimonialsSwiper from '@/components/swiper/testimonials-swiper/TestimonialsSwiper';
import { TestimonialsHeading, TestimonialsWrapper } from '@/features/home/testimonials/Testimonials.style';

const Testimonials = () => {
  return (
    <TestimonialsWrapper>
      <SectionHeading text="Testimonials" align="center" showLeftLine={true} color="#0ABCAA" />
      <TestimonialsHeading variant="h2" sx={{ mt: '20px' }}>Here&apos;s What Our Students Say</TestimonialsHeading>
      <TestimonialsSwiper />
    </TestimonialsWrapper>
  );
};

export default Testimonials;
