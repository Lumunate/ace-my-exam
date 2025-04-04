'use client';

import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import {
  ResourcesHeading,
} from '../../app/(main)/resources/Resources.style';
import SectionHeading from '../../components/section-heading/SectionHeading';
import ResourcesBreadcrumbs from '../../features/resources/ResourcesBreadcrumbs';
import useMultiStepForm from '../../hooks/useMultiStepper';

const ResourcesLayout: React.FC<{ permanentBreadcrumbs?: { key: number; title: string }[], permanentHeading?: string, children: React.ReactNode }> = ({
  permanentBreadcrumbs,
  permanentHeading,
  children,
}) => {
  const { currentStep, selectedOptions } = useMultiStepForm();

  const [dynamicHeading, setDynamicHeading] = useState<string>('');

  useEffect(() => {
    let heading = '';

    if (currentStep === 1) {
      heading = 'Educational Resources';
    } else if (currentStep === 1.5) {
      heading = 'Age Group';
    } else if (currentStep === 2) {
      heading = selectedOptions.educationalResources?.name;
    } else if (currentStep === 3) {
      heading = selectedOptions.subject?.name;
    }
    setDynamicHeading(permanentHeading || heading);
  }, [currentStep]);

  return (
    <Box>
      <Box>
        <SectionHeading
          text="Start Practicing"
          align="center"
          showLeftLine={true}
          color="#DA9694"
          textWidth="150px"
          gradientType="second"
        />

        <ResourcesHeading variant="h2">
          {dynamicHeading}
        </ResourcesHeading>
      </Box>

      <Box
        sx={{
          margin: '4.2rem 0 2.4rem',
          display: { xs: 'none', sm: 'flex' },
          alignItems: 'center',
        }}
      >
        <ResourcesBreadcrumbs permanentBreadcrumbs={permanentBreadcrumbs} />
      </Box>

      {children}
    </Box>
  );
};

export default ResourcesLayout;
