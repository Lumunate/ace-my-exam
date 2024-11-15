'use client';

import { Box } from '@mui/material';

import SectionHeading from '@/components/section-heading/SectionHeading';
import ResourcesBreadcrumbs from '@/features/resources/ResourcesBreadcrumbs';
import useMultiStepForm from '@/hooks/useMultiStepper';

import {
  ResourcesHeading,
  ResourcesPara,
  ResourcesSubHeading,
} from './Resources.style';

const ResourcesLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {

  const { currentStep } =
    useMultiStepForm();

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
          {currentStep === 1 ? 'Educational Resources' : 'Hello world'}
        </ResourcesHeading>
      </Box>

      <Box
        sx={{
          margin: '6.9rem 0',
          display: { xs: 'none', sm: 'flex' },
          alignItems: 'center',
        }}
      >
        <ResourcesBreadcrumbs />
      </Box>

      {children}
    </Box>
  );
};

export default ResourcesLayout;
