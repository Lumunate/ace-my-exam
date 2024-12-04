'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, CircularProgress, FormHelperText, InputLabel, MenuItem, Rating } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import 'react-datepicker/dist/react-datepicker.css';

import { FeedbackFormContainer } from './FeedbackFrom.style';
import { Button } from '../../components/buttons/Button.style';
import { CustomFormControl, StyledSelectField, StyledTextField, CustomInputLabel } from '../../components/form/Form.style';
import { useSnackbar } from '../../contexts/SnackbarContext';
import { useSubmitFeedbackForm } from '../../hooks/useFeedbackForm';
import { feedbackSchema, IFeedback } from '../../types/feedback';

const defaultValues: IFeedback = {
  name: '',
  lastName: '',
  course: '',
  sessionDate: new Date(),
  experience: '4',  // Default to 4 stars as string
  feedback: '',
};

export default function FeedbackForm() {
  const { showSnackbar } = useSnackbar();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFeedback>({
    resolver: zodResolver(feedbackSchema),
    defaultValues,
  });

  const { mutate: submitForm, isLoading } = useSubmitFeedbackForm();
  
  const onSubmit: SubmitHandler<IFeedback> = async (data) => {
    // Convert the experience value to string before submitting (if it's not already a string)
    const formattedData = {
      ...data,
      experience: String(data.experience),
    };

    submitForm(formattedData, {
      onSuccess: () => {
        showSnackbar('Form submitted successfully!');
        reset();
      },
      onError: () => {
        showSnackbar('Failed to submit Contact Form. Please try again later!');
      },
    });
  };

  return (
    <>
      <FeedbackFormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            columns={24}
            columnSpacing={{ xs: '20px', lg: '40px' }}
            rowSpacing={{ xs: '20px', lg: '40px' }}
            alignItems={'start'}
            sx={{ mb: '40px' }}
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
                inputfontsize='18px'
                labelfontsize='16px'
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
                inputfontsize='18px'
                labelfontsize='16px'
              />
            </Grid>

            <Grid size={{ xs: 24, md: 12 }}>
              <CustomFormControl fullWidth variant='standard' labelfontsize='16px' error={!!errors.course}>
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
                      inputfontsize='18px'
                      fullWidth
                      IconComponent={() => (
                        <Image src='/icons/down.svg' alt='Custom Dropdown Icon' width={7} height={8} />
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
                {errors.course && <FormHelperText error>{errors.course?.message}</FormHelperText>}
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
                  <FormHelperText error sx={{ fontSize: '10px' }}>
                    {errors.sessionDate?.message}
                  </FormHelperText>
                )}
              </Box>
            </Grid>

            <Grid size={{ xs: 24, md: 12 }}>
              <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                <CustomInputLabel id='experience'>Rate Your Experience</CustomInputLabel>
                <Controller
                  name='experience'
                  control={control}
                  render={({ field }) => (
                    <Rating
                      name='experience'
                      value={field.value ? Number(field.value) : 4} 
                      onChange={(_, newValue) => field.onChange(String(newValue))}  
                      size='large'
                      icon={<Image src='/icons/filledStar.svg' alt='Filled Star' width={26} height={25} />} 
                      emptyIcon={<Image src='/icons/unFilledStar.svg' alt='Outlined Star' width={26} height={25} />} 
                      sx={{
                        '& .MuiRating-icon': {
                          marginRight: '5px', 
                        }
                      }}
                    />
                  )}
                />
                {errors.experience && <FormHelperText error>{errors.experience?.message}</FormHelperText>}
              </Box>
            </Grid>

            <Grid size={{ xs: 24 }}>
              <StyledTextField
                label='Share Your Experience Here...'
                variant='standard'
                fullWidth
                multiline
                rows={5}
                margin='none'
                error={!!errors.feedback}
                helperText={errors.feedback?.message}
                {...register('feedback')}
                inputfontsize='18px'
                labelfontsize='16px'
              />
            </Grid>
          </Grid>

          <Button type='submit' special fontSize='14px' borderRadius='4px' width='170px' height='41px'>
            {isLoading ? <CircularProgress size={24} /> : 'Submit Feedback'}
          </Button>
        </form>
      </FeedbackFormContainer>
    </>
  );
}
