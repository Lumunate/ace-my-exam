'use client';
import {
  AuthButton,
  AuthModalContainer,
  AuthModalContent,
  HeadingTypography,
  ParaTypography,
  StyledBackdrop,
  StyledLinkOne,
  StyledLinkTwo,
  StyledTextField,
} from '../authModel.style';

interface LoginModalProps {
  open: boolean;
  handleClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, handleClose }) => {
  return (
    <AuthModalContainer
      open={open}
      onClose={handleClose}
      BackdropComponent={StyledBackdrop}
      disableScrollLock={false}
    >
      <AuthModalContent>
        <HeadingTypography variant='h6'>Login</HeadingTypography>
        <StyledTextField
          label='Email'
          variant='standard'
          fullWidth
          margin='normal'
        />
        <StyledTextField
          label='Password'
          type='password'
          variant='standard'
          fullWidth
          margin='normal'
        />
        <StyledLinkOne href={'#'}>Forgot Password?</StyledLinkOne>
        <AuthButton sx={{ mb: '12px' }}>Login</AuthButton>
        <ParaTypography variant='h6'>
          Don’t have an account?{' '}
          <StyledLinkTwo href={'#'}>Sign Up</StyledLinkTwo>
        </ParaTypography>
      </AuthModalContent>
    </AuthModalContainer>
  );
};

export default LoginModal;
