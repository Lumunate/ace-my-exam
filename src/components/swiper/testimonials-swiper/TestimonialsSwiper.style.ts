'use client';

import { styled, Typography, Box, Avatar } from '@mui/material';

const BaseBoxFlex = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const TestimonialsSwiperWrapper = styled(Box)({
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
  '& .swiper': {
    width: '100%',
    padding: '50px 0 !important',
    position: 'relative',
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
    background: '#DA9694 !important',
  },
  '& .swiper-button-next:after, .swiper-button-prev:after': {
    display: 'none !important',
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
  padding: '58px 30px',
  borderRadius: '20px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  width: '100%',
  textAlign: 'left',
  minHeight: '426px',
  display: 'flex',
  flexDirection: 'column',
});

export const TestimonialsAvatarNameWrapper = styled(BaseBoxFlex)({
});

export const TestimonialsInfoHead = styled(BaseBoxFlex)({
  justifyContent: 'space-between',
});

export const TestimonialsStarsHead = styled(BaseBoxFlex)({
  marginTop: '10px',
});

export const TestimonialAvatar = styled(Avatar)({
  width: 61,
  height: 61,
  marginRight: '15px',
});

const BaseTextStyle = styled(Typography)({
  fontFamily: 'Lato, sans-serif',
  textTransform: 'capitalize',
});

export const TestimonialsCardHeading = styled(BaseTextStyle)({
  color: '#474747',
  fontSize: '14px',
  fontWeight: 700,
});

export const TestimonialsOccupationPara = styled(BaseTextStyle)({
  color: '#000',
  fontSize: '9px',
  fontWeight: 400,
});

export const TestimonialsCardPara = styled(BaseTextStyle)({
  fontWeight: 400,
  fontSize: '13px',
  color: '#787878',
  marginTop: '29px',
});

export const TestimonialsParaTwo = styled(BaseTextStyle)({
  fontWeight: 400,
  fontSize: '9px',
  color: '#818181',
});

export const TestimonialsNavigationWrapper = styled(Box)({
  position: 'absolute',
  left: '40%',
  right: '0',
  bottom: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  width: '20%',
  zIndex: 2,
});

export const TestimonialsNavigationButton = styled(Box)({
  width: '40px',
  height: '40px',
  backgroundColor: '#FFF',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  boxShadow: '0px 4px 11px rgba(0, 0, 0, 0.1)',
});
