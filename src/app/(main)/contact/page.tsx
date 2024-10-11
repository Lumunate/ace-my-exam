'use client';

import FastForwardIcon from '@mui/icons-material/FastForward';
import { Box, Grid } from '@mui/material';

import { AppContentWrapper } from '@/components/common/Global.style';

import {
  ContactButton,
  ContactContainer,
  FormContainer,
  HeadingTypography,
  ParaTypography,
  StyledTextField,
  LinksHead,
  StyledLinkOne,
  IconHead
} from './contact.style';

export default function Contact() {
  return (
    <>
      <ContactContainer>
        <AppContentWrapper>
          <Grid container columns={24} columnSpacing={2} sx={{px: '40px'}}>
            <Grid item xs={12} sx={{mt: '80px'}}>
              <Box sx={{mb: '100px', position: 'relative', }}>
                <HeadingTypography variant='h1'>CONTACT US</HeadingTypography>
                <ParaTypography variant='body1'>
                  We&apos;d love to hear from you. Contact us directly or use the
                  form below. We&apos;ll be in touch.
                </ParaTypography>
                <IconHead>
                  <FastForwardIcon sx={{color: '#DA5077', fontSize: '40px'}} />
                </IconHead>
              </Box>
              <LinksHead>
                <Box sx={{mb: '20px'}}>
                  <StyledLinkOne href={'#'}>+1 234-567-890</StyledLinkOne>
                  <StyledLinkOne href={'#'}>asma@acemyexam.co.uk</StyledLinkOne>
                </Box>
                <StyledLinkOne href={'#'}>Cambridge, UK</StyledLinkOne>
              </LinksHead>
            </Grid>
            <Grid item xs={12}>
              <FormContainer>
                <Grid container columns={24} columnSpacing={4} rowSpacing={2} >
                  <Grid item xs={12}>
                    <StyledTextField
                      label='Name'
                      variant='standard'
                      fullWidth
                      margin='normal'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      label='Last Name'
                      variant='standard'
                      fullWidth
                      margin='normal'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      label='Email'
                      variant='standard'
                      fullWidth
                      margin='normal'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      label='Phone'
                      variant='standard'
                      fullWidth
                      margin='normal'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      label='Message'
                      variant='standard'
                      fullWidth
                      margin='normal'
                    />
                  </Grid>
                </Grid>
                <ContactButton>Send Message</ContactButton>
              </FormContainer>
            </Grid>
          </Grid>
        </AppContentWrapper>
      </ContactContainer>
      ;
    </>
  );
}
