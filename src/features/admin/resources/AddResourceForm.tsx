import { Box } from '@mui/material';
import { Content } from '@prisma/client';
import React from 'react';

import { ResourceType } from '../../../types/resources';
import { AdminSectionHeading, AdminSectionSubHeading } from '../Admin.style';
import UploadPastPapers from './upload-data-forms/UploadPastPapers';
import UploadRevisionNotes from './upload-data-forms/UploadRevisionNotes';
import UplaodTopicalQuestions from './upload-data-forms/UploadTopicalQuestions';

interface AddResourceFormProps {
  selectedSubtopic: Content | undefined;
  selectedResourceType: string;
  selectedSubjectSubtype: string;
}

const AddResourceForm: React.FC<AddResourceFormProps> = ({ selectedSubtopic, selectedResourceType, selectedSubjectSubtype }) => {
  if (selectedResourceType === ResourceType.PAST_PAPER)
    return (
      <Box>
        <AdminSectionHeading>Upload - Past Paper</AdminSectionHeading>
        <AdminSectionSubHeading>Upload Past Papers.</AdminSectionSubHeading>

        <UploadPastPapers subjectId={parseInt(selectedSubjectSubtype)} />
      </Box>
    );
  if (!selectedSubtopic || !selectedResourceType) return null;

  return (
    <Box>
      <AdminSectionHeading>Upload - {selectedResourceType === ResourceType.REVISION_NOTES ? 'Revision Notes' : 'Topic Questions'}</AdminSectionHeading>
      <AdminSectionSubHeading>
        Upload {selectedResourceType === ResourceType.REVISION_NOTES ? 'Revision Notes' : 'Topic Questions'} for {selectedSubtopic?.name}
      </AdminSectionSubHeading>

      {selectedResourceType === ResourceType.REVISION_NOTES && <UploadRevisionNotes subtopicId={selectedSubtopic.id} />}

      {selectedResourceType === ResourceType.TOPIC_QUESTIONS && <UplaodTopicalQuestions subtopicId={selectedSubtopic.id} />}
    </Box>
  );
};

export default AddResourceForm;
