import { Box } from '@mui/material';
import React from 'react';

import type { Content } from '@/entities';

import { AdminSectionHeading, AdminSectionSubHeading } from '../Admin.style';

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
        Add {selectedResourceType} for {selectedSubtopic?.name}
      </AdminSectionSubHeading>
    </Box>
  );
};

export default AddResourceForm;
