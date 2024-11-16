'use client';

import { Box } from '@mui/material';
import React from 'react';

import useMultiStepForm from '@/hooks/useMultiStepper';

import AgeGroup from './resources-steps/AgeGroup';
import DownloadMaterial from './resources-steps/DownloadMaterial';
import EducationalResources from './resources-steps/EducationalResources';
import ExaminationBoard from './resources-steps/ExaminationBoard';
import ResourceType from './resources-steps/ResourceType';
import Subject from './resources-steps/Subject';
import StepNavigation from './StepNavigation';
import ExaminationBoardAndSubject from './resources-steps/EaxminationBoardAndSubject';
import SubejctSubtypeAndResourceType from './resources-steps/SubejctSubtypeAndResourceType';

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
    } else if (currentStep === 4) {
      return <ResourceType />;
    } else if (currentStep === 5) {
      return <DownloadMaterial />;
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
