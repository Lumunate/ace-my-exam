import { Breadcrumbs } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import useMultiStepForm from '@/hooks/useMultiStepper';

import { BreadcrumbsHeading } from './ResourcesSteps.style';

const ResourcesBreadcrumbs: React.FC = () => {
  const { selectedOptions } = useMultiStepForm();
  const [breadcrumbs, setBreadcrumbs] = useState<
    { key: number; title: string }[]
  >([]);

  useEffect(() => {
    const stepsOrder = [
      { key: 1, title: selectedOptions.educationalResources?.name || '' },
      { key: 1.5, title: selectedOptions.agreGroup?.name || '' },
      { key: 2, title: selectedOptions.examBoard?.name || '' },
      { key: 2.5, title: selectedOptions.subject?.name || '' },
      { key: 3, title: selectedOptions.subjectSubtype?.name || '' },
      { key: 3.5, title: selectedOptions.resourceType?.name || '' },
    ];

    const filteredSteps = stepsOrder.filter((step) => step.title);

    setBreadcrumbs(filteredSteps);
  }, [selectedOptions]);

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={
        <Image
          src={'/icons/right-arrow.svg'}
          alt={'icon'}
          width={9}
          height={9}
          style={{ transform: 'translateY(20%)' }}
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
