
import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';

import { useAddContent } from '@/hooks/resources/useReferenceData';
import { createContentSchema } from '@/types/content';

type CreateContentFormProps = {
  open: boolean;
  onClose: () => void;
};

const CreateContentForm: React.FC<CreateContentFormProps & { subjectId: number | null; parentId: number | null }> = ({ open, onClose, subjectId, parentId }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<z.infer<typeof createContentSchema>>({
    resolver: zodResolver(createContentSchema),
    defaultValues: {
      name: '',
      description: '',
      subjectId: subjectId ?? undefined,
      parentId: parentId ?? undefined,
    },
  });

  const { mutate: submitForm, isLoading } = useAddContent();
  const onSubmit = async (data: z.infer<typeof createContentSchema>) => {
    await submitForm(data);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle variant='h3'>Create Content</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                fullWidth
                margin="normal"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
          <Controller
            name="subjectId"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Subject ID"
                type="number"
                fullWidth
                margin="normal"
                error={!!errors.subjectId}
                helperText={errors.subjectId?.message}
                disabled
              />
            )}
          />
          <Controller
            name="parentId"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Parent ID"
                type="number"
                fullWidth
                margin="normal"
                error={!!errors.parentId}
                helperText={errors.parentId?.message}
                disabled
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Description"
                fullWidth
                margin="normal"
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            )}
          />
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary" disabled={isLoading}>{isLoading ? 'Wait...' : 'Submit'}</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateContentForm;