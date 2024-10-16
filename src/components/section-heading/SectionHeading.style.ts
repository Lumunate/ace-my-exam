'use client';

import { styled, Typography, Box } from '@mui/material';

const CommonHeadingLine = styled(Box)<{ hasLeftLine: boolean }>(({ hasLeftLine }) => ({
  width: hasLeftLine ? '121px' : 'auto', 
  height: '1px',
}));

export const CommonHeadingLeftLine = styled(CommonHeadingLine)({
  background: 'linear-gradient(to left, #DA9694 0%, #FFF 100%)',
});

export const CommonHeadingRightLine = styled(CommonHeadingLine)({
  background: 'linear-gradient(to right, #DA9694 0%, #FFF 100%)',
});

export const CommonHeadingContainer = styled(Box)<{ align: string }>(({ align }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: align === 'center' ? 'center' : 'flex-start',
  gap: '30px',
}));

export const CommonHeadingTypography = styled(Typography)<{ textColor: string; textSize: string }>(({ textColor, textSize }) => ({
  fontSize: '16px',
  fontWeight: 400,
  color: textColor || '#000000', 
  fontFamily: 'Lato, sans-serif',
  textTransform: 'capitalize',
  fontStyle: 'normal',
  width: textSize
}));