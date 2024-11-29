'use client';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ReplayIcon from '@mui/icons-material/Replay';
import { AccordionSummary, Box, IconButton, styled, Typography } from '@mui/material';
import { Content, ContentLevel } from '@prisma/client';
import React, { useEffect, useState } from 'react';

import CreateContentForm from './CreateContentFormModal';
import EditContentFormModal from './EditContentFormModal';
import { CollapseContainer, InnerCollapse } from '../../../features/resources/resources-tables/ResourceTables.style';
import { useGetResources } from '../../../hooks/resources/useResources';
import { ContentWithChildren } from '../../../types/content';
import { ResourceType } from '../../../types/resources';
import { AdminSectionHeading, AdminSectionSubHeading } from '../Admin.style';

interface ContentSelectionFormProps {
  subject: string;
  resourceType: ResourceType;
  setSelectedSubtopic: React.Dispatch<React.SetStateAction<ContentWithChildren | undefined>>;
}

const ContentSelectionForm: React.FC<ContentSelectionFormProps> = ({ subject, resourceType, setSelectedSubtopic }) => {
  const { data, isLoading, refetch } = useGetResources(parseInt(subject));

  const [createContentOpen, setCreateContentOpen] = useState<boolean>(false);

  useEffect(() => {
    refetch();
  }, [subject, resourceType]);

  return (
    <Box sx={{ position: 'relative' }}>
      <AdminSectionHeading>Select Content</AdminSectionHeading>
      <AdminSectionSubHeading>Select the subtopics where you want to upload.</AdminSectionSubHeading>

      {!data || isLoading ? (
        <Box>Please make a selection to continue</Box>
      ) : (
        <>
          <Box sx={{ position: 'absolute', top: '-10px', right: '10px', zIndex: 10 }}>
            <IconButton onClick={() => refetch()}>
              <ReplayIcon />
            </IconButton>
            <IconButton onClick={() => setCreateContentOpen(true)}>
              <AddIcon />
            </IconButton>
          </Box>

          {data?.chapters?.map((child: ContentWithChildren) => (
            <RecursiveContentRender key={child.id} setSelectedSubtopic={setSelectedSubtopic} data={child} />
          ))}

          {createContentOpen && (
            <CreateContentForm
              open={createContentOpen}
              onClose={() => setCreateContentOpen(false)}
              subjectId={parseInt(subject)}
              parentId={null}
            />
          )}
        </>
      )}
    </Box>
  );
};

export default ContentSelectionForm;

type RecursiveContentRenderProps = {
  data: ContentWithChildren;
  setSelectedSubtopic: React.Dispatch<React.SetStateAction<Content | undefined>>;
};
const RecursiveContentRender = ({ data, setSelectedSubtopic }: RecursiveContentRenderProps) => {
  const [createContentOpen, setCreateContentOpen] = useState<boolean>(false);
  const [editContentOpen, setEditContentOpen] = useState<boolean>(false);

  if (data.level === ContentLevel.SUBTOPIC)
    return <ResourceItem onClick={() => setSelectedSubtopic(data)}>{data.name}</ResourceItem>;

  return (
    <>
      <CollapseContainer>
        <ResourceHeading>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {data.name}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', transform: 'translateY(-5px)', marginLeft: '2rem' }}>
            <IconButton onClick={() => setEditContentOpen(true)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => setCreateContentOpen(true)}>
              <AddIcon />
            </IconButton>
          </Box>
        </ResourceHeading>

        <InnerCollapse>
          {data.children?.map((child) => (
            <RecursiveContentRender key={child.id} data={child} setSelectedSubtopic={setSelectedSubtopic} />
          ))}
        </InnerCollapse>
      </CollapseContainer>

      {editContentOpen && (
        <EditContentFormModal
          open={editContentOpen}
          onClose={() => setEditContentOpen(false)}
          id={data.id}
          name={data.name}
          description={data.description ?? ''}
        />
      )}
      {createContentOpen && (
        <CreateContentForm
          open={createContentOpen}
          onClose={() => setCreateContentOpen(false)}
          subjectId={null}
          parentId={data.id}
        />
      )}
    </>
  );
};

export const ResourceHeading = styled(AccordionSummary)(() => ({
  color: '#000',
  fontSize: '1.4rem',
  fontWeight: 600,
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
}));

export const ResourceItem = styled(AccordionSummary)(({ theme }) => ({
  color: '#333',
  fontSize: '1.2rem',
  fontWeight: 400,
  border: 'none',
  ':hover': {
    color: theme.palette.text.secondary,
  },
}));
