'use client';
import { Box, List, ListItem, styled, Typography } from '@mui/material';

export const PricingCardWrapper = styled(Box)({
  // maxWidth:'358px',
  width: '100%',
  height:'100%',
  backgroundColor: '#fff',
  boxShadow: ' 0px 4px 40.1px 0px rgba(0, 0, 0, 0.13)',
  borderRadius: '20px',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',

});

export const PricingCardImageWrapper = styled(Box)({
  height: '290px',
  position: 'relative',
  borderRadius: '20px 20px 0 0',
  overflow: 'hidden',
});

export const PricingCardContentWrapper = styled(Box)({
  padding: '20px 39px 27px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1
});

export const PricingCardTitle = styled(Typography)({
  fontWeight: 500,
  fontSize: '28px',
  backgroundColor: '#DA9694',
  color: '#fff',
  width: '200px',
  height: '57px',
  borderRadius: '12px',
  textTransform:'capitalize',
  position: 'absolute',
  right: '15px',
  top: '208px',
  display: 'flex',
  alignItems: 'center',
  justifyContent:' center',
  lineHeight: 'none',
  zIndex: '2',
  boxShadow: ' 0px 4px 40.1px 0px rgba(0, 0, 0, 0.13)',
});

export const PricingCardList = styled(List)({
  padding: 0,
  width: '100%',
  marginBottom: '20px',
});

export const PricingCardListItem = styled(ListItem)({
  color: '#000',
  display: 'flex',
  alignItems:'center',
  padding: '4px 0',
});

export const PricingCardTextHead = styled(Box)({
  display: 'flex',
  alignItems:'center',
  flex: 1,
});

export const PricingCardListItemText = styled(Typography)({
  fontSize: '18px',
  fontWeight: 400,
  color: '#000000',
  fontFamily: 'Lato, sans-serif',
  textTransform:'capitalize',
});

export const PricingCardListItemTextPricing = styled(Typography)({
  fontSize: '22px',
  fontWeight: 700,
  color: '#DA9694',
  fontFamily: 'Lato, sans-serif',
  textTransform:'capitalize',
});