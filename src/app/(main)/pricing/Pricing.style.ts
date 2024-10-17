'use client';

import { Box, styled, Typography } from '@mui/material';

export const PricingWrapper = styled(Box)({
  width: '100%',
  padding: '280px 0 150px',
  textAlign: 'center',
  overflow: 'hidden',
});

export const PricingHeading = styled(Typography)({
  fontWeight: 600,
  fontSize: '49px',
  color: '#000000',
  fontFamily: 'Jost, sans-serif',
});

export const PricingPara = styled(Typography)({
  fontWeight: 600,
  fontSize: '36px',
  color: '#666',
  fontFamily: 'Jost, sans-serif',
});
