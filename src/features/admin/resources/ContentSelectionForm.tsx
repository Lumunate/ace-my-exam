'use client';
import ReplayIcon from '@mui/icons-material/Replay';
import { AccordionSummary, Box, IconButton, styled } from '@mui/material';
import React, { useEffect } from 'react';

import type { Content } from '@/entities';
import { CollapseContainer, InnerCollapse } from '@/features/resources/resources-tables/ResourceTables.style';
import { useGetResources } from '@/hooks/resources/useResources';
import { ResourceType } from '@/types/resources';

interface ContentSelectionFormProps {
  subject: string;
  resourceType: ResourceType;
  setSelectedSubtopic: React.Dispatch<React.SetStateAction<Content | undefined>>;
}

const ContentSelectionForm: React.FC<ContentSelectionFormProps> = ({ subject, resourceType, setSelectedSubtopic }) => {
  const { data, isLoading, refetch } = useGetResources(parseInt(subject));

  useEffect(() => {
    refetch();
  }, [subject, resourceType]);

  if (!data || isLoading) return <div>Loading...</div>;

  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ position: 'absolute', top: '-10px', right: '10px', zIndex: 10 }}>
        <IconButton onClick={() => refetch()}>
          <ReplayIcon />
        </IconButton>
      </Box>
      {data.chapters?.map((child) => <RecursiveContentRender key={child.id} setSelectedSubtopic={setSelectedSubtopic} data={child} />)}
    </Box>
  );
};

export default ContentSelectionForm;

type RecursiveContentRenderProps = {
  data: Content;
  setSelectedSubtopic: React.Dispatch<React.SetStateAction<Content | undefined>>;
};
const RecursiveContentRender = ({ data, setSelectedSubtopic }: RecursiveContentRenderProps) => {
  if (data.level === 3) return <ResourceItem onClick={() => setSelectedSubtopic(data)}>{data.name}</ResourceItem>;

  return (
    <CollapseContainer>
      <ResourceHeading>{data.name}</ResourceHeading>

      <InnerCollapse>
        {data.children?.map((child) => <RecursiveContentRender key={child.id} data={child} setSelectedSubtopic={setSelectedSubtopic} />)}
      </InnerCollapse>
    </CollapseContainer>
  );
};

export const ResourceHeading = styled(AccordionSummary)(() => ({
  color: '#000',
  fontSize: '1.4rem',
  fontWeight: 600,
  border: 'none',
}));

export const ResourceItem = styled(AccordionSummary)(({ theme }) => ({
  color: '#333',
  fontSize: '1.2rem',
  fontWeight: 400,
  border: 'none',
  ':hover': {
    color: theme.palette.text.secondary,
  }
}));
