'use client';

import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import React, { useEffect } from 'react';

import { ResourcesCardSmall } from '../ResourcesSteps.style';
import { StepsLoader } from './StepsLoader';
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
  const year1Subjects = subjectOptions
    .filter((s) => s.tags?.includes('YEAR_1'))
    .map((s) => ({
      ...s,
      tags: s.tags?.filter((s) => {
        return s !== 'YEAR_1';
      }),
    }));
  const year2Subjects = subjectOptions
    .filter((s) => s.tags?.includes('YEAR_2'))
    .map((s) => ({
      ...s,
      tags: s.tags?.filter((s) => {
        return s !== 'YEAR_2';
      }),
    }));

  const getTagIcon = (tags: string[]) => {
    if (tags.some((tag) => tag.includes('Pure'))) return '/resources/math.svg';
    if (tags.some((tag) => tag.includes('Statistics'))) return '/resources/Physics.svg';
    if (tags.some((tag) => tag.includes('Mechanics'))) return '/resources/chemistry.svg';

    return '/resources/Science.svg';
  };

  return (
    <Grid container rowSpacing={'17px'} columnSpacing={'24px'} sx={{ mb: '40px' }} columns={12}>
      <Grid
        container
        rowSpacing={'17px'}
        columnSpacing={'24px'}
        sx={{ mb: '40px' }}
        columns={6}
        size={{
          xs: 12,
          lg: 6,
        }}
      >
        {year1Subjects.map((subject) => (
          <Grid
            key={subject.id}
            size={{
              xs: 12,
              lg: 6,
            }}
          >
            <ResourcesCardSmall
              onClick={() =>
                selectOption('subjectSubtype', {
                  name: `AS ${subject.tags.join(' - ')}`,
                  value: subject.id?.toString(),
                  icon: '',
                })
              }
              sx={{
                outline: selectedSubjectSubtype?.value === subject.id?.toString() ? '1px solid #DA9694' : 'unset',
              }}
            >
              <Image src={getTagIcon(subject.tags)} alt={subject.tags?.join(' - ')} width={15} height={15} />
              <ResourcesCardTypography variant="body1" sx={{ ml: '4px' }}>
                AS {subject.tags.join(' - ')}
              </ResourcesCardTypography>
            </ResourcesCardSmall>
          </Grid>
        ))}
      </Grid>

      <Grid
        container
        rowSpacing={'17px'}
        columnSpacing={'24px'}
        sx={{ mb: '40px' }}
        columns={6}
        size={{
          xs: 12,
          lg: 6,
        }}
      >
        {year2Subjects.map((subject) => (
          <Grid
            key={subject.id}
            size={{
              xs: 12,
              lg: 6,
            }}
          >
            <ResourcesCardSmall
              onClick={() =>
                selectOption('subjectSubtype', {
                  name: `A Level ${subject.tags.join(' - ')}`,
                  value: subject.id?.toString(),
                  icon: '',
                })
              }
              sx={{
                outline: selectedSubjectSubtype?.value === subject.id?.toString() ? '1px solid #DA9694' : 'unset',
              }}
            >
              <Image src={getTagIcon(subject.tags)} alt={subject.tags?.join(' - ')} width={15} height={15} />
              <ResourcesCardTypography variant="body1" sx={{ ml: '4px' }}>
                A Level {subject.tags.join(' - ')}
              </ResourcesCardTypography>
            </ResourcesCardSmall>
          </Grid>
        ))}
      </Grid>
    </Grid>
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
  const getTagIcon = (tags: string[]) => {
    if (tags.some((tag) => tag.includes('Core'))) return '/resources/core-icon.svg';
    if (tags.some((tag) => tag.includes('Extended'))) return '/resources/extended-icon.svg';
    if (tags.some((tag) => tag.includes('Higher'))) return '/resources/core-icon.svg';
    if (tags.some((tag) => tag.includes('Foundation'))) return '/resources/extended-icon.svg';

    return '/resources/core-icon.svg';
  };

  return (
    <Grid container spacing={'20px'} sx={{ mb: '40px' }} columns={12}>
      {subjectOptions.map((subject) => (
        <Grid
          size={{
            xs: 12,
            lg: 6,
          }}
          key={subject.id}
        >
          <ResourcesCardSmall
            onClick={() =>
              selectOption('subjectSubtype', { name: subject.tags?.join(' - '), value: subject.id?.toString(), icon: '' })
            }
            sx={{
              outline: selectedSubjectSubtype?.value === subject.id?.toString() ? '1px solid #DA9694' : 'unset',
            }}
          >
            <Image src={getTagIcon(subject.tags)} alt={subject.tags?.join(' - ')} width={15} height={15} />
            <ResourcesCardTypography variant="body1" sx={{ ml: '4px' }}>
              {subject.tags?.join(' - ')}
            </ResourcesCardTypography>
          </ResourcesCardSmall>
        </Grid>
      ))}
    </Grid>
  );
};
