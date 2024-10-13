'use client';

import { styled, Typography, Box } from '@mui/material';

export const TestimonialsSwiperWrapper = styled(Box)({
  width: '100%',
  overflow: 'hidden',
  '& .swiper': {
    width: '100%',
    padding: '50px 0 !important',
  },

  '& .swiper-slide:not(.swiper-slide-active):not(.swiper-slide-prev):not(.swiper-slide-next)': {
    visibility: 'hidden !important',
    opacity: '0 !important',
    transition: 'all 0.3s ease !important',
  },

  '& .swiper-slide': {
    transition: 'all 0.3s ease !important',
  },

  '& .swiper-slide-active, & .swiper-slide-prev, & .swiper-slide-next': {
    visibility: 'visible !important',
    opacity: '1 !important',
  },

  '& .swiper-slide-prev, & .swiper-slide-next': {
    opacity: '0.8 !important',
  },

  '& .swiper-pagination-bullet': {
    background: '#707070 !important',
  },
  
});

export const TestimonialsHeading = styled(Typography)({
  fontWeight: 700,
  fontSize: '46px',
  color: '#000000',
  marginBottom: '40px',
});

export const TestimonialsCard = styled(Box)({
  backgroundColor: '#fff',
  padding: '64px 30px',
  borderRadius: '20px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  width: '100%',
  textAlign: 'left',
  height: '400px',
  display: 'flex',
  flexDirection: 'column',
});

export const TestimonialsAvatarNameWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const TestimonialsCardHeading = styled(Typography)({
  color: '#474747',
  fontSize: '14px',
  fontWeight: 500,
});
export const TestimonialsOccupationPara = styled(Typography)({
  color: '#818181',
  fontSize: '10px',
  fontWeight: 400,
});

export const TestimonialsCardPara = styled(Typography)({
  fontWeight: 400,
  fontSize: '13px',
  color: '#787878',
  marginTop: '49px'
});
