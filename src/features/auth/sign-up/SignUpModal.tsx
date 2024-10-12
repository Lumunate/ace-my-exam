'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Snackbar, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { useForm, FieldError, Merge, FieldErrorsImpl, SubmitHandler } from 'react-hook-form';

import { StyledTextField } from '@/components/form/Form.style';
import { signUpSchema } from '@/features/auth/sign-up/SignUpSchema';

import {
  AuthButton,
  AuthModalContainer,
  AuthModalContent,
  AuthHeadingTypography,
  AuthParaTypography,
  AuthBackdrop,
  AuthStyledLinkTwo,
} from '../AuthModals.style';

interface SignUpFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const getErrorMessage = (
  error: FieldError | Merge<FieldError, FieldErrorsImpl<SignUpFormInputs>> | undefined
): string | undefined => {
  return error?.message || undefined;
};

interface SignUpModalProps {
  open: boolean;
  handleClose: () => void;
  onSwitchToLogin: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ open, handleClose, onSwitchToLogin }) => {
  const [loading, setLoading] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);

  const { register, reset, handleSubmit, formState: { errors } } = useForm<SignUpFormInputs>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSnackbarMessage('Sign-up successful');
      reset();
      // eslint-disable-next-line no-console
      console.log('Form data:', data);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSnackbarMessage('Sign-up failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AuthModalContainer open={open} onClose={handleClose} BackdropComponent={AuthBackdrop}>
        <AuthModalContent>
          <AuthHeadingTypography variant="h6">SIGNUP</AuthHeadingTypography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledTextField
              label="Name*"
              variant="standard"
              fullWidth
              margin="normal"
              error={!!errors.name}
              helperText={getErrorMessage(errors.name)}
              {...register('name')}
            />
            <StyledTextField
              label="Email*"
              variant="standard"
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={getErrorMessage(errors.email)}
              {...register('email')}
            />
            <StyledTextField
              label="Password*"
              type="password"
              variant="standard"
              fullWidth
              margin="normal"
              error={!!errors.password}
              helperText={getErrorMessage(errors.password)}
              {...register('password')}
            />
            <StyledTextField
              label="Confirm Password*"
              type="password"
              variant="standard"
              fullWidth
              margin="normal"
              error={!!errors.confirmPassword}
              helperText={getErrorMessage(errors.confirmPassword)}
              {...register('confirmPassword')}
            />
            <AuthButton type="submit" sx={{ mb: '12px' }}>
              {loading ? <CircularProgress size={20} /> : 'SIGNUP'}
            </AuthButton>
          </form>
          <AuthParaTypography variant="h6">
            Already have an account?{' '}
            <AuthStyledLinkTwo href="#" onClick={onSwitchToLogin}>
              Login
            </AuthStyledLinkTwo>
          </AuthParaTypography>
        </AuthModalContent>
      </AuthModalContainer>

      {snackbarMessage && (
        <Snackbar
          open={!!snackbarMessage}
          onClose={() => setSnackbarMessage(null)}
          message={snackbarMessage}
          autoHideDuration={3000}
        />
      )}
    </>
  );
};

export default SignUpModal;
