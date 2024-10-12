'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Snackbar, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { useForm, FieldError, Merge, FieldErrorsImpl, SubmitHandler } from 'react-hook-form';

import { StyledTextField } from '@/components/form/Form.style';
import { loginSchema } from '@/features/auth/login/LoginSchema';

import {
  AuthButton,
  AuthModalContainer,
  AuthModalContent,
  AuthHeadingTypography,
  AuthParaTypography,
  AuthBackdrop,
  AuthStyledLinkOne,
  AuthStyledLinkTwo,
} from '../AuthModals.style';

interface LoginFormInputs {
  email: string;
  password: string;
}

const getErrorMessage = (
  error: FieldError | Merge<FieldError, FieldErrorsImpl<LoginFormInputs>> | undefined
): string | undefined => {
  return error?.message || undefined;
};

interface LoginModalProps {
  open: boolean;
  handleClose: () => void;
  onSwitchToSignUp: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, handleClose, onSwitchToSignUp }) => {
  const [loading, setLoading] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);

  const { register, reset, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSnackbarMessage('Login successful');
      reset();
      // eslint-disable-next-line no-console
      console.log('Form data:', data);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSnackbarMessage('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AuthModalContainer open={open} onClose={handleClose} BackdropComponent={AuthBackdrop}>
        <AuthModalContent>
          <AuthHeadingTypography variant="h6">Login</AuthHeadingTypography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledTextField
              label="Email"
              variant="standard"
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={getErrorMessage(errors.email)}
              {...register('email')}
            />
            <StyledTextField
              label="Password"
              type="password"
              variant="standard"
              fullWidth
              margin="normal"
              error={!!errors.password}
              helperText={getErrorMessage(errors.password)}
              {...register('password')}
            />
            <AuthStyledLinkOne href="#">Forgot Password?</AuthStyledLinkOne>
            <AuthButton type="submit" sx={{ mb: '12px' }}>
              {loading ? <CircularProgress size={20} /> : 'Login'}
            </AuthButton>
          </form>
          <AuthParaTypography variant="h6">
            Don’t have an account?{' '}
            <AuthStyledLinkTwo href="#" onClick={onSwitchToSignUp}>
              Sign Up
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

export default LoginModal;
