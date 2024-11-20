import { Box } from "@mui/material";
import React from "react";

import type { Content } from "@/entities";

import { AdminSectionHeading, AdminSectionSubHeading } from "../Admin.style";
import FileUpload from "./FileUpload";
import UploadRevisionNotes from "./upload-data-forms/UploadRevisionNotes";
import { ResourceType } from "@/types/resources";
import UplaodTopicalQuestions from "./upload-data-forms/UploadTopicalQuestions";

interface AddResourceFormProps {
  selectedSubtopic: Content | undefined;
  selectedResourceType: string;
  selectedSubjectSubtype: string;
}

const AddResourceForm: React.FC<AddResourceFormProps> = ({ selectedSubtopic, selectedResourceType }) => {
  if (!selectedSubtopic || !selectedResourceType) return null;

  return (
    <Box>
      <AdminSectionHeading>{selectedSubtopic?.name}</AdminSectionHeading>
      <AdminSectionSubHeading>
        {selectedResourceType.replace("_", " ")} for {selectedSubtopic?.name}
      </AdminSectionSubHeading>

      {selectedResourceType === ResourceType.REVISION_NOTES && (
        <UploadRevisionNotes subtopicId={selectedSubtopic.id} />
      )}

      {selectedResourceType === ResourceType.TOPIC_QUESTIONS && (
        <UplaodTopicalQuestions subtopicId={selectedSubtopic.id} />
      )}

      {selectedResourceType === ResourceType.PAST_PAPER && (
        <UploadRevisionNotes subtopicId={selectedSubtopic.id} />
      )}

    </Box>
  );
};

export default AddResourceForm;

