import { Breadcrumbs } from '@mui/material';
import Image from 'next/image';
import React, { useEffect } from 'react';

import { BreadcrumbsHeading } from './ResourcesSteps.style';
import useMultiStepForm from '../../hooks/useMultiStepper';

const ResourcesBreadcrumbs: React.FC<{ permanentBreadcrumbs?: { key: number; title: string }[] }> = ({ permanentBreadcrumbs }) => {
  const { currentStep, breadcrumbs, setBreadcrumbs, selectedOptions } = useMultiStepForm();

  useEffect(() => {
    const stepsOrder = [
      { key: 1, title: selectedOptions.educationalResources?.name || '' },
      { key: 1.5, title: selectedOptions.ageGroup?.name || '' },
      { key: 2, title: selectedOptions.examBoard?.name || '' },
      { key: 2.5, title: selectedOptions.subject?.name || '' },
      { key: 3, title: selectedOptions.subjectSubtype?.name || '' },
      { key: 3.5, title: selectedOptions.resourceType?.name || '' },
    ];

    console.log(currentStep, stepsOrder);

    const filteredSteps = stepsOrder.filter((step) => (currentStep + 0.5) >= step.key && step.title);

    setBreadcrumbs(permanentBreadcrumbs || filteredSteps);
  }, [selectedOptions, currentStep]);

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={
        <Image
          src={'/icons/right-arrow.svg'}
          alt={'icon'}
          width={9}
          height={9}
          style={{ transform: 'translateY(1px)' }}
        />
      }
    >
      <BreadcrumbsHeading key={'Resources'} variant="body2">
        Resources
      </BreadcrumbsHeading>
      {breadcrumbs.map((step, index) => (
        <BreadcrumbsHeading key={index} variant="body2">
          {step.title}
        </BreadcrumbsHeading>
      ))}
    </Breadcrumbs>
  );
};

export default ResourcesBreadcrumbs;
