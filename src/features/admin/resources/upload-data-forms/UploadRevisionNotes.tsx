import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, styled, TextField, Typography } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { useSnackbar } from '../../../../contexts/SnackbarContext';
import { useUploadRevisionNotes } from '../../../../hooks/resources/useUploadResources';
import { IRevisionNoteData, revisionNoteSchema } from '../../../../types/revision-note';
import FileUpload from '../FileUpload';

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});

interface UploadRevisionNotesProps {
  subtopicId: number;
}

const UploadRevisionNotes = ({ subtopicId }: UploadRevisionNotesProps) => {
  const { showSnackbar } = useSnackbar();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    reset,
  } = useForm<IRevisionNoteData>({
    resolver: zodResolver(revisionNoteSchema),
    defaultValues: {
      title: '',
      subtopicId: subtopicId,
      noteUrl: '',
    },
  });

  const { mutate: submitForm, isLoading } = useUploadRevisionNotes();
  const onSubmitForm: SubmitHandler<IRevisionNoteData> = async (data: IRevisionNoteData) => {
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
            name="noteUrl"
            control={control}
            render={() => (
              <Box>
                <label htmlFor="noteUrl">Upload file:</label>
                <FileUpload
                  hoist={(file: string) => {
                    setValue('noteUrl', file);
                    trigger('noteUrl');
                  }}
                  maxFileSize={5 * 1024 * 1024}
                  maxFiles={3}
                />
                {errors.noteUrl && (
                  <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                    {errors.noteUrl.message}
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

export default UploadRevisionNotes;
