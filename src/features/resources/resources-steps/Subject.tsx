'use client';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import React, { useEffect } from 'react';

import { ResourcesCardSmall } from '../ResourcesSteps.style';
import { StepsDisabled, StepsLoader } from './StepsLoader';
import { ResourcesCardTypography } from '../../../app/(main)/resources/Resources.style';
import { useGetUniqueSubjects } from '../../../hooks/resources/useReferenceData';
import useMultiStepForm from '../../../hooks/useMultiStepper';

const Subject: React.FC = () => {
  const { selectOption, selectedOptions } = useMultiStepForm();
  const educationLevel = selectedOptions.educationalResources;
  const examBoard = selectedOptions.examBoard;

  const { data: subjectOptions, isLoading, refetch } = useGetUniqueSubjects(educationLevel?.value, examBoard?.value);

  useEffect(() => {
    refetch();
  }, [educationLevel, examBoard]);

  if (!examBoard) return <StepsDisabled />;

  const selectedSubject = selectedOptions.subject;

  if (isLoading || !subjectOptions) return <StepsLoader />;

  return (
    <Grid
      container
      rowSpacing={'17px'} columnSpacing={'24px'}
      sx={{ mb: '40px' }}
      columns={12}
    >
      {subjectOptions.map((subject) => (
        <Grid
          size={{
            xs: 12,
            lg: 6,
          }}
          key={subject.value}
        >
          <ResourcesCardSmall
            contentAlign={'start'}
            onClick={() => selectOption('subject', subject)}
            sx={{
              outline: selectedSubject?.value === subject.value ? '1px solid #DA9694' : 'unset',
            }}
          >
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <Image
                src={subject.icon}
                alt={subject.name ?? ''}
                width={16}
                height={16}
              />

              <ResourcesCardTypography variant="body1" sx={{ ml: '4px', textWrap: 'nowrap' }}>
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
