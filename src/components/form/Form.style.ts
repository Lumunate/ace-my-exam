'use client';
import { styled, TextField } from '@mui/material';

export const StyledTextField = styled(TextField)({
  input: {
    fontWeight: 600,
    fontSize: '14px',
  },
  inputLabel: {
    color: '#818181',
    fontWeight: 600,
    fontSize: '10px',
    textTransform: 'capitalize',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#818181',
    transform: 'scale(0.9)',
  },
  '& .MuiInput-underline:before': {
    borderBottom: '2px solid #818181',
  },
  '& .MuiInput-underline:after': {
    borderBottom: '2px solid black',
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottom: '2px solid black',
  },
});
