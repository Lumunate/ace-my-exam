import { Link } from '@mui/material';
import { styled } from '@mui/system';

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.accent.main,
  textDecoration: 'none',
  fontWeight: 'bold',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const AccentSpan = styled('span')(({ theme }) => ({
  color: theme.palette.accent.main,
}));
