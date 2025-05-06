import { Box, Card, styled, Typography } from '@mui/material';

interface ProcessCardProps {
  active: boolean;
  index: number;
}

export const ProcessSliderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection:'row',
  alignItems: 'center',
  justifyContent: 'start',
  position: 'relative',
  overflow: 'visible',
  padding: '80px 30px',
  width: 'fit-content',
  margin: '0 auto',
  [theme.breakpoints.down('lg')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '30px',
    justifyContent: 'center', 
  },
  [theme.breakpoints.down('md')]: {
    padding: '40px 30px 60px',
    display:'flex',
    flexDirection: 'column', 
    gap: '0px',
  },
}));

export const ProcessContent = styled(Box)({
  textAlign: 'start',
});

export const BaseTypography = styled(Typography)({
  fontFamily: 'Lato, sans-serif',
  textAlign: 'start',
});

export const ProcessCard = styled(Card)<ProcessCardProps>(({ theme, active, index }) => ({
  position: 'relative',
  marginLeft: index === 0 ? '0px': '-180px',
  width: '278px',
  height: '344px',
  cursor: 'pointer',
  padding:'50px 30px 17px 30px',
  boxShadow: '0px 4px 61.5px 0px rgba(0, 0, 0, 0.09)',
  backgroundColor: '#fff',
  borderRadius: '20px',
  overflow: 'hidden',
  transform: active ? 'translateX(180px)' : '',
  transition: 'transform 0.4s ease, z-index 0.4s ease, padding 0.4s ease',
  zIndex: 10 - index,
  [theme.breakpoints.down('lg')]: {
    display:'flex',
    padding: '26px 18px 14px 18px',
    height: active ? '188px':'auto',
    width: '337px',
    flexDirection:'row-reverse',
    marginLeft: '0px',
    transform: index > 1 && active ? 'translateY(37px)' : 'translateY(0)',
    marginTop: index <= 1 ? '' : '-66px',
  },
  [theme.breakpoints.down('md')]: {
    width: '337px',
    height: active ? '188px':'auto',
    transform: index > 0 && active ? 'translateY(37px)' : 'translateY(0)',
    marginTop: index <= 0 ? '' : '-35px',
    display:'flex',
    flexDirection:'row-reverse',
  },
}));

export const ProcessCardNumber = styled(BaseTypography)(({ theme }) =>({
  color: '#DA9694',
  fontSize: '96px',
  fontWeight: 700,
  textAlign: 'end',
  background: 'linear-gradient(180deg, #DA9694 28.5%, rgba(218, 150, 148, 0.28) 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  [theme.breakpoints.down('lg')]: {
    display:'flex',
    alignItems: 'center',
    fontSize: '76px',
  },
}));

export const ProcessCardTitle = styled(BaseTypography)(({ theme }) => ({
  color: '#DA9694',
  fontSize: '18px',
  fontWeight: 700,
  lineHeight: '22px',
  marginBottom: '3px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '14px',
  },
}));

export const ProcessCardDescription = styled(BaseTypography)(({ theme }) => ({
  color: '#929292',
  fontSize: '16px',
  fontWeight: 400,
  [theme.breakpoints.down('lg')]: {
    fontSize: '12px',
  },
}));
