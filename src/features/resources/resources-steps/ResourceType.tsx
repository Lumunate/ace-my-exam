'use client';

import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import React from 'react';

import useMultiStepForm from '@/hooks/useMultiStepper';

import { ResourcesCard, ResourcesCardTitle } from '../ResourcesSteps.style';

const resourceTypes = [
  { name: 'Revision Notes', icon: '/resources/RevisionNotesImg.svg' },
  { name: 'Topic Questions', icon: '/resources/TopicQuestionsImg.svg' },
  { name: 'Past Papers', icon: '/resources/PastPapersImg.svg' },
];

const ResourceType: React.FC = () => {
  const { selectOption, selectedOptions } = useMultiStepForm();
  const selectedResourceType = selectedOptions[4];
  
  return (
    <Grid
      container
      spacing={'22px'}
      sx={{ mb: '40px' }}
      justifyContent={'center'}
      columns={20}
    >
      {resourceTypes.map((option) => (
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
            onClick={() => selectOption(option.name)}
            sx={{
              outline: selectedResourceType === option.name ? '2px solid #DA9694' : 'unset',
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

export default ResourceType;
