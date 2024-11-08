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
      { key: 1, title: selectedOptions[1] || '' },
      { key: 1.5, title: selectedOptions[1.5] || '' },
      { key: 2, title: selectedOptions[2] || '' },
      { key: 3, title: selectedOptions[3] || '' },
      { key: 4, title: selectedOptions[4] || '' },
      { key: 5, title: selectedOptions[5] || '' },
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
