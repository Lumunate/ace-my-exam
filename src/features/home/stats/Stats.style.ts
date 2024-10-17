'use client';

import { Box, styled, Typography, Card } from '@mui/material';

const CommonStatTypography = styled(Typography)({
  fontStyle: 'normal',
  fontFamily: 'Lato, sans-serif', 
});

export const StatsContentWrapper = styled(Box)({
  width: '100%',
  position: 'relative',
  transform: 'translateY(-290px)',
  padding: '39px 0',
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '50%',
    backgroundColor: '#fffbfb',
    borderRadius: '100px 100px 0 0',
    zIndex: '-1',
  },
});

export const StatsCardHead = styled(Box)({
  maxWidth: '1040px',
  margin: '0 auto',
});

export const StatsCard = styled(Card)({
  borderRadius: '20px',
  background: '#FFF',
  boxShadow: '0px 4px 39.5px 0px rgba(0, 0, 0, 0.10)',
  padding: '56px 37px',
  textAlign: 'center',
  cursor: 'pointer',
});

export const StatCardHeading = styled(CommonStatTypography)({
  fontWeight: 700,
  fontSize: '16px',
  color: '#111826',
});

export const StatCardValue = styled(CommonStatTypography)({
  fontWeight: 500,
  fontSize: '49px',
  color: '#DA9694',
  fontFamily: 'Jost, sans-serif', 
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.16)',
  margin: '4px 0',
});
