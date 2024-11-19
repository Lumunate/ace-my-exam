'use client';
import { Box, styled, Typography } from '@mui/material';

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
  fontSize: '1.8rem',
  fontWeight: '600',
  marginBottom: '0.4rem',
}));

export const AdminSectionSubHeading = styled(Typography)(() => ({
  color: 'rgba(120, 120, 120, 1)',
  fontSize: '1rem',
  fontWeight: '300',
  marginBottom: '0.8rem',
}));

export const AdminSectionsLayout = styled(Box)(() => ({
  display: 'flex',
  gap: '1.2rem',
  width: '100%',
  height: 'max-content',
}));
