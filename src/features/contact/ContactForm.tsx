'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { CircularProgress, Grid, Snackbar } from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { contactSchema } from '@/app/(main)/contact/ContactSchema';
import { StyledTextField } from '@/components/form/Form.style';
import { ContactButton, ContactFormContainer } from '@/features/contact/ContactForm.style';

interface ContactFormInputs {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
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
