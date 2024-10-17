'use client';

import { ButtonBase, styled } from '@mui/material';
import type { ButtonBaseProps } from '@mui/material';

interface ButtonProps extends ButtonBaseProps {
  special?: boolean;
  borderRadius?: string; 
}

export const Button = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== 'special' && prop !== 'borderRadius',
})<ButtonProps>(({ special = false, borderRadius = '8px' }) => ({
  padding: '11px 30px',
  fontWeight: 700,
  fontFamily: 'Lato, sans-serif',
  fontSize: '12px',
  color: special ? 'white' : 'black',
  backgroundColor: special ? '#DA9694' : 'white',
  textAlign: 'center',
  border: special ? 'none' : '1px solid #B3B3B3',
  borderRadius: borderRadius,
  boxShadow: special ? '0 4px 14px 0 rgba(0,0,0,0.17)' : 'none',
  transition: 'all 0.3s ease-in-out',
  textTransform: 'capitalize',
  whiteSpace: 'nowrap',
  '&:hover': {
    backgroundColor: special ? '#c0605e' : '',
  },
}));
