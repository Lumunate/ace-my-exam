import { useState } from 'react';

import LoginModal from '@/features/(auth)/login/loginModal';
import SignUpModal from '@/features/(auth)/sign-up/signUpModal';

const AuthModals: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  // Open the login modal and close signup if open
  const handleOpenLogin = () => {
    setIsLoginOpen(true);
    setIsSignUpOpen(false); // Ensure SignUp is closed
  };

  // Open the signup modal and close login if open
  const handleOpenSignUp = () => {
    setIsSignUpOpen(true);
    setIsLoginOpen(false); // Ensure Login is closed
  };

  // Close both modals
  const handleCloseModals = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
  };

  return (
    <>
      {/* Render the LoginModal and pass the necessary props */}
      <LoginModal open={isLoginOpen} handleClose={handleCloseModals} onSwitchToSignUp={handleOpenSignUp} />
      
      {/* Render the SignUpModal and pass the necessary props */}
      <SignUpModal open={isSignUpOpen} handleClose={handleCloseModals} onSwitchToLogin={handleOpenLogin} />
    </>
  );
};

export default AuthModals;
