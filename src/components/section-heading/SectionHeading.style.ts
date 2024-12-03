'use client';

import { styled, Typography, Box } from '@mui/material';

const CommonHeadingLine = styled(Box)<{ hasLeftLine: boolean;  }>(({ hasLeftLine }) => ({
  width: hasLeftLine ? '121px' : 'auto', 
  height: '1px',
}));

export const CommonHeadingLeftLine = styled(CommonHeadingLine)({
  background: 'linear-gradient(to left, #DA9694 0%, #FFF 100%)', 
});

export const CommonHeadingRightLine = styled(CommonHeadingLine)<{ gradientType: string }>(({ gradientType }) =>({
  background: gradientType === 'first'
    ? 'linear-gradient(90deg, #DA9694 0%, #F8413C 100%)'
    : 'linear-gradient(to right, #DA9694 0%, #FFF 100%)', 
}));

export const CommonHeadingContainer = styled(Box)<{ align: string }>(({ theme, align }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: align === 'center' ? 'center' : 'flex-start',
  gap: '30px',

  [theme.breakpoints.down('sm')]: {
    gap: '10px',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '12px',
  }
}));

export const CommonHeadingTypography = styled(Typography)<{ textColor: string; textSize: string }>(({ theme, textColor, textSize }) => ({
  fontSize: '16px',
  fontWeight: 400,
  color: textColor || '#000000', 
  fontFamily: 'Lato, sans-serif',
  textTransform: 'capitalize',
  fontStyle: 'normal',
  width: textSize,
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.6rem',
    maxWidth: '140px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  }
}));
