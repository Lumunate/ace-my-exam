import { Box } from "@mui/material";
import React from "react";

import type { Content } from "@/entities";
import { ResourceType } from "@/types/resources";

import { AdminSectionHeading, AdminSectionSubHeading } from "../Admin.style";
import UploadPastPapers from "./upload-data-forms/UploadPastPapers";
import UploadRevisionNotes from "./upload-data-forms/UploadRevisionNotes";
import UplaodTopicalQuestions from "./upload-data-forms/UploadTopicalQuestions";

interface AddResourceFormProps {
  selectedSubtopic: Content | undefined;
  selectedResourceType: string;
  selectedSubjectSubtype: string;
}

const AddResourceForm: React.FC<AddResourceFormProps> = ({ selectedSubtopic, selectedResourceType }) => {
  if (selectedResourceType === ResourceType.PAST_PAPER)
    return (
      <Box>
        <AdminSectionHeading>Upload - Past Paper</AdminSectionHeading>
        <AdminSectionSubHeading>Upload Past Papers.</AdminSectionSubHeading>

        <UploadPastPapers />
      </Box>
    );
  if (!selectedSubtopic || !selectedResourceType) return null;

  return (
    <Box>
      <AdminSectionHeading>Upload - {selectedSubtopic?.name}</AdminSectionHeading>
      <AdminSectionSubHeading>
        {selectedResourceType.replace("_", " ")} for {selectedSubtopic?.name}
      </AdminSectionSubHeading>

      {selectedResourceType === ResourceType.REVISION_NOTES && <UploadRevisionNotes subtopicId={selectedSubtopic.id} />}

      {selectedResourceType === ResourceType.TOPIC_QUESTIONS && <UplaodTopicalQuestions subtopicId={selectedSubtopic.id} />}
    </Box>
  );
};

export default AddResourceForm;
