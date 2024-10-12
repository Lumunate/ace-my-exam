'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import FastForwardIcon from '@mui/icons-material/FastForward';
import { Snackbar, Grid, Box, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { contactSchema } from '@/app/(main)/contact/ContactSchema';
import { AppContentWrapper } from '@/components/common/Global.style';
import { StyledTextField } from '@/components/form/Form.style';

import {
  ContactContainer,
  ContactFormContainer,
  ContactButton,
  ContactHeadingTypography,
  ContactParaTypography,
  ContactLinksHead,
  ContactStyledLinkOne,
  ContactIconHead,
} from './contact.style';

interface ContactFormInputs {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSnackbarMessage('Message sent successfully!');
      reset();
      // eslint-disable-next-line no-console
      console.log('Form data:', data);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSnackbarMessage('Failed to send the message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ContactContainer>
        <AppContentWrapper>
          <Grid container columns={24} columnSpacing={2} sx={{ px: '40px' }}>
            <Grid item md={12} sx={{ mt: '80px' }}>
              <Box sx={{ mb: '100px', position: 'relative' }}>
                <ContactHeadingTypography variant='h1'>CONTACT US</ContactHeadingTypography>
                <ContactParaTypography variant='body1'>
                  We&apos;d love to hear from you. Contact us directly or use the
                  form below. We&apos;ll be in touch.
                </ContactParaTypography>
                <ContactIconHead>
                  <FastForwardIcon sx={{ color: '#DA5077', fontSize: '40px' }} />
                </ContactIconHead>
              </Box>
              <ContactLinksHead>
                <Box sx={{ mb: '20px' }}>
                  <ContactStyledLinkOne href={'#'}>+1 234-567-890</ContactStyledLinkOne>
                  <ContactStyledLinkOne href={'#'}>asma@acemyexam.co.uk</ContactStyledLinkOne>
                </Box>
                <ContactStyledLinkOne href={'#'}>Cambridge, UK</ContactStyledLinkOne>
              </ContactLinksHead>
            </Grid>

            <Grid item md={12}>
              <ContactFormContainer>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container columns={24} columnSpacing={4} rowSpacing={2}>
                    <Grid item md={12}>
                      <StyledTextField
                        label="Name"
                        variant="standard"
                        fullWidth
                        margin="normal"
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        {...register('name')}
                        inputFontSize="20px"
                        labelFontSize="14px"
                      />
                    </Grid>
                    <Grid item md={12}>
                      <StyledTextField
                        label="Last Name"
                        variant="standard"
                        fullWidth
                        margin="normal"
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message}
                        {...register('lastName')}
                        inputFontSize="20px"
                        labelFontSize="14px"
                      />
                    </Grid>
                    <Grid item md={12}>
                      <StyledTextField
                        label="Email"
                        variant="standard"
                        fullWidth
                        margin="normal"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        {...register('email')}
                        inputFontSize="20px"
                        labelFontSize="14px"
                      />
                    </Grid>
                    <Grid item md={12}>
                      <StyledTextField
                        label="Phone"
                        variant="standard"
                        fullWidth
                        margin="normal"
                        error={!!errors.phone}
                        helperText={errors.phone?.message}
                        {...register('phone')}
                        inputFontSize="20px"
                        labelFontSize="14px"
                      />
                    </Grid>
                    <Grid item md={12}>
                      <StyledTextField
                        label="Message"
                        variant="standard"
                        fullWidth
                        margin="normal"
                        error={!!errors.message}
                        helperText={errors.message?.message}
                        {...register('message')}
                        inputFontSize="20px"
                        labelFontSize="14px"
                      />
                    </Grid>
                  </Grid>
                  <ContactButton type="submit">
                    {loading ? <CircularProgress size={24} /> : 'Send Message'}
                  </ContactButton>
                </form>
              </ContactFormContainer>
            </Grid>
          </Grid>
        </AppContentWrapper>
      </ContactContainer>

      {snackbarMessage && (
        <Snackbar
          open={!!snackbarMessage}
          onClose={() => setSnackbarMessage(null)}
          message={snackbarMessage}
          autoHideDuration={3000}
        />
      )}
    </>
  );
}
