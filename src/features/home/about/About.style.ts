'use client';

import { Box, styled, Typography } from '@mui/material';

export const AboutWrapper = styled(Box)({
  width: '100%',
  position: 'relative',
});

const CommonHeroTypography = styled(Typography)({
  fontWeight: 400,
  fontStyle: 'normal',
});

export const AboutHeading = styled(CommonHeroTypography)({
  fontWeight: 600,
  fontSize: '49px',
  margin: '23px 0',
  fontFamily: 'var(--font-jost)',
  maxWidth: '600px',
  color: '#000'
});