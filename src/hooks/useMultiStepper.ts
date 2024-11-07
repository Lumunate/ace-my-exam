// src/hooks/useMultiStepForm.ts

import { useContext } from 'react';

import { MultiStepFormContext } from '@/contexts/MultiStepperContext';

const useMultiStepForm = () => {
  const context = useContext(MultiStepFormContext);

  if (!context) {
    throw new Error('useMultiStepForm must be used within MultiStepFormProvider');
  }

  return context;
};

export default useMultiStepForm;
