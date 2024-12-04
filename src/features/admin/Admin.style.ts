'use client';
import { Box, Button, InputLabel, Select, styled, TextField, Typography } from '@mui/material';

export const AdminSectionWrapper = styled(Box)(({ theme }) => ({
  padding: '2.8rem 2.1rem',
  width: '100%',
  height: '100%',
  borderRadius: 6,
  marginTop: theme.spacing(1),
  backgroundColor: 'white',
}));

export const AdminSectionHeading = styled(Typography)(() => ({
  color: 'text.primary',
  fontSize: '2.4rem',
  fontWeight: '600',
  marginBottom: '0.4rem',
}));

export const AdminCenteredSectionHeading = styled(Typography)(() => ({
  color: 'accent.main',
  textAlign: 'center',
  fontSize: '2.4rem',
  fontWeight: '600',
  marginBottom: '0.4rem',
}));

export const AdminSectionInnerSpacer = styled(Box)(() => ({
  width: '100%',
  height: '1px',
  backgroundColor: 'rgba(0,0,0,0.1)',
  margin: '3rem 0',
}));

export const AdminSectionSubHeading = styled(Typography)(() => ({
  color: 'rgba(120, 120, 120, 1)',
  fontSize: '1.6rem',
  fontWeight: '300',
  marginBottom: '1.6rem',
}));

export const AdminSectionsLayout = styled(Box)(() => ({
  display: 'flex',
  gap: '1.4rem',
  width: '100%',
  height: 'max-content',
}));

export const AdminModalHeading = styled(Typography)(() => ({
  color: 'text.primary',
  fontSize: '2.4rem',
  fontWeight: '600',
  marginBottom: '0.4rem',
}));

export const AdminModalSubHeading = styled(Typography)(() => ({
  color: 'rgba(120, 120, 120, 1)',
  fontSize: '1.8rem',
  fontWeight: '300',
  marginBottom: '0.8rem',
}));

export const StyledButton = styled(Button)({
  fontSize: '1.4rem !important',
});

export const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {  
    fontSize: '1.6rem !important',
  },
  '& .MuiInputBase-input': {  
    fontSize: '1.6rem !important',
  },
  '& .MuiInputLabel-root': { 
    fontSize: '1.6rem',
  },
  '& .MuiInputLabel-shrink': { 
    fontSize: '1.6rem !important',
  },
  '& .Form': { 
    fontSize: '1.6rem !important',
  },
  fontSize: '1.6rem !important',
});

export const StyledSelect = styled(Select)({
  '& .MuiInputBase-input': {  
    fontSize: '1.6rem !important',
  },
  fontSize: '1.6rem !important',
});

export const StyledLabel = styled(InputLabel)({
  '&.MuiInputLabel-root': { 
    fontSize: '1.6rem',
  },
  '&.MuiInputLabel-shrink': { 
    fontSize: '1.6rem !important',
  }
});