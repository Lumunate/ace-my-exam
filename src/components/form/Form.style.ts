'use client';

import { FormControl, MenuItem, Select, styled, TextField } from '@mui/material';

export const StyledTextField = styled(TextField)<{
  inputFontSize?: string;
  labelFontSize?: string;
}>(({ theme, inputFontSize = '14px', labelFontSize = '10px' }) => ({

  [theme.breakpoints.down('sm')]: {
    marginTop: '6px',
  },
  input: {
    fontWeight: 600,
    fontSize: inputFontSize,
    fontFamily: 'Jost, sans-serif',
    height: '36px',
    minHeight: '36px',
    padding: '0',
  },
  '& .MuiInputLabel-root': {
    color: '#818181',
    fontWeight: 600,
    fontSize: labelFontSize,
    textTransform: 'capitalize',
    fontFamily: 'Lato, sans-serif',
  },
  '& .MuiInputBase-input.MuiInput-input': {
    fontWeight: 600,
    fontSize: inputFontSize, 
    fontFamily: 'Jost, sans-serif',
  },
  '& .MuiFormHelperText-root.Mui-error ': {
    fontSize: '10px',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#818181',
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

export const CustomFormControl = styled(FormControl)<{
  labelFontSize?: string;
}>(({ labelFontSize = '10px' }) => ({
  '& .MuiInputLabel-root':{
    color: '#818181',
    fontWeight: 600,
    fontSize: labelFontSize, 
    textTransform: 'capitalize',
    fontFamily: 'Lato, sans-serif',
  
  },
  '& .MuiInputLabel-root.Mui-focused':{
    color: '#818181',
    fontSize: labelFontSize, 
  }
}));

export const StyledSelectField = styled(Select)<{
  inputFontSize?: string;
  labelFontSize?: string;
}>(({ inputFontSize = '14px'}) => ({
  textAlign: 'start',
  fontWeight: 600,
  fontSize: inputFontSize,
  fontFamily: 'Jost, sans-serif',
  overflow: 'hidden',
  height: '36px',
  minHeight: '36px',
  lineHeight: '34px',

  '& .MuiSelect-select': {
    height: '36px',
    minHeight: '36px',
  },

  '&.MuiInput-underline:before': {
    borderBottom: '1px solid black',
  },
  '&.MuiInput-underline:after': {
    borderBottom: '1px solid black',
  },
  '&:hover .MuiInput-underline:before': {
    borderBottom: '1px solid black !important',
  },
}));

export const StyledFormControl = styled(FormControl)({
  margin: '16px 0',
  minWidth: 120,
  width: '100%',
});

export const StyledMenuItem = styled(MenuItem)({
  fontSize: '14px',
  fontFamily: 'Lato, sans-serif',
});