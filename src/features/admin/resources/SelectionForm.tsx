'use client';
import { Box } from '@mui/material';
import { Content } from '@prisma/client';
import React, { useState } from 'react';

import { ResourceType } from '@/types/resources';

import ResourceSelectionForm from './ResourceSelectionForm';
import { AdminSectionInnerSpacer } from '../Admin.style';
import AddResourceForm from './AddResourceForm';
import ContentSelectionForm from './ContentSelectionForm';

const SelectionForm = () => {
  const [selectedSubjectSubtype, setSelectedSubjectSubtype] = useState('');
  const [selectedResourceType, setSelectedResourceType] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_selectedSubtopic, setSelectedSubtopic] = useState<Content | undefined>();

  return (
    <Box>
      <ResourceSelectionForm
        H_selectedSubjectSubtype={selectedSubjectSubtype}
        H_setSelectedSubjectSubtype={setSelectedSubjectSubtype}
        H_selectedResourceType={selectedResourceType}
        H_setSelectedResourceType={setSelectedResourceType}
        onSubmit={() => { }}
      />
      <AdminSectionInnerSpacer />

      <ContentSelectionForm setSelectedSubtopic={setSelectedSubtopic} subject={selectedSubjectSubtype} resourceType={selectedResourceType as ResourceType} />

      <AdminSectionInnerSpacer />

      <AddResourceForm selectedSubtopic={_selectedSubtopic} selectedSubjectSubtype={selectedSubjectSubtype} selectedResourceType={selectedResourceType as ResourceType} />
    </Box>
  );
};

export default SelectionForm;
