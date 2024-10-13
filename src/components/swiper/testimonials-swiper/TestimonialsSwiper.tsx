'use client';

import { Avatar, Box } from '@mui/material';
import Image from 'next/image';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import testimonialsData from '@/components/swiper/testimonials-swiper/testimonialsData.json';
import {
  TestimonialsAvatarNameWrapper,
  TestimonialsCard,
  TestimonialsCardHeading,
  TestimonialsCardPara,
  TestimonialsOccupationPara,
  TestimonialsSwiperWrapper,
} from '@/components/swiper/testimonials-swiper/TestimonialsSwiper.style';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const TestimonialsSwiper = () => {
  return (
    <TestimonialsSwiperWrapper>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={0}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        {testimonialsData?.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialsCard>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <TestimonialsAvatarNameWrapper>
                  <Avatar
                    alt={testimonial?.name}
                    src={testimonial?.name}
                    sx={{ width: 61, height: 61, mr: '15px' }}
                  />
                  <Box>
                    <TestimonialsCardHeading variant='h6'>
                      {testimonial.name}
                    </TestimonialsCardHeading>
                    <TestimonialsOccupationPara variant='subtitle2'>
                      {testimonial.subject}
                    </TestimonialsOccupationPara>
                  </Box>
                </TestimonialsAvatarNameWrapper>
                <Box>
                  <Image
                    src={'/home/quotation.svg'}
                    width={80}
                    height={60}
                    alt='icon'
                  />
                </Box>
              </Box>
              <TestimonialsCardPara variant='body1'>
                {testimonial.feedback}
              </TestimonialsCardPara>
            </TestimonialsCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </TestimonialsSwiperWrapper>
  );
};

export default TestimonialsSwiper;
