'use client';

import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import React from 'react';

import useMultiStepForm from '@/hooks/useMultiStepper';

import { ResourcesCard, ResourcesCardTitle } from '../ResourcesSteps.style';
import { EducationLevel } from '@/types/resources';

const options = [
  { name: 'A levels', icon: '/resources/ALevels.svg', value: EducationLevel.A_LEVEL },
  { name: 'GCSE', icon: '/resources/GCSE.svg', value: EducationLevel.GCSE },
  { name: 'IGCSE', icon: '/resources/IGCSE.svg', value: EducationLevel.IGCSE },
  { name: 'KS3', icon: '/resources/KS3.svg', value: EducationLevel.KS3 },
  { name: 'Entrance Exam', icon: '/resources/EntranceExam.svg', value: EducationLevel.ENTRANCE_EXAMS },
];

const EducationalResources: React.FC = () => {
  const { selectOption, selectedOptions } = useMultiStepForm();
  const selectedResource = selectedOptions[1]; 

  return (
    <Grid
      container
      spacing={'22px'}
      sx={{ mb: '40px' }}
      justifyContent={'center'}
      columns={20}
    >
      {options.map((option) => (
        <Grid
          size={{
            xs: 20,
            sm: 10,
            md: 6,
            lg: 4,
          }}
          key={option.name}
        >
          <ResourcesCard
            height={'245px'}
            onClick={() => selectOption(option.value)}
            sx={{
              outline: selectedResource === option.name ? '2px solid #DA9694' : 'unset',
            }}
          >
            <Image
              src={option.icon}
              alt={option.name}
              width={67}
              height={45}
            />
            <ResourcesCardTitle variant="h6">
              {option.name}
            </ResourcesCardTitle>
          </ResourcesCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default EducationalResources;
