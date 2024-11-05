'use client';

import React from 'react';

import { MultiStepProvider } from '@/contexts/MultiStepContext';
import StepComponent from '@/features/resources/StepComponent';

const Resources: React.FC = () => {
  return (
    <MultiStepProvider>
      <StepComponent />
    </MultiStepProvider>
  );
};

export default Resources;
