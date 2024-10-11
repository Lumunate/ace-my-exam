'use client';
import { Box, styled, Typography } from '@mui/material';

export const StatsContentWrapper = styled(Box)({
  margin: '10rem 0',
});

export const StatsContainer = styled(Box)({
  backgroundColor: 'white',
  position: 'relative',
  padding: '5.9rem 12.7rem',
  borderRadius: '2rem',
  boxShadow: '0px 4px 32px 0px rgba(0, 0, 0, 0.2)',
});

export const StatsCardsContainer = styled(Box)({
  display: 'flex',
  padding: '0 6.5rem',
  justifyContent: 'space-between',
});

export const StatHeading = styled(Typography)({
  fontWeight: 700,
  lineHeight: '2.4rem',
  fontSize: '1.6rem',
  color: 'rgba(17, 24, 38, 1)',
});

export const StatValue = styled(Typography)({
  color: 'rgba(0, 184, 201, 1)',
  fontSize: '4.8rem',
  fontWeight: 700,
  lineHeight: '6.9rem',
  textShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.16)',
});

export const StatCardDivider = styled(Typography)({
  height: '100px',
  width: '1px',
  backgroundColor: 'rgba(200, 200, 200, 1)',
});
