import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, styled, TextField, Typography } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { useSnackbar } from '@/contexts/SnackbarContext';
import { useUploadTopicalQuestions } from '@/hooks/resources/useUploadResources';
import { ITopicalQuestionData, topicalQuestionSchema } from '@/types/topical-qeustion';

import FileUpload from '../FileUpload';

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});

interface UplaodTopicalQuestionsProps {
  subtopicId: number;
}

const UplaodTopicalQuestions = ({ subtopicId }: UplaodTopicalQuestionsProps) => {
  const { showSnackbar } = useSnackbar();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    reset,
  } = useForm<ITopicalQuestionData>({
    resolver: zodResolver(topicalQuestionSchema),
    defaultValues: {
      title: '',
      subtopicId: subtopicId,
      questionPaper: '',
      markingScheme: '',
    },
  });

  const { mutate: submitForm, isLoading } = useUploadTopicalQuestions();
  const onSubmitForm: SubmitHandler<ITopicalQuestionData> = async (data: ITopicalQuestionData) => {
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
            name="questionPaper"
            control={control}
            render={() => (
              <Box>
                <label htmlFor="noteUrl">Upload Question Paper:</label>
                <FileUpload
                  hoist={(file: string) => {
                    setValue('questionPaper', file);
                    trigger('questionPaper');
                  }}
                  maxFileSize={5 * 1024 * 1024}
                  maxFiles={3}
                />
                {errors.questionPaper && (
                  <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                    {errors.questionPaper.message}
                  </Typography>
                )}
              </Box>
            )}
          />

          <Controller
            name="markingScheme"
            control={control}
            render={() => (
              <Box>
                <label htmlFor="noteUrl">Upload Marking Scheme:</label>
                <FileUpload
                  hoist={(file: string) => {
                    setValue('markingScheme', file);
                    trigger('markingScheme');
                  }}
                  maxFileSize={5 * 1024 * 1024}
                  maxFiles={3}
                />
                {errors.markingScheme && (
                  <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                    {errors.markingScheme.message}
                  </Typography>
                )}
              </Box>
            )}
          />

          <Button disabled={isLoading} type="submit" variant="contained" color="primary" fullWidth>
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </FormContainer>
      </form>
    </Box>
  );
};

export default UplaodTopicalQuestions;
