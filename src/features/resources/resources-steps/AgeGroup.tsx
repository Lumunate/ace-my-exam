'use client';

import Grid from '@mui/material/Grid2';
import React from 'react';

import useMultiStepForm from '@/hooks/useMultiStepper';

import { ResourcesCard, ResourcesCardTitle, ResourcesCardNumber } from '../ResourcesSteps.style';

const ageGroups = [
  { name: 'Primary School', age: '11+' },
  { name: 'Secondary School', age: '13+' },
  { name: 'Higher Secondary', age: '16+' },
  { name: 'Scholarship', age: '13+' },
];

const AgeGroup: React.FC = () => {
  const { selectOption, selectedOptions } = useMultiStepForm();
  const selectedAgeGroup = selectedOptions[1.5]; 

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
          key={group.name}
        >
          <ResourcesCard
            height={'245px'}
            onClick={() => selectOption(group.name)}
            sx={{
              outline: selectedAgeGroup === group.name ? '2px solid #DA9694' : 'unset',
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
