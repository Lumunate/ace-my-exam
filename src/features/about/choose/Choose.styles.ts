'use client';

import { Box, styled, Typography,} from '@mui/material';

export const ChooseWrapper = styled(Box)({
  padding: '120px 0',
  width: '100%',
  position: 'relative',
});

export const ChooseCard = styled(Box)({
  width: '630px',
  height: '416px',
  position: 'absolute',
  left: '15px',
  top: '128px',
  zIndex: 2,
  padding: '80px 47px',
  boxShadow: '0px 4px 13.6px 0px rgba(0, 0, 0, 0.25)',
  borderRadius: '20px',
  background: '#FFF'
});
export const ChooseSkillCard = styled(Box)({
  padding: '26px 30px',
  boxShadow: '0px 4px 13.6px 0px rgba(0, 0, 0, 0.25)',
  borderRadius: '20px',
  background: '#FFF',
  marginBottom: '15px',
  display: 'flex',
  alignItems: 'center',
});

const CommonHeroTypography = styled(Typography)({
  fontWeight: 400,
  fontStyle: 'normal',
  color: '#000000'
});

export const ChooseHeading = styled(CommonHeroTypography)({
  fontWeight: 600,
  fontSize: '49px',
  marginTop: '16px',
  marginBottom: '10px',
  fontFamily: 'Jost, sans-serif',
  textTransform: 'capitalize',
});

export const ChoosePara = styled(CommonHeroTypography)({
  fontSize: '16px',
  marginBottom: '20px',
  fontFamily: 'Lato, sans-serif',
  color: '#787878'
});

export const ChooseSkillCardHeading = styled(CommonHeroTypography)({
  fontSize: '18px',
  fontFamily: 'Lato, sans-serif',
  color: '#000',
  fontWeight: 700
});

export const ChooseImgHead = styled(Box)({
  height: '671px',
  width: '466px',
  borderRadius: '8px',
  boxShadow: '0px 4px 18.6px 0px rgba(0, 0, 0, 0.19)',
  overflow: 'hidden',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '0',
    top: '0',
    right: '0',
    background: 'linear-gradient(84deg, #DA9694 1.69%, rgba(0, 0, 0, 0.00) 98.3%)',
    borderRadius: '8px',
  },

});