import {
  Box,
  ButtonBase,
  styled,
  TextField,
  Typography
} from '@mui/material';
import Link from 'next/link';

export const ContactContainer = styled(Box)({
  padding: '235px 0',
});
export const IconHead = styled(Box)({
  position: 'absolute',
  left: '-50px',
  top: '-60px',
});

export const FormContainer = styled(Box)({
  backgroundColor: '#FCFDFF',
  padding: '92px 68px 68px 51px',
  borderRadius: '20px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  zIndex: 1,
});
export const LinksHead = styled(Box)({
  padding: '33px 0 33px 39px',
  borderLeft: '2px solid #00B8C9'
});

export const StyledTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    fontWeight: 600,
    fontSize: '20px',
  },
  '& .MuiInputLabel-root': {
    color: '#818181',
    fontWeight: 600,
    fontSize: '14px',
    textTransform: 'capitalize',
    '& .Mui-focused': {
      color: '#818181',
    },
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

export const ContactButton = styled(ButtonBase)({
  padding: '8px',
  fontWeight: 400,
  fontFamily: 'var(--font-poppins)',
  fontSize: '14px',
  color: 'white',
  lineHeight: '2.4rem',
  backgroundColor: 'rgba(0, 184, 201, 1)',
  textAlign: 'center',
  border: 'none',
  borderRadius: '4px',
  transition: 'all 0.3s ease-in-out',
  boxShadow: '0 4px 11px rgba(0, 0, 0, 0.1)',
  width: '170px',
  marginTop: '60px',
  '&:hover': {
    backgroundColor: 'gray',
  },
});

export const HeadingTypography = styled(Typography)({
  fontWeight: 700,
  fontFamily: 'var(--font-poppins)',
  color: '#1F1F1F',
  fontSize: '46px',
  textTransform: 'uppercase',
});
export const ParaTypography = styled(Typography)({
  fontWeight: 500,
  fontFamily: 'var(--font-poppins)',
  color: '#000000',
  fontSize: '16px',
  maxWidth: '586px'
});
export const StyledLinkOne = styled(Link)({
  color: '#000000',
  textDecoration: 'none',
  fontFamily: 'var(--font-poppins)',
  fontSize: '16px',
  display: 'block',
  '&:hover': {
    textDecoration: 'underline',
  },
});
