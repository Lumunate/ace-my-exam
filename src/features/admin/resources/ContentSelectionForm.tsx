"use client";

import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditIcon from "@mui/icons-material/Edit";
import ReplayIcon from "@mui/icons-material/Replay";
import { AccordionSummary, Box, IconButton, styled, Typography } from "@mui/material";
import {
  Content,
  ContentLevel,
  PastPaperResourceType,
  RevisionNoteResourceType,
  TopicalQuestionResourceType,
} from "@prisma/client";
import React, { useEffect, useState } from "react";

import CreateContentForm from "./CreateContentFormModal";
import EditContentFormModal from "./EditContentFormModal";
import {
  CollapseContainer,
  DownloadIconButton,
  InnerCollapse,
} from "../../../features/resources/resources-tables/ResourceTables.style";
import { useGetResources } from "../../../hooks/resources/useResources";
import { ContentWithChildren } from "../../../types/content";
import { ResourceType } from "../../../types/resources";
import { AdminModalHeading, AdminModalSubHeading, AdminSectionHeading, AdminSectionSubHeading } from "../Admin.style";
import Image from "next/image";
import { PastPaperWithResource } from "app/api/resources/route";

const handleDownload = (fileName: string) => {
  const fileUrl = fileName;
  const link = document.createElement("a");

  link.href = fileUrl;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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

type RecursiveContentRenderProps = {
  type: ResourceType;
  data: ContentWithChildren;
  selectedSubtopic: ContentWithChildren | undefined;
  setSelectedSubtopic: React.Dispatch<React.SetStateAction<Content | undefined>>;
};
const RecursiveContentRender = ({ data, selectedSubtopic, setSelectedSubtopic, type }: RecursiveContentRenderProps) => {
  const [createContentOpen, setCreateContentOpen] = useState<boolean>(false);
  const [editContentOpen, setEditContentOpen] = useState<boolean>(false);

  const getRevisionNoteDownloadUrl = (data: ContentWithChildren, resourceType: RevisionNoteResourceType) => {
    if (data.revisionNotes && data.revisionNotes[0].resources)
      return data.revisionNotes[0].resources.find((resource) => resource.resource_type === resourceType)?.resource.url || "";

    return "";
  };

  const getTopicalQuestionDownloadUrl = (data: ContentWithChildren, resourceType: TopicalQuestionResourceType) => {
    if (data.topicalQuestions && data.topicalQuestions[0].resources)
      return data.topicalQuestions[0].resources.find((resource) => resource.resource_type === resourceType)?.resource.url || "";

    return "";
  };

  if (data.level === ContentLevel.SUBTOPIC) {
    if (type === ResourceType.REVISION_NOTES) {
      return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 0 }}>
          <ResourceItem
            sx={{
              color: selectedSubtopic?.id === data.id ? "secondary.main" : "",
              fontWeight: selectedSubtopic?.id === data.id ? "bold" : "",
            }}
            onClick={() => setSelectedSubtopic(data)}
          >
            {data.name}
          </ResourceItem>
          <DownloadIconButton onClick={() => handleDownload(getRevisionNoteDownloadUrl(data, RevisionNoteResourceType.NOTE))}>
            <Image src="/icons/downloadIcon.svg" alt="download" width={12} height={12} />
          </DownloadIconButton>
        </Box>
      );
    } else if (type === ResourceType.TOPIC_QUESTIONS) {
      return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 0 }}>
          <ResourceItem
            sx={{
              color: selectedSubtopic?.id === data.id ? "secondary.main" : "",
              fontWeight: selectedSubtopic?.id === data.id ? "bold" : "",
            }}
            onClick={() => setSelectedSubtopic(data)}
          >
            {data.name}
          </ResourceItem>
          <DownloadIconButton
            sx={{ flex: "0 0 1" }}
            onClick={() => handleDownload(getTopicalQuestionDownloadUrl(data, TopicalQuestionResourceType.QUESTION_PAPER))}
          >
            <Image src="/icons/downloadIcon.svg" alt="download" width={12} height={12} />
          </DownloadIconButton>
          <DownloadIconButton
            sx={{ flex: "0 0 1" }}
            onClick={() => handleDownload(getTopicalQuestionDownloadUrl(data, TopicalQuestionResourceType.MARKING_SCHEME))}
          >
            <Image src="/icons/downloadIcon.svg" alt="download" width={12} height={12} />
          </DownloadIconButton>
          <DownloadIconButton
            sx={{ flex: "0 0 1" }}
            // onClick={() => handleDownload(getTopicalQuestionDownloadUrl(data, TopicalQuestionResourceType.SOLUTION_BOOKLET))}
          >
            <Image src="/icons/downloadIcon.svg" alt="download" width={12} height={12} />
          </DownloadIconButton>
        </Box>
      );
    }
  }

  return (
    <>
      <CollapseContainer>
        <ResourceHeading expandIcon={<ArrowDropDownIcon />}>
          <Typography variant="h6">{data.name}</Typography>

          <Box sx={{ display: "flex", alignItems: "center", transform: "translateY(-5px)", marginLeft: "2rem" }}>
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
            <RecursiveContentRender
              type={type}
              key={child.id}
              data={child}
              selectedSubtopic={selectedSubtopic}
              setSelectedSubtopic={setSelectedSubtopic}
            />
          ))}
        </InnerCollapse>
      </CollapseContainer>

      {editContentOpen && (
        <EditContentFormModal
          open={editContentOpen}
          onClose={() => setEditContentOpen(false)}
          id={data.id}
          name={data.name}
          description={data.description ?? ""}
        />
      )}
      {createContentOpen && (
        <CreateContentForm open={createContentOpen} onClose={() => setCreateContentOpen(false)} subjectId={null} parent={data} />
      )}
    </>
  );
};

