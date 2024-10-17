import { useState } from 'react';

import LoginModal from '@/features/auth/login/LoginModal';
import SignUpModal from '@/features/auth/sign-up/SignUpModal';

const AuthModals: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
    setIsSignUpOpen(false); 
  };

  const handleOpenSignUp = () => {
    setIsSignUpOpen(true);
    setIsLoginOpen(false); 
  };

  const handleCloseModals = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
  };

  return (
    <>
      <LoginModal open={isLoginOpen} handleClose={handleCloseModals} onSwitchToSignUp={handleOpenSignUp} />
      <SignUpModal open={isSignUpOpen} handleClose={handleCloseModals} onSwitchToLogin={handleOpenLogin} />
    </>
  );
};

export default AuthModals;
