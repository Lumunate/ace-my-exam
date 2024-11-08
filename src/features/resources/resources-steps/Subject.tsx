'use client';

import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import useMultiStepForm from '@/hooks/useMultiStepper';

import { ResourcesCard, ResourcesCardTitle } from '../ResourcesSteps.style';

interface SubjectOption {
  name: string;
  icon: string;
}

const subjectsData: Record<string, SubjectOption[]> = {
  DefaultSubjects: [
    { name: 'Maths', icon: '/resources/math.svg' },
    { name: 'Chemistry', icon: '/resources/chemistry.svg' },
    { name: 'Physics', icon: '/resources/Physics.svg' },
    { name: 'Biology', icon: '/resources/Physics.svg' },
    { name: 'Further Maths', icon: '/resources/Furthermaths.svg' },
  ],
  School: [
    { name: 'Maths', icon: '/resources/math.svg' },
    { name: 'Chemistry', icon: '/resources/chemistry.svg' },
    { name: 'Physics', icon: '/resources/Physics.svg' },
    { name: 'Biology', icon: '/resources/Physics.svg' },
    { name: 'Science', icon: '/resources/Science.svg' },
  ],
};

const Subject: React.FC = () => {
  const { selectOption, selectedOptions } = useMultiStepForm();
  const [subjectOptions, setSubjectOptions] = useState<SubjectOption[]>([]);
  const selectedSubject = selectedOptions[3];

  useEffect(() => {
    const selectedResource = selectedOptions[1];
    const selectedBoard = selectedOptions[2];
    const isEntranceExam = selectedResource === 'Entrance Exam';

    // Use "School" subjects for Entrance Exam or "DefaultSubjects" for other cases
    const subjects = isEntranceExam
      ? subjectsData['School']
      : subjectsData[selectedBoard] || subjectsData['DefaultSubjects'];

    setSubjectOptions(subjects);
  }, [selectedOptions]);

  return (
    <Grid
      container
      spacing={'22px'}
      sx={{ mb: '40px' }}
      justifyContent={'center'}
      columns={20}
    >
      {subjectOptions.map((subject) => (
        <Grid
          size={{
            xs: 20,
            sm: 10,
            md: 6,
            lg: 4,
          }}
          key={subject.name}
        >
          <ResourcesCard
            height={'245px'}
            onClick={() => selectOption(subject.name)}
            sx={{
              outline: selectedSubject === subject.name ? '2px solid #DA9694' : 'unset',
            }}
          >
            <Image src={subject.icon} alt={subject.name} width={67} height={45} />
            <ResourcesCardTitle variant="h6">
              {subject.name}
            </ResourcesCardTitle>
          </ResourcesCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default Subject;
