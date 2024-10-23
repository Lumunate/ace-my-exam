import React from 'react';

import { AdminContentBox } from '@/components/admin/Content.style';
import { AdminPageHeading } from '@/components/admin/Headings.style';

const page = () => {
  return (
    <>
      <AdminPageHeading>Dashboard</AdminPageHeading>
      <AdminContentBox>
        Dashboard
      </AdminContentBox>
    </>
  );
};

export default page;
