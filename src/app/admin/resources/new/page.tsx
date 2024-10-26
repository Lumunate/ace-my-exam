import React from 'react';

import { AdminContentBox } from '@/components/admin/Content.style';
import { AdminContentHeading } from '@/components/admin/Headings.style';
import AddResourceForm from '@/features/resources/AddResourceForm';

const Page = () => {

  return (
    <AdminContentBox>
      <AdminContentHeading>Add New Resource</AdminContentHeading>
      <AddResourceForm />
    </AdminContentBox>
  );
};

export default Page; 