'use client';
import { styled, TextField } from '@mui/material';

export const StyledTextField = styled(TextField)<{
  inputfontsize?: string;
  labelfontsize?: string;
}>(({ inputfontsize = '14px', labelfontsize = '10px' }) => ({
  input: {
    fontWeight: 600,
    fontSize: inputfontsize,
    fontFamily: 'Jost, sans-serif',
  },
  '& .MuiInputLabel-root': {
    color: '#818181',
    fontWeight: 600,
    fontSize: labelfontsize,
    textTransform: 'capitalize',
    fontFamily: 'Lato, sans-serif',
  },
  '& .MuiFormHelperText-root.Mui-error ': {
    fontSize: '10px',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#818181',
    transform: 'scale(0.9)',
  },
  '& .MuiInput-underline:before': {
    borderBottom: '1px solid #818181',
  },
  '& .MuiInput-underline:after': {
    borderBottom: '1px solid black',
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottom: '1px solid black',
  },
}));
