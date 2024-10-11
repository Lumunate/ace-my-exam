import {
  Modal,
  Box,
  ButtonBase,
  Typography,
  Backdrop,
  styled,
  TextField,
} from '@mui/material';
import Link from 'next/link';
// Style for the Backdrop
export const StyledBackdrop = styled(Backdrop)({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(7.8px)',
});

export const AuthModalContainer = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const AuthModalContent = styled(Box)({
  backgroundColor: '#fff',
  padding: '69px 49px',
  borderRadius: '20px',
  width: '347px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  zIndex: 1,
});
export const StyledTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    fontWeight: 600,
    fontSize: '14px',
  },
  '& .MuiInputLabel-root': {
    color: '#818181',
    fontWeight: 600,
    fontSize: '10px',
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

export const AuthButton = styled(ButtonBase)({
  padding: '10.5px',
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
  width: '100%',
  boxShadow: '0 4px 11px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    backgroundColor: 'gray',
  },
  marginTop: '2rem',
});

export const HeadingTypography = styled(Typography)({
  fontWeight: 600,
  fontFamily: 'var(--font-poppins)',
  color: '#000000',
  fontSize: '16px',
  textTransform: 'uppercase',
  textAlign: 'center',
});
export const ParaTypography = styled(Typography)({
  fontWeight: 400,
  fontFamily: 'var(--font-poppins)',
  color: '#000000',
  fontSize: '8px',
  textAlign: 'center',
});
export const StyledLinkOne = styled(Link)({
  color: '#000000',
  textDecoration: 'none',
  fontFamily: 'var(--font-poppins)',
  fontSize: '8px',
  textAlign: 'end',
  display: 'block',
  '&:hover': {
    textDecoration: 'underline',
  },
});

export const StyledLinkTwo = styled(Link)({
  color: '#00B8C9',
  textDecoration: 'none',
  fontFamily: 'var(--font-poppins)',
  fontSize: '8px',
  textAlign: 'center',
  display: 'inline-block',
  '&:hover': {
    textDecoration: 'underline',
  },
});
