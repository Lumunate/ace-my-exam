import { Box } from '@mui/material';
import { Content } from '@prisma/client';
import React from 'react';

import { PastPaperWithResource } from 'app/api/resources/route';

import { ResourceType } from '../../../types/resources';
import { AdminCenteredSectionHeading, AdminSectionHeading, AdminSectionSubHeading } from '../Admin.style';
import UploadPastPapers from './upload-data-forms/UploadPastPapers';
import UploadRevisionNotes from './upload-data-forms/UploadRevisionNotes';
import UplaodTopicalQuestions from './upload-data-forms/UploadTopicalQuestions';

interface AddResourceFormProps {
  selectedSubtopic: Content | undefined;
  selectedResourceType: string;
  selectedSubjectSubtype: string;
  selectedPastPaper: PastPaperWithResource | undefined;
  setSelectedPastPaper: React.Dispatch<React.SetStateAction<PastPaperWithResource | undefined>>;
}

const AddResourceForm: React.FC<AddResourceFormProps> = ({
  selectedSubtopic,
  selectedResourceType,
  selectedSubjectSubtype,
  selectedPastPaper,
  setSelectedPastPaper,
}) => {
  return (
    <Box>
      {selectedResourceType === ResourceType.PAST_PAPER && selectedPastPaper && (
        <Box>
          <AdminCenteredSectionHeading>{selectedPastPaper.year} - {selectedPastPaper.title}</AdminCenteredSectionHeading>
          <AdminSectionHeading>Upload - Past Paper</AdminSectionHeading>
          <AdminSectionSubHeading>Upload Past Papers.</AdminSectionSubHeading>
          <UploadPastPapers
            selectedPastPaper={selectedPastPaper}
            setSelectedPastPaper={setSelectedPastPaper}
            subjectId={parseInt(selectedSubjectSubtype)}
          />
        </Box>
      )}

      {(selectedResourceType === ResourceType.REVISION_NOTES || selectedResourceType === ResourceType.TOPIC_QUESTIONS) &&
        selectedSubtopic && (
        <Box>
          <AdminCenteredSectionHeading>{selectedSubtopic.name}</AdminCenteredSectionHeading>

          <AdminSectionHeading>
            Upload - {selectedResourceType === ResourceType.REVISION_NOTES ? 'Revision Notes' : 'Topic Questions'}
          </AdminSectionHeading>

          <AdminSectionSubHeading>
            Upload {selectedResourceType === ResourceType.REVISION_NOTES ? 'Revision Notes' : 'Topic Questions'} for{' '}
            {selectedSubtopic?.name}
          </AdminSectionSubHeading>

          {selectedResourceType === ResourceType.REVISION_NOTES && <UploadRevisionNotes subtopicId={selectedSubtopic.id} />}

          {selectedResourceType === ResourceType.TOPIC_QUESTIONS && <UplaodTopicalQuestions subtopicId={selectedSubtopic.id} />}
        </Box>
      )}
    </Box>
  );
};

export default AddResourceForm;