interface DataFormProps {
  data: ContentWithChildren[];
  selectedSubtopic: ContentWithChildren | undefined;
  setSelectedSubtopic: React.Dispatch<React.SetStateAction<ContentWithChildren | undefined>>;
}

const RevisionNotesSelectionForm: React.FC<DataFormProps> = ({ data, setSelectedSubtopic, selectedSubtopic }) => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 0 }}>
        <AdminModalHeading>Name</AdminModalHeading>
        <AdminModalHeading>Download</AdminModalHeading>
      </Box>

      {data?.map((child: ContentWithChildren) => (
        <RecursiveContentRender
          type={ResourceType.REVISION_NOTES}
          key={child.id}
          selectedSubtopic={selectedSubtopic}
          setSelectedSubtopic={setSelectedSubtopic}
          data={child}
        />
      ))}
    </>
  );
};

const TopicalQuestionsSelectionForm: React.FC<DataFormProps> = ({ data, setSelectedSubtopic, selectedSubtopic }) => {
  console.log(data);
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <AdminModalHeading sx={{ flex: "0 0 calc(50%)" }}>Name</AdminModalHeading>
        <AdminModalHeading sx={{ flex: "0 0 1", textAlign: "center" }}>Download</AdminModalHeading>
        <AdminModalHeading sx={{ flex: "0 0 1" }}>Marking Scheme</AdminModalHeading>
        <AdminModalHeading sx={{ flex: "0 0 1" }}>Answer</AdminModalHeading>
      </Box>

      {data?.map((child: ContentWithChildren) => (
        <RecursiveContentRender
          type={ResourceType.TOPIC_QUESTIONS}
          key={child.id}
          selectedSubtopic={selectedSubtopic}
          setSelectedSubtopic={setSelectedSubtopic}
          data={child}
        />
      ))}
    </>
  );
};

