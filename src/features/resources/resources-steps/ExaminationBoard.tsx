'use client';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import React from 'react';

import { useGetExamBoards } from '@/hooks/resources/useReferenceData';
import useMultiStepForm from '@/hooks/useMultiStepper';

import {  ResourcesCardSmall } from '../ResourcesSteps.style';
import { StepsLoader } from './StepsLoader';

const ExaminationBoard: React.FC = () => {
  const { selectOption, selectedOptions } = useMultiStepForm();
  const selectedResource = selectedOptions.educationalResources;
  const selectedExaminationBoard = selectedOptions.examBoard;

  const { data: boardOptions, isLoading } = useGetExamBoards(selectedResource.value);

  if (isLoading || !boardOptions) return <StepsLoader />;

  return (
    <Box>

      <Grid container rowSpacing={'17px'} columnSpacing={'24px'} columns={12}>
        {boardOptions.map((board) => (
          <Grid
            size={{
              xs: 12,
              lg: 6,
            }}
            key={board.value}
          >
            <ResourcesCardSmall
              contentAlign={'center'}
              onClick={() => selectOption('examBoard', board)}
              sx={{
                outline: selectedExaminationBoard?.value === board.value ? '1px solid #DA9694' : 'unset',
              }}
            >
              <Box sx={{width: '80%', maxWidth: '108px', height: '30px'}}>
                <Image src={board.icon} alt={board.name ?? ''} width={0} height={0} sizes='100wv' style={{width: '100%', height: '100%', objectFit: 'contain' }} /> 
              </Box>
            </ResourcesCardSmall>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExaminationBoard;
