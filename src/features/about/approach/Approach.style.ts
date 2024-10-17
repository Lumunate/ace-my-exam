'use client';

import { styled, Typography, Box, Divider } from '@mui/material';

export const  ApproachWrapper = styled(Box)({
  width: '100%',
  padding: '120px 0 100px',
  textAlign: 'center',
  overflow: 'hidden',
});

export const  ApproachHeading = styled(Typography)({
  fontWeight: 700,
  fontSize: '46px',
  color: '#000000',
  fontFamily: 'Jost, sans-serif',
  marginTop: '20px',
  marginBottom: '80px'
});

export const  ApproachCardHeading = styled(Typography)({
  fontWeight: 700,
  fontSize: '32px',
  color: '#000',
  fontFamily: 'Lato, sans-serif',
  margin: '15px 0',
});

export const  ApproachCardPara = styled(Typography)({
  fontWeight: 400,
  fontSize: '14px',
  color: '#000000',
  fontFamily: 'Lato, sans-serif'
});

export const  ApproachCard = styled(Box)({
  textAlign: 'center',
});

export const ApproachCardDivider = styled(Divider)({
  background: 'linear-gradient(to top, #FFFFFF 0%, #666666 46%, #FFFFFF 100%)',
  border: 'unset',
  width: '1px',
  height: '112px',
  margin: '0 auto'
});