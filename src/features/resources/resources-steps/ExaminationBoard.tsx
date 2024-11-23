'use client';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import React from 'react';

import { useGetExamBoards } from '../../../hooks/resources/useReferenceData';
import useMultiStepForm from '../../../hooks/useMultiStepper';
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

      <Grid container spacing={'20px'} columns={{
        sm: 6,
        md: 12,
      }}>
        {boardOptions.map((board) => (
          <Grid
            size={{
              xs: 12,
              sm: 6,
            }}
            key={board.value}
          >
            <ResourcesCardSmall
              onClick={() => selectOption('examBoard', board)}
              sx={{
                outline: selectedExaminationBoard?.value === board.value ? '2px solid #DA9694' : 'unset',
              }}
            >
              <Image src={board.icon} alt={board.name ?? ''} width={82} height={22} /> 
            </ResourcesCardSmall>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExaminationBoard;
