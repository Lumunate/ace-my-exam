'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { CircularProgress, Grid, Snackbar } from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { StyledTextField } from '@/components/form/Form.style';
import { ContactButton, ContactFormContainer } from '@/features/contact/ContactForm.style';
import { contactSchema, IContact } from '@/types/contact';

import { useSubmitContactForm } from './ContactForm.hooks';
import { useSnackbar } from '@/contexts/SnackbarContext';

const defaultValues: IContact = {
  name: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactForm() {
  const { showSnackbar } = useSnackbar(); // Access the context functions

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IContact>({
    resolver: zodResolver(contactSchema),
    defaultValues
  });

  const { mutate: submitForm, isLoading, isError } = useSubmitContactForm();
  const onSubmit: SubmitHandler<IContact> = async (data) => {
    submitForm(data, {
      onSuccess: () => {
        showSnackbar('Form submitted successfully!');
        reset();
      },
      onError: (error) => {
        showSnackbar('Failed to submit Contact Form. Please try again later!');
      }
    });
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
                inputfontsize="20px"
                labelfontsize="14px"
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
                inputfontsize="20px"
                labelfontsize="14px"
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
                inputfontsize="20px"
                labelfontsize="14px"
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
                inputfontsize="20px"
                labelfontsize="14px"
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
                inputfontsize="20px"
                labelfontsize="14px"
              />
            </Grid>
          </Grid>
          <ContactButton type="submit">
            {isLoading ? <CircularProgress size={24} /> : 'Send Message'}
          </ContactButton>
        </form>
      </ContactFormContainer>
    </>
  );
}
