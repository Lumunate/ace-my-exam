import { Box } from "@mui/material";
import React from "react";
import { AdminSectionHeading, AdminSectionSubHeading } from "../Admin.style";
import type { Content } from "@/entities";

interface AddResourceFormProps {
  selectedSubtopic: Content | undefined;
  selectedResourceType: string;
  selectedSubjectSubtype: string;
}

const AddResourceForm: React.FC<AddResourceFormProps> = ({ selectedSubtopic, selectedResourceType, selectedSubjectSubtype }) => {
  return (
    <Box>
      <AdminSectionHeading>{selectedSubtopic?.name}</AdminSectionHeading>
      <AdminSectionSubHeading>
        Add {selectedResourceType} for {selectedSubtopic?.name}
      </AdminSectionSubHeading>
    </Box>
  );
};

export default AddResourceForm;
