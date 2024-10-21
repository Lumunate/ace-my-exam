'use client';

import { Box, Card, styled, Typography } from '@mui/material';

interface ProcessCardProps {
  active: boolean;
  index: number;
  activeCard: number;
}

export const ProcessSliderWrapper = styled(Box)(({ theme }) =>({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  padding: '80px 0',
  width: 'fit-content',
  margin: '0 auto',
  [theme.breakpoints.down('lg')]: {
    padding: '60px 0',
  },
  [theme.breakpoints.down('md')]: {
    padding: '40px 0',
  },
}));

export const ProcessContent = styled(Box)({
  textAlign: 'start'
});

export const BaseTypography = styled(Typography)({
  fontFamily: 'Lato, sans-serif',
  textAlign: 'start',
});

export const ProcessCard = styled(Card)<ProcessCardProps>(({ theme, index, activeCard }) => ({
  position: 'relative',
  marginLeft: index === 0 ? '0px' : '-149px',
  // transition: 'all 2s ease',
  width: '236px',
  height: '292px',
  cursor: 'pointer',
  padding: '17px 24px',
  zIndex: index === activeCard
    ? 10
    : index < activeCard
      ? 10 - (activeCard - index)
      : 10 - (index - activeCard),
  boxShadow: '0px 4px 61.5px 0px rgba(0, 0, 0, 0.09)',
  backgroundColor: '#fff',
  borderRadius: '20px',
  overflow: 'hidden',
  [theme.breakpoints.down(576)]: {
    width: '200px',
    padding: '15px 18px',
    marginLeft: index === 0 ? '0px' : '-139px',
  },
}));

export const ProcessCardNumber = styled(BaseTypography)({
  color: '#DA9694',
  fontSize: '96px',
  fontWeight: 700,
  textAlign: 'end',
  background: 'linear-gradient(180deg, #DA9694 28.5%, rgba(218, 150, 148, 0.28) 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

export const ProcessCardTitle = styled(BaseTypography)(({ theme }) => ({
  color: '#DA9694',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '22px',
  marginBottom: '3px',
  [theme.breakpoints.down(576)]: {
    fontSize: '14px',
  },
}));

export const ProcessCardDescription = styled(BaseTypography)(({ theme }) => ({
  color: '#929292',
  fontSize: '14px',
  fontWeight: 400,
  [theme.breakpoints.down(576)]: {
    fontSize: '12px',
  },
}));
