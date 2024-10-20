'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, CircularProgress, FormHelperText, InputLabel, MenuItem, Snackbar } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import 'react-datepicker/dist/react-datepicker.css';

import { feedbackSchema } from '@/app/(main)/feedback/FeedbackSchema';
import { Button } from '@/components/buttons/Button.style';
import { CustomFormControl, StyledSelectField, StyledTextField } from '@/components/form/Form.style';

import { FeedbackFormContainer } from './FeedbackFrom.style';

interface FeedbackFormInputs {
  name: string;
  lastName: string;
  course: string;
  sessionDate: Date | null;
  link: string;
  experience: string;
  feedback: string;
}

export default function FeedbackForm() {
  const [loading, setLoading] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FeedbackFormInputs>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: '',
      lastName: '',
      course: '',
      sessionDate: null,
      link: '',
      experience: '',
      feedback: '',
    },
  });

  const onSubmit: SubmitHandler<FeedbackFormInputs> = async (data) => {
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
      <FeedbackFormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            columns={24}
            columnSpacing={{xs: '20px', lg: '40px'}}
            rowSpacing={{xs: '20px', lg: '40px'}}
            alignItems={'start'}
            sx={{mb: '40px'}}
          >
            <Grid size={{ xs: 24, md: 12 }}>
              <StyledTextField
                label='Name'
                variant='standard'
                fullWidth
                margin='none'
                error={!!errors.name}
                helperText={errors.name?.message}
                {...register('name')}
                inputFontSize='20px'
                labelFontSize='14px'
              />
            </Grid>
            <Grid size={{ xs: 24, md: 12 }}>
              <StyledTextField
                label='Last Name'
                variant='standard'
                fullWidth
                margin='none'
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                {...register('lastName')}
                inputFontSize='20px'
                labelFontSize='14px'
              />
            </Grid>

            <Grid size={{ xs: 24, md: 12 }}>
              <CustomFormControl
                fullWidth
                variant='standard'
                labelFontSize='14px'
                error={!!errors.course}
              >
                <InputLabel id='course'>Course/Subject</InputLabel>
                <Controller
                  name='course'
                  control={control}
                  render={({ field }) => (
                    <StyledSelectField
                      label='course'
                      value={field.value}
                      onChange={field.onChange}
                      variant='standard'
                      inputFontSize='20px'
                      fullWidth
                      IconComponent={() => (
                        <Image
                          src='/icons/down.svg'
                          alt='Custom Dropdown Icon'
                          width={7}
                          height={8}
                        />
                      )}
                      MenuProps={{
                        disableScrollLock: true,
                      }}
                    >
                      <MenuItem value='math'>Math</MenuItem>
                      <MenuItem value='physics'>Physics</MenuItem>
                      <MenuItem value='chemistry'>Chemistry</MenuItem>
                    </StyledSelectField>
                  )}
                />
                {errors.course && (
                  <FormHelperText error>
                    {errors.course?.message}
                  </FormHelperText>
                )}
              </CustomFormControl>
            </Grid>

            <Grid size={{ xs: 24, md: 12 }}>
              <Box sx={{ position: 'relative' }}>
                <Image
                  src={'/icons/calender.svg'}
                  width={10}
                  height={12}
                  alt='icon'
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '28px',
                    zIndex: 2,
                  }}
                />
                <Controller
                  name='sessionDate'
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                      className='feedback-datepicker'
                      placeholderText='Date of Session'
                    />
                  )}
                />
                {errors.sessionDate && (
                  <FormHelperText error sx={{fontSize:'10px'}}>
                    {errors.sessionDate?.message}
                  </FormHelperText>
                )}
              </Box>
            </Grid>

            <Grid size={{ xs: 24, md: 12 }}>
              <StyledTextField
                label='Link'
                variant='standard'
                fullWidth
                margin='none'
                error={!!errors.link}
                helperText={errors.link?.message}
                {...register('link')}
                inputFontSize='20px'
                labelFontSize='14px'
              />
            </Grid>

            <Grid size={{ xs: 24, md: 12 }}>
              <CustomFormControl
                fullWidth
                variant='standard'
                labelFontSize='14px'
                error={!!errors.experience}
              >
                <InputLabel id='experience'>Rate Your Experience</InputLabel>
                <Controller
                  name='experience'
                  control={control}
                  render={({ field }) => (
                    <StyledSelectField
                      label='Rate Your Experience'
                      labelId='experience'
                      value={field.value}
                      onChange={field.onChange}
                      variant='standard'
                      inputFontSize='20px'
                      fullWidth
                      IconComponent={() => (
                        <Image
                          src='/icons/down.svg'
                          alt='Custom Dropdown Icon'
                          width={7}
                          height={8}
                        />
                      )}
                      MenuProps={{
                        disableScrollLock: true,
                      }}
                    >
                      <MenuItem value='1'>1 - Poor</MenuItem>
                      <MenuItem value='2'>2 - Fair</MenuItem>
                      <MenuItem value='3'>3 - Good</MenuItem>
                      <MenuItem value='4'>4 - Very Good</MenuItem>
                      <MenuItem value='5'>5 - Excellent</MenuItem>
                    </StyledSelectField>
                  )}
                />
                {errors.experience && (
                  <FormHelperText error>
                    {errors.experience?.message}
                  </FormHelperText>
                )}
              </CustomFormControl>
            </Grid>

            <Grid size={{ xs: 24 }}>
              <StyledTextField
                label='Share Your Experience Here...'
                variant='standard'
                fullWidth
                multiline
                rows={2}
                margin='none'
                error={!!errors.feedback}
                helperText={errors.feedback?.message}
                {...register('feedback')}
                inputFontSize='20px'
                labelFontSize='14px'
              />
            </Grid>
          </Grid>

          <Button
            type='submit'
            special
            fontSize='14px'
            borderRadius='4px'
            width='170px'
            height='41px'
          >
            {loading ? <CircularProgress size={24} /> : 'Submit Feedback'}
          </Button>
        </form>
      </FeedbackFormContainer>

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