const PastPaperViewForm: React.FC<{ data: PastPaperWithResource[] }> = ({ data }) => {
  const getDownloadUrl = (data: PastPaperWithResource, resourceType: PastPaperResourceType) => {
    return data.resources.find((resource) => resource.resource_type === resourceType)?.resource.url || "";
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <AdminModalHeading sx={{ flex: "0 0 calc(50%)" }}>Exam</AdminModalHeading>
        <AdminModalSubHeading sx={{ flex: "0 0 1", textAlign: "center" }}>Download</AdminModalSubHeading>
        <AdminModalSubHeading sx={{ flex: "0 0 1" }}>Marking Scheme</AdminModalSubHeading>
        <AdminModalSubHeading sx={{ flex: "0 0 1" }}>Answer</AdminModalSubHeading>
      </Box>

      {data?.map((child: PastPaperWithResource) => (
        <>
          <Box
            key={child.id}
            sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: "4px", py: "2px" }}
          >
            <ResourceItem sx={{ flex: "0 0 calc(50%)" }}>{child.title}</ResourceItem>
            <DownloadIconButton
              sx={{ flex: "0 0 1" }}
              onClick={() => handleDownload(getDownloadUrl(child, PastPaperResourceType.QUESTION_PAPER))}
            >
              <Image src="/icons/downloadIcon.svg" alt="download" width={12} height={12} />
            </DownloadIconButton>
            <DownloadIconButton
              sx={{ flex: "0 0 1" }}
              onClick={() => handleDownload(getDownloadUrl(child, PastPaperResourceType.MARKING_SCHEME))}
            >
              <Image src="/icons/downloadIcon.svg" alt="download" width={12} height={12} />
            </DownloadIconButton>
            <DownloadIconButton
              sx={{ flex: "0 0 1" }}
              onClick={() => handleDownload(getDownloadUrl(child, PastPaperResourceType.SOLUTION_BOOKLET))}
            >
              <Image src="/icons/downloadIcon.svg" alt="download" width={12} height={12} />
            </DownloadIconButton>
          </Box>
        </>
      ))}
    </>
  );
};

interface ContentSelectionFormProps {
  subject: string;
  resourceType: ResourceType;
  selectedSubtopic: ContentWithChildren | undefined;
  setSelectedSubtopic: React.Dispatch<React.SetStateAction<ContentWithChildren | undefined>>;
}

const ContentSelectionForm: React.FC<ContentSelectionFormProps> = ({
  subject,
  resourceType,
  setSelectedSubtopic,
  selectedSubtopic,
}) => {
  const { data, isLoading, refetch } = useGetResources(parseInt(subject));

  const [createContentOpen, setCreateContentOpen] = useState<boolean>(false);

  useEffect(() => {
    refetch();
  }, [subject, resourceType]);

  if (!resourceType) return null;

  return (
    <Box sx={{ position: "relative" }}>
      <AdminSectionHeading>Select Content</AdminSectionHeading>
      <AdminSectionSubHeading>Select, Add and Edit the Chapter, Topic and Subtopic for your resources.</AdminSectionSubHeading>

      {!data || isLoading ? (
        <Box>Please make a selection to continue</Box>
      ) : (
        <>
          <Box sx={{ position: "absolute", top: "-10px", right: "10px", zIndex: 10 }}>
            <IconButton onClick={() => refetch()}>
              <ReplayIcon />
            </IconButton>
            <IconButton onClick={() => setCreateContentOpen(true)}>
              <AddIcon />
            </IconButton>
          </Box>

          {createContentOpen && (
            <CreateContentForm
              open={createContentOpen}
              onClose={() => setCreateContentOpen(false)}
              subjectId={parseInt(subject)}
              parent={null}
            />
          )}

          {resourceType === ResourceType.REVISION_NOTES && (
            <RevisionNotesSelectionForm
              data={data.chapters as ContentWithChildren[]}
              setSelectedSubtopic={setSelectedSubtopic}
              selectedSubtopic={selectedSubtopic}
            />
          )}

          {resourceType === ResourceType.TOPIC_QUESTIONS && (
            <TopicalQuestionsSelectionForm
              data={data.topics as ContentWithChildren[]}
              setSelectedSubtopic={setSelectedSubtopic}
              selectedSubtopic={selectedSubtopic}
            />
          )}

          {resourceType === ResourceType.PAST_PAPER && <PastPaperViewForm data={data.pastPapers as PastPaperWithResource[]} />}
        </>
      )}
    </Box>
  );
};

export default ContentSelectionForm;
