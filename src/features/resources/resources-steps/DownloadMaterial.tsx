'use client';

import React from 'react';

import useMultiStepForm from '@/hooks/useMultiStepper';

import PastPapersTable from '../resources-tables/PastPapersTable';
import RevisionNotesTable from '../resources-tables/RevisionNotesTable';
import TopicQuestionsTable from '../resources-tables/TopicQuestionsTable';

const DownloadMaterial: React.FC = () => {
  const { selectedOptions } = useMultiStepForm();
  const resourceType = selectedOptions[4];

  return (
    <div>
      {resourceType === 'Revision Notes' && <RevisionNotesTable />}
      {resourceType === 'Topic Questions' && <TopicQuestionsTable />}
      {resourceType === 'Past Papers' && <PastPapersTable />}
    </div>
  );
};

export default DownloadMaterial;
