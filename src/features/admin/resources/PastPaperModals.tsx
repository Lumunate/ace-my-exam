
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Button } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import React from 'react';
import {  useForm } from 'react-hook-form';

import { useUpdatePastPapers, useUploadPastPapers } from 'hooks/resources/usePastPaper';
import { IPastPaperData, IPastPaperUpdateData, pastPaperSchema, pastPaperUpdateSchema } from 'types/past-paper';

import { AdminModalHeading, AdminModalSubHeading } from '../Admin.style';

interface EditPastPaperFormModalProps {
  open: boolean;
  onClose: () => void;
  id: number;
  title: string;
  year: number;
  subjectId: number;
}

export const EditPastPaperFormModal: React.FC<EditPastPaperFormModalProps> = ({
  open,
  onClose,
  id,
  title: initialTitle,
  year: initialYear,
  subjectId,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(pastPaperUpdateSchema),
    defaultValues: {
      title: initialTitle,
      subjectId: subjectId,
      year: initialYear,
      pastPaperId: id,
    },
  });

  const { mutate: submitForm, isLoading } = useUpdatePastPapers();
  const onSubmit = (data: IPastPaperUpdateData) => {
    submitForm(data);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <AdminModalHeading variant="h3">Edit PastPaper - {initialTitle}</AdminModalHeading>
        <AdminModalSubHeading variant="h3">Edit PastPaper for PastPaper # {id}</AdminModalSubHeading>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField label="ID" value={id} fullWidth margin="normal" disabled />
          <TextField label="Subject ID" value={subjectId} fullWidth margin="normal" disabled />

          <TextField
            label="Name"
            {...register('title')}
            error={!!errors.title}
            helperText={errors.title ? errors.title.message : ''}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Year"
            {...register('year', { valueAsNumber: true })}
            type="number"
            error={!!errors.year}
            helperText={errors.year ? errors.year.message : ''}
            fullWidth
            margin="normal"
          />

          <DialogActions>
            <Button onClick={onClose} sx={{ mr: 1 }}>
              Cancel
            </Button>
            <Button disabled={isLoading} type="submit" variant="contained" color="primary">
              {isLoading ? 'Saving' : 'Save'}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

type CreatePastPaperFormProps = {
  open: boolean;
  onClose: () => void;
  subjectId: number;
};

export const CreatePastPaperForm: React.FC<CreatePastPaperFormProps> = ({
  open,
  onClose,
  subjectId,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPastPaperData>({
    resolver: zodResolver(pastPaperSchema),
    defaultValues: {
      title: '',
      year: new Date().getFullYear(),
      subjectId: subjectId ?? undefined,
    },
  });

  const { mutate: submitForm, isLoading } = useUploadPastPapers();
  const onSubmit = async (data: IPastPaperData) => {
    await submitForm(data);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <AdminModalHeading variant="h3">Create Past Paper</AdminModalHeading>
        <AdminModalSubHeading variant="h3">Create Past Paper for subject # {subjectId}</AdminModalSubHeading>
      </DialogTitle>

      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField label="Subject ID" value={subjectId} fullWidth margin="normal" disabled />

          <TextField
            label="Name"
            {...register('title')}
            error={!!errors.title}
            helperText={errors.title ? errors.title.message : ''}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Year"
            {...register('year', { valueAsNumber: true })}
            type="number"
            error={!!errors.year}
            helperText={errors.year ? errors.year.message : ''}
            fullWidth
            margin="normal"
          />

          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
              {isLoading ? 'Wait...' : 'Submit'}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};
