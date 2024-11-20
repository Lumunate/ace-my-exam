"use client";
import ReplayIcon from "@mui/icons-material/Replay";
import { AccordionSummary, Box, IconButton, styled, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import type { Content } from "@/entities";
import { CollapseContainer, InnerCollapse } from "@/features/resources/resources-tables/ResourceTables.style";
import { useGetResources } from "@/hooks/resources/useResources";
import { ResourceType } from "@/types/resources";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import CreateContentForm from "./CreateContentFormModal";

interface ContentSelectionFormProps {
  subject: string;
  resourceType: ResourceType;
  setSelectedSubtopic: React.Dispatch<React.SetStateAction<Content | undefined>>;
}

const ContentSelectionForm: React.FC<ContentSelectionFormProps> = ({ subject, resourceType, setSelectedSubtopic }) => {
  const { data, isLoading, refetch } = useGetResources(parseInt(subject));

  const [createContentOpen, setCreateContentOpen] = useState<boolean>(false);
  const [editContentOpen, setEditContentOpen] = useState<boolean>(false);

  useEffect(() => {
    refetch();
  }, [subject, resourceType]);

  if (!data || isLoading) return <div>Loading...</div>;

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ position: "absolute", top: "-10px", right: "10px", zIndex: 10 }}>
        <IconButton onClick={() => refetch()}>
          <ReplayIcon />
        </IconButton>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => setCreateContentOpen(true)}>
          <AddIcon />
        </IconButton>
      </Box>
      {data.chapters?.map((child) => (
        <RecursiveContentRender key={child.id} setSelectedSubtopic={setSelectedSubtopic} data={child} />
      ))}


      {editContentOpen && <div>Edit Content</div>}
      {createContentOpen && <CreateContentForm open={createContentOpen} onClose={() => setCreateContentOpen(false)} subjectId={parseInt(subject)} parentId={null} />}
    </Box>
  );
};

export default ContentSelectionForm;

type RecursiveContentRenderProps = {
  data: Content;
  setSelectedSubtopic: React.Dispatch<React.SetStateAction<Content | undefined>>;
};
const RecursiveContentRender = ({ data, setSelectedSubtopic }: RecursiveContentRenderProps) => {
  const [createContentOpen, setCreateContentOpen] = useState<boolean>(false);
  const [editContentOpen, setEditContentOpen] = useState<boolean>(false);

  if (data.level === 3) return <ResourceItem onClick={() => setSelectedSubtopic(data)}>{data.name}</ResourceItem>;

  return (
    <>
      <CollapseContainer>
        <ResourceHeading>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {data.name}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", transform: "translateY(-5px)", marginLeft: "2rem" }}>
            <IconButton>
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

      {editContentOpen && <div>Edit Content</div>}
      {createContentOpen && <CreateContentForm open={createContentOpen} onClose={() => setCreateContentOpen(false)} subjectId={null} parentId={data.id} />}
    </>
  );
};

export const ResourceHeading = styled(AccordionSummary)(() => ({
  color: "#000",
  fontSize: "1.4rem",
  fontWeight: 600,
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
}));

export const ResourceItem = styled(AccordionSummary)(({ theme }) => ({
  color: "#333",
  fontSize: "1.2rem",
  fontWeight: 400,
  border: "none",
  ":hover": {
    color: theme.palette.text.secondary,
  },
}));
