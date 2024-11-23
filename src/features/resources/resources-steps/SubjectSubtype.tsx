'use client';

import Grid from '@mui/material/Grid2';
import React, { useEffect } from 'react';

import {  ResourcesCardSmall } from '../ResourcesSteps.style';
import {  StepsLoader } from './StepsLoader';
import { ResourcesCardTypography } from '../../../app/(main)/resources/Resources.style';
import { IStepOption } from '../../../contexts/MultiStepperContext';
import { useGetSubjects } from '../../../hooks/resources/useReferenceData';
import useMultiStepForm from '../../../hooks/useMultiStepper';
import { EducationLevel, Subjects } from '../../../types/resources';

const SubjectSubtype: React.FC = () => {
  const { selectOption, selectedOptions } = useMultiStepForm();
  const educationLevel = selectedOptions.educationalResources;
  const examBoard = selectedOptions.examBoard;
  const subject = selectedOptions.subject;

  const { data: subjectOptions, isLoading, refetch } = useGetSubjects(educationLevel?.value, examBoard?.value, subject?.value);

  useEffect(() => {
    refetch();
  }, [educationLevel, examBoard, subject]);

  const selectedSubject = selectedOptions.subjectSubtype;

  if (isLoading || !subjectOptions) return <StepsLoader />;

  if (educationLevel.value === EducationLevel.A_LEVEL && subject.value === Subjects.MATH) {
    return (
      <Year1Year2Subjects subjectOptions={subjectOptions} selectedSubjectSubtype={selectedSubject} selectOption={selectOption} />
    );
  }

  return <SimpleSubjects subjectOptions={subjectOptions} selectedSubjectSubtype={selectedSubject} selectOption={selectOption} />;
};

export default SubjectSubtype;

const Year1Year2Subjects = ({
  subjectOptions,
  selectedSubjectSubtype,
  selectOption,
}: {
  subjectOptions: {
    id: number;
    subject: string;
    tags: string[];
  }[];
  selectedSubjectSubtype: IStepOption;
  selectOption: (stepName: string, option: IStepOption) => void;
}) => {
  const year1Subjects = subjectOptions.filter((s) => s.tags?.includes('YEAR_1')).map((s) => ({
    ...s, tags: s.tags?.filter((s) => {
      return s !== 'YEAR_1';
    })
  }));
  const year2Subjects = subjectOptions.filter((s) => s.tags?.includes('YEAR_2')).map((s) => ({
    ...s, tags: s.tags?.filter((s) => {
      return s !== 'YEAR_2';
    })
  }));

  return (
    <Grid
      container
      rowSpacing={'17px'} columnSpacing={'24px'}
      sx={{ mb: '40px' }}
      columns={12}
    >
      {
        year1Subjects.map((subject, index) => (
          <Grid
            size={{
              xs: 12,
              lg: 6,
            }}
            gridArea={`0/${index}`}
            key={subject.id}
          >
            <ResourcesCardSmall
              onClick={() => selectOption('subjectSubtype', { name: subject.subject, value: subject.id?.toString(), icon: '' })}
              sx={{
                outline: selectedSubjectSubtype?.value === subject.id?.toString() ? '1px solid #DA9694' : 'unset',
              }}
            >
              <ResourcesCardTypography variant="body1" sx={{ ml: '4px', }}>
                AS {subject.tags.join(' - ')}
              </ResourcesCardTypography>
            </ResourcesCardSmall>
          </Grid>
        ))
      }

      {
        year2Subjects.map((subject, index) => (
          <Grid
            size={{
              xs: 12,
              lg: 6,
            }}
            gridArea={`1/${index}`}
            key={subject.id}
          >
            <ResourcesCardSmall
              onClick={() => selectOption('subjectSubtype', { name: subject.subject, value: subject.id?.toString(), icon: '' })}
              sx={{
                outline: selectedSubjectSubtype?.value === subject.id?.toString() ? '1px solid #DA9694' : 'unset',
              }}
            >
              <ResourcesCardTypography variant="body1" sx={{ ml: '4px', }}>
                A Level {subject.tags.join(' - ')}
              </ResourcesCardTypography>
            </ResourcesCardSmall>
          </Grid>
        ))
      }
    </Grid >
  );
};

const SimpleSubjects = ({
  subjectOptions,
  selectedSubjectSubtype,
  selectOption,
}: {
  subjectOptions: {
    id: number;
    subject: string;
    tags: string[];
  }[];
  selectedSubjectSubtype: IStepOption;
  selectOption: (stepName: string, option: IStepOption) => void;
}) => {
  return (
    <Grid
      container
      spacing={'20px'}
      sx={{ mb: '40px' }}
      columns={12}
    >
      {subjectOptions.map((subject) => (
        <Grid
          size={{
            xs: 12,
            lg: 6,
          }}
          key={subject.id}
        >
          <ResourcesCardSmall
            onClick={() => selectOption('subjectSubtype', { name: subject.subject, value: subject.id?.toString(), icon: '' })}
            sx={{
              outline: selectedSubjectSubtype?.value === subject.id?.toString() ? '1px solid #DA9694' : 'unset',
            }}
          >
            <ResourcesCardTypography variant="body1" sx={{ ml: '4px', }}>
              {subject.tags?.join(' - ')}
            </ResourcesCardTypography>
          </ResourcesCardSmall>
        </Grid>
      ))}
    </Grid>
  );
};
