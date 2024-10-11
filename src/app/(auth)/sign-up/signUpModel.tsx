'use client';
import {
  AuthButton,
  AuthModalContainer,
  AuthModalContent,
  HeadingTypography,
  ParaTypography,
  StyledBackdrop,
  StyledLinkTwo,
  StyledTextField,
} from '../authModel.style';

interface SignUpModalProps {
  open: boolean;
  handleClose: () => void;
}

const SignUpModel: React.FC<SignUpModalProps> = ({ open, handleClose }) => {
  return (
    <AuthModalContainer
      open={open}
      onClose={handleClose}
      BackdropComponent={StyledBackdrop}
      disableScrollLock={false}
    >
      <AuthModalContent>
        <HeadingTypography variant='h6'>SIGNUP</HeadingTypography>
        <StyledTextField
          label='name*'
          variant='standard'
          fullWidth
          margin='normal'
        />
        <StyledTextField
          label='Email*'
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
        <StyledTextField
          label='Confirm Password'
          type='password'
          variant='standard'
          fullWidth
          margin='normal'
        />
        <AuthButton sx={{ mb: '12px' }}>SIGNUP</AuthButton>
        <ParaTypography variant='h6'>
          Already have an account?{' '}
          <StyledLinkTwo href={'#'}>Login</StyledLinkTwo>
        </ParaTypography>
      </AuthModalContent>
    </AuthModalContainer>
  );
};

export default SignUpModel;
