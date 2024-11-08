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
  const { mainTitle, subTitle, subHeadingPara, currentStep } =
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
        <ResourcesHeading variant="h2">{mainTitle}</ResourcesHeading>
        {currentStep === 1 && (
          <ResourcesPara variant="body1" sx={{ mb: '23px' }}>
            {subHeadingPara}
          </ResourcesPara>
        )}
      </Box>

      <Box
        sx={{
          mt: '30px',
          display: { xs: 'none', sm: 'flex' },
          alignItems: 'center',
        }}
      >
        <ResourcesBreadcrumbs />
      </Box>
      <Box sx={{ my: { xs: '20px', sm: '30px' } }}>
        <ResourcesSubHeading>{subTitle}</ResourcesSubHeading>
        <ResourcesPara variant="body1" sx={{ textAlign: 'start' }}>
          {subHeadingPara}
        </ResourcesPara>
      </Box>
      {children}
    </Box>
  );
};

export default ResourcesLayout;
