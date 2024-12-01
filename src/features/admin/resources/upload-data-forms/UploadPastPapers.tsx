import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, styled, Typography } from '@mui/material';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { PastPaperWithResource } from 'app/api/resources/route';

import { useSnackbar } from '../../../../contexts/SnackbarContext';
import { useUploadPastPapers } from '../../../../hooks/resources/useUploadResources';
import { IPastPaperData, pastPaperSchema } from '../../../../types/past-paper';
import FileUpload, { DropZoneLabel } from '../FileUpload';

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});

interface UploadPastPapersProps {
  subjectId: number;
  selectedPastPaper: PastPaperWithResource;
  setSelectedPastPaper: React.Dispatch<React.SetStateAction<PastPaperWithResource | undefined>>;
}

const UploadPastPapers = ({ subjectId, selectedPastPaper }: UploadPastPapersProps) => {
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
      subjectId: selectedPastPaper?.subject_id ?? subjectId,
      title: selectedPastPaper.title,
      year: selectedPastPaper.year,
      resources: {
        questionPaper: '',
        markingScheme: '',
        solutionBooklet: '',
      },
    },
  });
  
  const [isReset, setIsReset] = useState(false);
  const handleReset = () => {
    reset();
    setIsReset(true);
    // Reset the flag after a short delay to allow future uploads
    setTimeout(() => setIsReset(false), 100);
  };

  const { mutate: submitForm, isLoading } = useUploadPastPapers();
  const onSubmitForm: SubmitHandler<IPastPaperData> = async (data: IPastPaperData) => {
    submitForm(data, {
      onSuccess: () => {
        showSnackbar('Form submitted successfully!');
        handleReset();
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
            name="resources.questionPaper"
            control={control}
            render={() => (
              <Box>
                <DropZoneLabel htmlFor="resources.questionPaper">Upload Question Paper:</DropZoneLabel>
                <FileUpload
                  hoist={(file: string) => {
                    setValue('resources.questionPaper', file);
                    trigger('resources.questionPaper');
                  }}
                  maxFileSize={5 * 1024 * 1024}
                  maxFiles={3}
                  reset={isReset}
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
                <DropZoneLabel htmlFor="resources.markingScheme">Upload Marking Scheme:</DropZoneLabel>
                <FileUpload
                  hoist={(file: string) => {
                    setValue('resources.markingScheme', file);
                  }}
                  maxFileSize={5 * 1024 * 1024}
                  maxFiles={3}
                  reset={isReset}
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
                <DropZoneLabel htmlFor="resources.solutionBooklet">Upload Solution Booklet:</DropZoneLabel>
                <FileUpload
                  hoist={(file: string) => {
                    setValue('resources.solutionBooklet', file);
                    trigger('resources.solutionBooklet');
                  }}
                  maxFileSize={5 * 1024 * 1024}
                  maxFiles={3}
                  reset={isReset}
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
