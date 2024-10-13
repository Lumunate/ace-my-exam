'use client';

import { styled, Typography, Box } from '@mui/material';

const CommonHeadingLine = styled(Box)({
  width: '121px',
  height: '1px',
});

export const CommonHeadingLeftLine = styled(CommonHeadingLine)({
  background: 'linear-gradient(to right, rgba(255, 255, 255, 0), #0ABCAA)',
});

export const CommonHeadingRightLine = styled(CommonHeadingLine)({
  background: 'linear-gradient(to left, rgba(255, 255, 255, 0), #0ABCAA)',
});

export const CommonHeadingContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '40px',
});

export const CommonHeadingTypography = styled(Typography)({
  fontSize: '16px',
  fontWeight: 600,
  color: '#000000',
});
