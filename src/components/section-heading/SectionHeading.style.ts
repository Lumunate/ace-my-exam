'use client';

import { styled, Typography, Box } from '@mui/material';

const CommonHeadingLine = styled(Box)<{ hasLeftLine: boolean }>(({ hasLeftLine }) => ({
  width: hasLeftLine ? '121px' : 'auto', 
  height: '1px',
}));

export const CommonHeadingLeftLine = styled(CommonHeadingLine)({
  background: 'linear-gradient(to right, rgba(255, 255, 255, 0), #0ABCAA)',
});

export const CommonHeadingRightLine = styled(CommonHeadingLine)({
  background: 'linear-gradient(to left, rgba(255, 255, 255, 0), #0ABCAA)',
});

export const CommonHeadingContainer = styled(Box)<{ align: string }>(({ align }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: align === 'center' ? 'center' : 'flex-start',
  gap: '30px',
}));

export const CommonHeadingTypography = styled(Typography)<{ textColor: string }>(({ textColor }) => ({
  fontSize: '16px',
  fontWeight: 400,
  color: textColor || '#000000', 
  fontFamily: 'var(--font-lato)',
  textTransform: 'capitalize',
  fontStyle: 'normal'
}));