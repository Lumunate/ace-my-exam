'use client';

import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import useMultiStepForm from '@/hooks/useMultiStepper';

import { ResourcesCard, ResourcesCardSmall, ResourcesCardTitle } from '../ResourcesSteps.style';
import { useGetSubjects, useGetUniqueSubjects } from '@/hooks/resources/useReferenceData';

import { Subjects as SubjectTypes } from '@/types/resources';
import { Box, Typography } from '@mui/material';
import { StepsDisabled, StepsLoader } from './StepsLoader';
import { ResourcesCardTypography } from '@/app/(main)/resources/Resources.style';

interface SubjectOption {
  name: string;
  icon: string;
}


const Subject: React.FC = () => {
  const { selectOption, selectedOptions } = useMultiStepForm();
  const educationLevel = selectedOptions.educationalResources;
  const examBoard = selectedOptions.examBoard;

  if (!examBoard) return <StepsDisabled />

  const { data: subjectOptions, isLoading, refetch } = useGetUniqueSubjects(educationLevel.value, examBoard.value);
  useEffect(() => {
    refetch();
  }, [educationLevel, examBoard]);

  console.log(subjectOptions);

  const selectedSubject = selectedOptions.subject;
  if (isLoading || !subjectOptions) return <StepsLoader />;

  return (
    <Grid
      container
      spacing={'20px'}
      sx={{ mb: '40px' }}
      columns={{
        sm: 6,
        md: 12,
      }}
    >
      {subjectOptions.map((subject) => (
        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
          key={subject.value}
        >
          <ResourcesCardSmall
            onClick={() => selectOption('subject', subject)}
            sx={{
              outline: selectedSubject?.value === subject.value ? '2px solid #DA9694' : 'unset',
            }}
          >
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Image
                src={subject.icon}
                alt={subject.name ?? ''}
                width={82}
                height={22}
              />

              <ResourcesCardTypography variant="body1" sx={{ ml: '1px', textWrap: 'nowrap' }}>
                {subject.name}
              </ResourcesCardTypography>
            </Box>
          </ResourcesCardSmall>
        </Grid>
      ))}
    </Grid>
  );
};

export default Subject;
