import { Box } from "@mui/material";
import React from "react";

import type { Content } from "@/entities";

import { AdminSectionHeading, AdminSectionSubHeading } from "../Admin.style";
import FileUpload from "./FileUpload";

interface AddResourceFormProps {
  selectedSubtopic: Content | undefined;
  selectedResourceType: string;
  selectedSubjectSubtype: string;
}

const AddResourceForm: React.FC<AddResourceFormProps> = ({ selectedSubtopic, selectedResourceType }) => {
  return (
    <Box>
      <AdminSectionHeading>{selectedSubtopic?.name}</AdminSectionHeading>
      <AdminSectionSubHeading>
        {selectedResourceType.replace("_", " ")} for {selectedSubtopic?.name}
      </AdminSectionSubHeading>

      <UploadDetailsRevisionNotes />
    </Box>
  );
};

export default AddResourceForm;

const UploadDetailsRevisionNotes = () => {
  return (
    <div>
      <FileUpload
        maxFileSize={5 * 1024 * 1024} // 5MB
        maxFiles={3}
      />
    </div>
  );
};
