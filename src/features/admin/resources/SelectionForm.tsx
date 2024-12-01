'use client';
import { Box } from '@mui/material';
import { Content } from '@prisma/client';
import React, { useState } from 'react';

import { PastPaperWithResource } from 'app/api/resources/route';

import ResourceSelectionForm from './ResourceSelectionForm';
import { ResourceType } from '../../../types/resources';
import { AdminSectionInnerSpacer } from '../Admin.style';
import AddResourceForm from './AddResourceForm';
import ContentSelectionForm from './ContentSelectionForm';

const SelectionForm = () => {
  const [selectedSubjectSubtype, setSelectedSubjectSubtype] = useState('');
  const [selectedResourceType, setSelectedResourceType] = useState('');
  const [selectedSubtopic, setSelectedSubtopic] = useState<Content | undefined>();
  const [selectedPastPaper, setSelectedPastPaper] = useState<PastPaperWithResource | undefined>(); 

  return (
    <Box>
      <ResourceSelectionForm
        H_selectedSubjectSubtype={selectedSubjectSubtype}
        H_setSelectedSubjectSubtype={setSelectedSubjectSubtype}
        H_selectedResourceType={selectedResourceType}
        H_setSelectedResourceType={setSelectedResourceType}
        onSubmit={() => {}}
      />

      {selectedResourceType && (
        <>
          <AdminSectionInnerSpacer />

          <ContentSelectionForm
            selectedSubtopic={selectedSubtopic}
            setSelectedSubtopic={setSelectedSubtopic}
            selectedPastPaper={selectedPastPaper}
            setSelectedPastPaper={setSelectedPastPaper}
            subject={selectedSubjectSubtype}
            resourceType={selectedResourceType as ResourceType}
          />

          {(!!selectedSubtopic || !!selectedPastPaper) && (
            <>
              <AdminSectionInnerSpacer />

              <AddResourceForm
                selectedPastPaper={selectedPastPaper}
                setSelectedPastPaper={setSelectedPastPaper}
                selectedSubtopic={selectedSubtopic}
                selectedSubjectSubtype={selectedSubjectSubtype}
                selectedResourceType={selectedResourceType as ResourceType}
              />
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default SelectionForm;
