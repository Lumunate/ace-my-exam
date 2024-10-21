'use client';

import { createTheme } from '@mui/material/styles';

const breakpoints = {
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 1024,
    xl: 1200,
    xxl: 1400,
  },
};

const theme = createTheme({
  breakpoints,
});

export default theme;
