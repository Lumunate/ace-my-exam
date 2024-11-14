'use client';

import React from 'react';

import ResourcesLayout from '@/app/(main)/resources/Layout';
import { AppContentWrapper } from '@/components/common/Global.style';
import ResourcesForm from '@/features/resources/ResourcesStepper';

import { ResourcesContainer, Resourceswrapper } from './Resources.style';

const Resources: React.FC = () => {
  return (
    <Resourceswrapper>
      <AppContentWrapper>
        <ResourcesContainer>
          <ResourcesLayout>
            <ResourcesForm />
          </ResourcesLayout>
        </ResourcesContainer>
      </AppContentWrapper>
    </Resourceswrapper>
  );
};

export default Resources;
