'use client';

import React from 'react';

import { AppContentWrapper } from '@/components/common/Global.style';
import Layout from '@/features/resources/ResourcesLayout';
import ResourcesForm from '@/features/resources/ResourcesStepper';

import { ResourcesContainer, Resourceswrapper } from './Resources.style';

const Resources: React.FC = () => {
  return (
    <Resourceswrapper>
      <AppContentWrapper>
        <ResourcesContainer>
          <Layout>
            <ResourcesForm />
          </Layout>
        </ResourcesContainer>
      </AppContentWrapper>
    </Resourceswrapper>
  );
};

export default Resources;
