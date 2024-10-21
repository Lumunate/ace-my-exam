'use client';

import { Box, styled, Typography, List, ListItem, Divider } from '@mui/material';

export const FounderWrapper = styled(Box)({
  width: '100%',
  position: 'relative',
});

export const FounderContentContainer = styled(Box)(({ theme }) => ({
  padding: '0 0 120px',
  [theme.breakpoints.down('lg')]: {
    padding: '0 0 100px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0 0 80px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0 0 60px',
  },
  [theme.breakpoints.down(576)]: {
    padding: '0 0 40px',
  },
}));

export const FounderImgHead = styled(Box)(({ theme }) => ({
  height: '535px',
  maxWidth: '424px',
  position: 'relative',
  borderRadius: '20px 20px 0 0',
  overflow: 'hidden',
  marginLeft: 'auto',
  [theme.breakpoints.down('xl')]: {
    maxWidth: '400px',
    height: '520px',
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '424px',
    height: '535px',
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '200px',
    height: '252px',
  },
}));

const CommonHeroTypography = styled(Typography)({
  fontWeight: 400,
  fontStyle: 'normal',
  color: '#000000'
});

export const FounderHeading = styled(CommonHeroTypography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '49px',
  marginTop: '16px',
  fontFamily: 'Jost, sans-serif',
  textTransform: 'capitalize',
  [theme.breakpoints.down('xl')]: {
    fontSize: '30px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '30px',
    lineHeight: 'normal',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '30px',
    lineHeight: 'normal',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    marginTop: '10px',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '16px',
  },
}));

export const FounderSubHeading = styled(CommonHeroTypography)(({ theme }) => ({
  fontSize: '18px',
  fontFamily: 'Lato, sans-serif',
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    marginBottom: '20px',
  },
  [theme.breakpoints.down(576)]: {
    fontSize: '12px',
  },
}));

export const FounderContent = styled(CommonHeroTypography)(({ theme }) => ({
  fontSize: '16px',
  marginBottom: '40px',
  fontFamily: 'Lato, sans-serif',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    marginBottom: '20px',
  },
  [theme.breakpoints.down(576)]: {
    fontSize: '12px',
  },
}));

export const FounderList = styled(List)({
});

export const FounderListItem  = styled(ListItem )({
  padding: '4px 0',
  display: 'flex',
  alignItems: 'center',
});

export const FounderCard = styled(Box)(({ theme }) => ({
  borderRadius: '20px',
  backgroundColor: '#ffffff',
  boxShadow: '0px 8px 30.1px 0px rgba(0, 0, 0, 0.13)',
  display: 'flex',
  alignItems: 'start',
  overflow: 'hidden',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap'
  },
}));

export const FounderCardDivider = styled(Divider)(({ theme }) => ({
  background: 'linear-gradient(to top, #FFFFFF 0%, #666666 46%, #FFFFFF 100%)',
  border: 'unset',
  width: '1px',
  [theme.breakpoints.down('md')]: {
    height: '1px',
    width: '100%',
    background: 'linear-gradient(to left, #FFFFFF 0%, #666666 46%, #FFFFFF 100%)',
  },
}));

export const FounderCardInnerHead = styled(Box)(({ theme }) => ({
  padding: '46px 25px',
  flex: 1,
  height: '100%',
  [theme.breakpoints.down('lg')]: {
    padding: '30px 10px',
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
    flex: 'unset',
    padding: '30px 20px',
  },

  [theme.breakpoints.down(400)]: {
    padding: '20px',
  },
}));

export const FounderCardHeading = styled(CommonHeroTypography)(({ theme }) => ({
  fontSize: '16px',
  marginBottom: '0',
  fontFamily: 'Lato, sans-serif',
  color: '#787878',
  fontWeight: 700,
  [theme.breakpoints.down(576)]: {
    fontSize: '14px',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '12px',
  },
}));

export const FounderCardListText = styled(CommonHeroTypography)(({ theme }) => ({
  fontSize: '14px',
  marginBottom: '0',
  fontFamily: 'Lato, sans-serif',
  color: '#787878',
  fontWeight: 400,
  [theme.breakpoints.down('xl')]: {
    fontSize: '12px',
  },
}));