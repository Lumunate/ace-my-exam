import { Box } from '@mui/material';
import React from 'react';

import {
  AdminSectionHeading,
  AdminSectionsLayout,
  AdminSectionSubHeading,
  AdminSectionWrapper,
} from '../../../../features/admin/Admin.style';
import SelectionForm from '../../../../features/admin/resources/SelectionForm';

const Page = () => {
  return (
    <AdminSectionsLayout>
      <AdminSectionWrapper>
        <AdminSectionHeading>Resource Manager</AdminSectionHeading>
        <AdminSectionSubHeading>Make a selection to manage resources.</AdminSectionSubHeading>

        <Box>
          <SelectionForm />
        </Box>
      </AdminSectionWrapper>
    </AdminSectionsLayout>
  );
};

export default Page;
