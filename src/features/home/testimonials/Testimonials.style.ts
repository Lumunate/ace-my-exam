'use client';

import { styled, Typography, Box } from '@mui/material';

export const TestimonialsWrapper = styled(Box)({
  width: '100%',
  padding: '196px 0',
  textAlign: 'center',
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
