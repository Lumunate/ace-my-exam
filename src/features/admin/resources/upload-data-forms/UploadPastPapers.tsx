import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, styled, TextField, Typography } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { useSnackbar } from '../../../../contexts/SnackbarContext';
import { useUploadPastPapers } from '../../../../hooks/resources/useUploadResources';
import { IPastPaperData, pastPaperSchema } from '../../../../types/past-paper';
import FileUpload from '../FileUpload';

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});

const UploadPastPapers = () => {
  const { showSnackbar } = useSnackbar();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    reset,
  } = useForm<IPastPaperData>({
    resolver: zodResolver(pastPaperSchema),
    defaultValues: {
      title: '',
      year: new Date().getFullYear(),
      resources: {
        questionPaper: '',
        markingScheme: '',
        solutionBooklet: '',
      },
    },
  });

  const { mutate: submitForm, isLoading } = useUploadPastPapers();
  const onSubmitForm: SubmitHandler<IPastPaperData> = async (data: IPastPaperData) => {
    submitForm(data, {
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
    <Box>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <FormContainer>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Title"
                variant="outlined"
                fullWidth
                error={!!errors.title}
                helperText={errors.title?.message}
              />
            )}
          />

          <Controller
            name="year"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Year"
                variant="outlined"
                fullWidth
                type="number"
                error={!!errors.year}
                helperText={errors.year?.message}
              />
            )}
          />

          <Controller
            name="resources.questionPaper"
            control={control}
            render={() => (
              <Box>
                <label htmlFor="resources.questionPaper">Upload Question Paper:</label>
                <FileUpload
                  hoist={(file: string) => {
                    setValue('resources.questionPaper', file);
                    trigger('resources.questionPaper');
                  }}
                  maxFileSize={5 * 1024 * 1024}
                  maxFiles={3}
                />
                {errors.resources && errors.resources.questionPaper && (
                  <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                    {errors.resources.questionPaper.message}
                  </Typography>
                )}
              </Box>
            )}
          />

          <Controller
            name="resources.markingScheme"
            control={control}
            render={() => (
              <Box>
                <label htmlFor="resources.markingScheme">Upload Marking Scheme:</label>
                <FileUpload
                  hoist={(file: string) => {
                    setValue('resources.markingScheme', file);
                  }}
                  maxFileSize={5 * 1024 * 1024}
                  maxFiles={3}
                />
                {errors.resources && errors.resources.markingScheme && (
                  <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                    {errors.resources.markingScheme.message}
                  </Typography>
                )}
              </Box>
            )}
          />
          <Controller

            name="resources.solutionBooklet"
            control={control}
            render={() => (
              <Box>
                <label htmlFor="resources.solutionBooklet">Upload Solution Booklet:</label>
                <FileUpload
                  hoist={(file: string) => {
                    setValue('resources.solutionBooklet', file);
                    trigger('resources.solutionBooklet');
                  }}
                  maxFileSize={5 * 1024 * 1024}
                  maxFiles={3}
                />
                {errors.resources && errors.resources.solutionBooklet && (
                  <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                    {errors.resources.solutionBooklet.message}
                  </Typography>
                )}
              </Box>
            )}
          />

          <Button type="submit" disabled={isLoading} variant="contained" color="primary" fullWidth>
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </FormContainer>
      </form>
    </Box>
  );
};

export default UploadPastPapers;
