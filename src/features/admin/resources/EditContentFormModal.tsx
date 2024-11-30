
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Button } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useEditContent } from '../../../hooks/resources/useReferenceData';
import { AdminModalHeading, AdminModalSubHeading } from '../Admin.style';

interface EditContentFormModalProps {
  open: boolean;
  onClose: () => void;
  id: number;
  name: string;
  description?: string;
}

export const editContentSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().optional(),
});

const EditContentFormModal: React.FC<EditContentFormModalProps> = ({
  open,
  onClose,
  id,
  name: initialName,
  description: initialDescription,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editContentSchema),
    defaultValues: {
      id,
      name: initialName,
      description: initialDescription,
    },
  });

  const { mutate: submitForm, isLoading } = useEditContent();
  const onSubmit = (data: z.infer<typeof editContentSchema>) => {
    submitForm(data);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <AdminModalHeading variant="h3">Edit Content - {initialName}</AdminModalHeading>
        <AdminModalSubHeading variant="h3">Edit content for content # {id}</AdminModalSubHeading>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField label="ID" value={id} fullWidth margin="normal" disabled />
          <TextField
            label="Name"
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ''}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            {...register('description')}
            error={!!errors.description}
            helperText={errors.description ? errors.description.message : ''}
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

export default EditContentFormModal;