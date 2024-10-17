'use client';

import { styled, Typography, Box,  } from '@mui/material';
import Link from 'next/link';

export const TestimonialsWrapper = styled(Box)({
  width: '100%',
  padding: '150px 0 120px',
  textAlign: 'center',
  overflow: 'hidden',
});
export const TestimonialsHeading = styled(Typography)({
  fontWeight: 700,
  fontSize: '46px',
  color: '#000000',
  fontFamily: 'Jost, sans-serif'
});
export const TestimonialsPara = styled(Typography)({
  fontWeight: 500,
  fontSize: '16px',
  color: '#686868',
});
export const TestimonialsLink = styled(Link)({
  fontWeight: 500,
  fontSize: '16px',
  color: '#DA9694 ',
  fontFamily: 'Lato, sans-serif',
});