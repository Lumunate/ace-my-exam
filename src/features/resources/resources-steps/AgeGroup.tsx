'use client';

import Grid from '@mui/material/Grid2';
import React from 'react';

import { IStepOption } from '@/contexts/MultiStepperContext';
import useMultiStepForm from '@/hooks/useMultiStepper';
import { AgeGroups } from '@/types/resources';

import { ResourcesCard, ResourcesCardTitle, ResourcesCardNumber } from '../ResourcesSteps.style';

type IAgeGroupOptions = IStepOption & { age: string };

const ageGroups: IAgeGroupOptions[] = [
  { name: 'Primary School', age: '11+', icon: '', value: AgeGroups.PRIMARY_SCHOOL },
  { name: 'Secondary School', age: '13+', icon: '', value: AgeGroups.SECONDARY_SCHOOL },
  { name: 'Higher Secondary', age: '16+', icon: '', value: AgeGroups.HIGHER_SECONDARY },
  { name: 'Scholarship', age: '13+', icon: '', value: AgeGroups.SCHOLARSHIP },
];

const AgeGroup: React.FC = () => {
  const { selectOption, selectedOptions } = useMultiStepForm();
  const selectedAgeGroup = selectedOptions.ageGroup; 

  return (
    <Grid
      container
      spacing={'22px'}
      sx={{ mb: '40px' }}
      justifyContent={'center'}
      columns={20}
    >
      {ageGroups.map((group) => (
        <Grid
          size={{
            xs: 20,
            sm: 10,
            md: 6,
            lg: 4,
          }}
          key={group.value}
        >
          <ResourcesCard
            height={'245px'}
            onClick={() => selectOption('ageGroup', group)}
            sx={{
              outline: selectedAgeGroup?.value === group.value ? '2px solid #DA9694' : 'unset',
            }}
          >
            <ResourcesCardNumber variant="subtitle1">{group.age}</ResourcesCardNumber>
            <ResourcesCardTitle variant="h6">{group.name}</ResourcesCardTitle>
          </ResourcesCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default AgeGroup;
