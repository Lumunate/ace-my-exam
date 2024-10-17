'use client';

import { Box, styled, Typography, List, ListItem, Divider } from '@mui/material';

export const FounderWrapper = styled(Box)({
  width: '100%',
  position: 'relative',
});

export const FounderContentContainer = styled(Box)({
  padding: '0 0 120px',
});

export const FounderImgHead = styled(Box)({
  height: '535px',
  maxWidth: '424px',
  position: 'relative',
  borderRadius: '20px 20px 0 0',
  overflow: 'hidden',
  marginLeft: 'auto'
});

const CommonHeroTypography = styled(Typography)({
  fontWeight: 400,
  fontStyle: 'normal',
  color: '#000000'
});

export const FounderHeading = styled(CommonHeroTypography)({
  fontWeight: 600,
  fontSize: '49px',
  marginTop: '16px',
  marginBottom: '10px',
  fontFamily: 'Jost, sans-serif',
  textTransform: 'capitalize',
});

export const FounderSubHeading = styled(CommonHeroTypography)({
  fontSize: '18px',
  marginBottom: '0',
  fontFamily: 'Lato, sans-serif',
});

export const FounderContent = styled(CommonHeroTypography)({
  fontSize: '16px',
  marginTop: '10px',
  marginBottom: '10px',
  fontFamily: 'Lato, sans-serif',
});

export const FounderList = styled(List)({
});

export const FounderListItem  = styled(ListItem )({
  padding: '4px 0',
  display: 'flex',
  alignItems: 'center',
});

export const FounderCard = styled(Box)({
  borderRadius: '20px',
  backgroundColor: '#ffffff',
  boxShadow: '0px 8px 30.1px 0px rgba(0, 0, 0, 0.13)',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
});

export const FounderCardDivider = styled(Divider)({
  background: 'linear-gradient(to top, #FFFFFF 0%, #666666 46%, #FFFFFF 100%)',
  border: 'unset',
  width: '1px',
});

export const FounderCardInnerHead = styled(Box)({
  padding: '46px 25px',
  flex: 1,
  height: '100%',
});

export const FounderCardHeading = styled(CommonHeroTypography)({
  fontSize: '16px',
  marginBottom: '0',
  fontFamily: 'Lato, sans-serif',
  color: '#787878',
  fontWeight: 700
});

export const FounderCardListText = styled(CommonHeroTypography)({
  fontSize: '14px',
  marginBottom: '0',
  fontFamily: 'Lato, sans-serif',
  color: '#787878',
  fontWeight: 400
});