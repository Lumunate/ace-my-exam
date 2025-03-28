'use client';

import { ButtonBase, styled } from '@mui/material';
import type { ButtonBaseProps } from '@mui/material';

interface ButtonProps extends ButtonBaseProps {
  special?: boolean;
  borderRadius?: string;
  fontSize?: string; 
  width?: string;
  height?: string;
}

export const Button = styled(ButtonBase, {
  shouldForwardProp: (prop) =>
    prop !== 'special' &&
    prop !== 'borderRadius' &&
    prop !== 'fontSize' &&
    prop !== 'width' &&
    prop !== 'height',
})<ButtonProps>(
  ({ theme, special = false, borderRadius = '8px', fontSize = '16px', width = '96px', height = '37px' }) => ({
    padding: '11px 30px',
    fontWeight: 400,
    width: width,
    height: height,
    fontFamily: 'Lato, sans-serif',
    fontSize: fontSize,
    color: special ? 'white' : 'black',
    backgroundColor: special ? '#DA9694' : 'white',
    textAlign: 'center',
    border: special ? 'none' : '1px solid #B3B3B3',
    borderRadius: borderRadius,
    boxShadow: special ? '0 4px 14px 0 rgba(0,0,0,0.17)' : 'none',
    transition: 'all 0.3s ease-in-out',
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: special ? '#DA5077' : '',
    },
    '&:disabled': {
      backgroundColor: '#fffbfb', 
      color: '#B3B3B3',
      cursor: 'cursor-not-allowed',
      border: '1px solid #D3D3D3',
      boxShadow: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px !important',
      width: '142px !important',
      height: '41px !important',
    },
    [theme.breakpoints.down(400)]: {
      fontSize: '12px !important',
      width: '100px !important',
      height: '34px !important',
    },
  })
);