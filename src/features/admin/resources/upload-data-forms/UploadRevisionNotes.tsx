import { IRevisionNoteData, revisionNoteSchema } from "@/types/revision-note";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Paper, styled, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import FileUpload from "../FileUpload";


const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});
interface UploadRevisionNotesProps {
  subtopicId: number;
}

const UploadRevisionNotes = ({ subtopicId }: UploadRevisionNotesProps) => {

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger
  } = useForm<IRevisionNoteData>({
    resolver: zodResolver(revisionNoteSchema),
    defaultValues: {
      title: '',
      subtopicId: subtopicId,
      noteUrl: ''
    }
  });

  const onSubmitForm = (data: IRevisionNoteData) => {
    console.log('Form submitted:', data);
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
            render={({ field }) => (
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

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Submit
          </Button>
        </FormContainer>
      </form>
    </Box>
  );
};

export default UploadRevisionNotes;