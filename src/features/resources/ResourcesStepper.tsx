'use client';

import { Box } from '@mui/material';
import React from 'react';

import useMultiStepForm from '@/hooks/useMultiStepper';

import AgeGroup from './resources-steps/AgeGroup';
import ExaminationBoardAndSubject from './resources-steps/EaxminationBoardAndSubject';
import EducationalResources from './resources-steps/EducationalResources';
import SubejctSubtypeAndResourceType from './resources-steps/SubejctSubtypeAndResourceType';
import StepNavigation from './StepNavigation';

const ResourcesForm: React.FC = () => {
  const { currentStep } = useMultiStepForm();

  const renderStepContent = () => {
    if (currentStep === 1) {
      return <EducationalResources />;
    } else if (currentStep === 1.5) {
      return <AgeGroup />;
    } else if (currentStep === 2) {
      return <ExaminationBoardAndSubject />;
    } else if (currentStep === 3) {
      return <SubejctSubtypeAndResourceType />;
    } else {
      return null;
    }
  };

  return (
    <Box>
      {renderStepContent()}
      <StepNavigation />
    </Box>
  );
};

export default ResourcesForm;
