'use client';

import { styled, Typography, Box, Avatar } from '@mui/material';
import Link from 'next/link';

const BaseBoxFlex = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const TestimonialsSwiperWrapper = styled(Box)<{aboutSwiperOpen?: boolean }>(({theme, aboutSwiperOpen }) => ({
  width: '100%',
  height: '100% !important',
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
  '& .swiper-wrapper':{
    height: '100% !important',
  },
  '& .swiper-slide': {
    maxWidth: aboutSwiperOpen ? '100%': '556px',
    width: '100% !important',
    transition: 'all 0.3s ease !important',
    minHeight: '426px !important',
    maxHeight: '100% !important',
    [theme.breakpoints.down('sm')]: {
      minHeight: '360px !important',
    },
  },
  '& .swiper-slide-active, & .swiper-slide-prev, & .swiper-slide-next': {
    visibility: 'visible !important',
    opacity: '1 !important',
  },
  '& .swiper-pagination-bullet': {
    background: '#DA9694 !important',
  },
  '& .swiper-button-next:after, .swiper-button-prev:after': {
    display: 'none !important',
  },
}));

export const TestimonialsCard = styled(Box)<{isSpace?: boolean,}>(({ theme, isSpace }) => ({
  backgroundColor: '#FCFDFF',
  padding: '53.5px 27px',
  borderRadius: '20px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  height: '100%',
  textAlign: 'left',
  minHeight: '450px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: isSpace ? '15px' : '0',
  [theme.breakpoints.down('sm')]: {
    padding: '27px 9px',
    height: '100% !important',
    minHeight: '324px',
  },
}));

export const TestimonialsNavigationWrapper = styled(Box)<{ positionLeft: string; width: string }>(({ positionLeft, width }) => ({
  position: 'absolute',
  left: positionLeft,
  right: '0',
  transform: 'translateX(-150px)',
  bottom: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  width: width,
  zIndex: 2,
}));

const BaseTextStyle = styled(Typography)({
  fontFamily: 'Lato, sans-serif',
});

export const TestimonialsCardHeading = styled(BaseTextStyle)(({ theme }) => ({
  color: '#474747',
  fontSize: '1.6rem',
  fontWeight: 700,
  [theme.breakpoints.down('sm')]: {
    fontSize: '10px',
  }
}));

export const TestimonialsOccupationPara = styled(BaseTextStyle)({
  color: '#000',
  fontSize: '1.2rem',
  fontWeight: 400,
});

export const TestimonialsCardPara = styled(BaseTextStyle)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '1.6rem',
  color: '#787878',
  marginTop: '29px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  }
}));

export const TestimonialsParaTwo = styled(BaseTextStyle)({
  fontWeight: 400,
  fontSize: '12px',
  color: '#818181',
});

export const TestimonialAvatar = styled(Avatar)(({ theme }) => ({
  width: 61,
  height: 61,
  marginRight: '15px',
  [theme.breakpoints.down('sm')]: {
    width: 39,
    height: 39,
    marginRight: '10px',
  }
}));

export const TestimonialsDateHead = styled(Box)({
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
});

export const TestimonialsAvatarNameWrapper = styled(BaseBoxFlex)({});

export const TestimonialsInfoHead = styled(BaseBoxFlex)({
  justifyContent: 'space-between',
});

export const TestimonialsStarsHead = styled(BaseBoxFlex)({
  marginTop: '10px',
});

export const TrustpilotImage = styled(Link)(({ theme }) => ({
  width: 140,
  height: 34,
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    width: 80,
    height: 48,
    marginRight:'25px',
  }
}));

export const QuotationImageHead = styled(Box)(({ theme }) => ({
  width: 79,
  height: 60,
  position: 'relative',
  marginLeft: '10px',
  [theme.breakpoints.down('sm')]: {
    width: 38,
    height: 29,
  }
}));
