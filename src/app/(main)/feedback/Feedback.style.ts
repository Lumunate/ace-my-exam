'use client';

import {
  Box,
  styled,
  Typography
} from '@mui/material';
import Link from 'next/link';

export const FeedbackContainer = styled(Box)({
  padding: '235px 0',
  textAlign: 'center'
});
export const FeedbackIconHead = styled(Box)({
  position: 'absolute',
  left: '-50px',
  top: '-60px',
});

export const FeedbackHeadingTypography = styled(Typography)({
  fontWeight: 700,
  fontFamily: 'Jost, sans-serif',
  color: '#1F1F1F',
  fontSize: '49px',
  textTransform: 'uppercase',
});

export const FeedbackParaTypography = styled(Typography)({
  fontWeight: 500,
  fontFamily: 'Lato, sans-serif',
  color: '#000000',
  fontSize: '16px',
  marginBottom: '30px'
});

export const FeedbackStyledLinkOne = styled(Link)({
  color: '#000000',
  textDecoration: 'none',
  fontFamily: 'Lato, sans-serif',
  fontSize: '16px',
  display: 'block',
  '&:hover': {
    textDecoration: 'underline',
  },
});
