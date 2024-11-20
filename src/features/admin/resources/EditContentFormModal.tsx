
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import React from "react";
import { TextField, Button } from "@mui/material";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useEditContent } from "@/hooks/resources/useReferenceData";
import { IEditContent } from "@/types/content";

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
      <DialogTitle>Edit Content</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField label="ID" value={id} fullWidth margin="normal" disabled />
          <TextField
            label="Name"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ""}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description ? errors.description.message : ""}
            fullWidth
            margin="normal"
          />
          <DialogActions>
            <Button onClick={onClose} sx={{ mr: 1 }}>
              Cancel
            </Button>
            <Button disabled={isLoading} type="submit" variant="contained" color="primary">
              {isLoading ? "Saving" : 'Save'}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditContentFormModal;