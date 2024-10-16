'use client';

import { Box, Card, styled, Typography } from '@mui/material';

interface ProcessCardProps {
  active: boolean;
  index: number;
  activeCard: number;
}

export const ProcessSliderWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  padding: '80px 0',
});

export const ProcessContent = styled(Box)({
  textAlign: 'start'
});

export const BaseTypography = styled(Typography)({
  fontFamily: 'Lato, sans-serif',
  textAlign: 'start',
});

export const ProcessCard = styled(Card)<ProcessCardProps>(({ index, activeCard }) => ({
  position: 'relative',
  marginLeft: index === 0 ? '0px' : '-149px',
  transition: 'all 0.5s ease',
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

export const ProcessCardTitle = styled(BaseTypography)({
  color: '#DA9694',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '22px',
  marginBottom: '3px',
});

export const ProcessCardDescription = styled(BaseTypography)({
  color: '#929292',
  fontSize: '14px',
  fontWeight: 400,
});
