'use client';

import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EditIcon from '@mui/icons-material/Edit';
import ReplayIcon from '@mui/icons-material/Replay';
import { AccordionSummary, Box, Button, IconButton, Skeleton, styled, Typography } from '@mui/material';
import {
  Content,
  ContentLevel,
  PastPaperResourceType,
  RevisionNoteResourceType,
  TopicalQuestionResourceType,
} from '@prisma/client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { PastPaperWithResource } from 'app/api/resources/route';

import CreateContentForm from './CreateContentFormModal';
import EditContentFormModal from './EditContentFormModal';
import {
  CollapseContainer,
  DownloadIconButton,
  InnerCollapse,
} from '../../../features/resources/resources-tables/ResourceTables.style';
import { useGetResources } from '../../../hooks/resources/useResources';
import { ContentWithChildren } from '../../../types/content';
import { ResourceType } from '../../../types/resources';
import { AdminCenteredSectionHeading, AdminModalSubHeading, AdminSectionHeading, AdminSectionSubHeading } from '../Admin.style';

export const AdminTableHeading = styled(AdminSectionHeading)(() => ({
  fontSize: '1.4rem',
  color: '#666',
}));

const handleDownload = (fileName: string) => {
  const fileUrl = fileName;
  const link = document.createElement('a');

  link.href = fileUrl;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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
    if (data.revisionNotes && data.revisionNotes[0]?.resources)
      return data.revisionNotes[0].resources.find((resource) => resource.resource_type === resourceType)?.resource.url || '';

    return '';
  };

  const getTopicalQuestionDownloadUrl = (data: ContentWithChildren, resourceType: TopicalQuestionResourceType) => {
    if (data.topicalQuestions && data.topicalQuestions[0]?.resources)
      return data.topicalQuestions[0].resources.find((resource) => resource.resource_type === resourceType)?.resource.url || '';

    return '';
  };

  if (data.level === ContentLevel.SUBTOPIC) {
    if (type === ResourceType.REVISION_NOTES) {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 0 }}>
          <ResourceItem
            sx={{
              color: selectedSubtopic?.id === data.id ? 'secondary.main' : '',
              fontWeight: selectedSubtopic?.id === data.id ? 'bold' : '',
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
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 0 }}>
          <ResourceItem
            sx={{
              flex: '0 0 calc(50%)',
              color: selectedSubtopic?.id === data.id ? 'secondary.main' : '',
              fontWeight: selectedSubtopic?.id === data.id ? 'bold' : '',
            }}
            onClick={() => setSelectedSubtopic(data)}
          >
            {data.name}
          </ResourceItem>
          <DownloadIconButton
            sx={{ flex: '0 0 1' }}
            onClick={() => handleDownload(getTopicalQuestionDownloadUrl(data, TopicalQuestionResourceType.QUESTION_PAPER))}
          >
            <Image src="/icons/downloadIcon.svg" alt="download" width={12} height={12} />
          </DownloadIconButton>
          <DownloadIconButton
            sx={{ flex: '0 0 1' }}
            onClick={() => handleDownload(getTopicalQuestionDownloadUrl(data, TopicalQuestionResourceType.MARKING_SCHEME))}
          >
            <Image src="/icons/downloadIcon.svg" alt="download" width={12} height={12} />
          </DownloadIconButton>
          <DownloadIconButton
            sx={{ flex: '0 0 1' }}
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
          <Typography variant="h6" sx={{ fontWeight: data.level === ContentLevel.CHAPTER ? 'bold' : 'normal' }}>
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
          description={data.description ?? ''}
        />
      )}
      {createContentOpen && (
        <CreateContentForm
          open={createContentOpen}
          onClose={() => setCreateContentOpen(false)}
          subjectId={null}
          parent={data}
          isTopical={false}
        />
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
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 0 }}>
        <AdminTableHeading>Name</AdminTableHeading>
        <AdminModalSubHeading>Note</AdminModalSubHeading>
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
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <AdminTableHeading sx={{ flex: '0 0 calc(50%)' }}>Name</AdminTableHeading>
        <AdminModalSubHeading sx={{ flex: '0 0 1', textAlign: 'center' }}>Question Paper</AdminModalSubHeading>
        <AdminModalSubHeading sx={{ flex: '0 0 1' }}>Marking Scheme</AdminModalSubHeading>
        <AdminModalSubHeading sx={{ flex: '0 0 1' }}>Answer</AdminModalSubHeading>
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

const PastPaperSelectionForm: React.FC<{
  data: PastPaperWithResource[];
  selectedPastPaper: PastPaperWithResource | undefined;
  setSelectedPastPaper: React.Dispatch<React.SetStateAction<PastPaperWithResource | undefined>>;
}> = ({ data, selectedPastPaper, setSelectedPastPaper }) => {
  const getDownloadUrl = (data: PastPaperWithResource, resourceType: PastPaperResourceType) => {
    return data.resources.find((resource) => resource.resource_type === resourceType)?.resource.url || '';
  };

  const [, setCreateContentOpen] = useState<boolean>(false);
  const [, setEditContentOpen] = useState<boolean>(false);

  const papersByYear = data.reduce((acc: Record<string, PastPaperWithResource[]>, paper) => {
    const year = paper.year.toString();

    if (year in acc) {
      acc[year].push(paper);
    } else {
      acc[year] = [paper];
    }

    return acc;
  }, {});

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <AdminTableHeading sx={{ flex: '0 0 calc(50%)' }}>Exam</AdminTableHeading>
        <AdminModalSubHeading sx={{ flex: '0 0 1', textAlign: 'center' }}>Question Paper</AdminModalSubHeading>
        <AdminModalSubHeading sx={{ flex: '0 0 1' }}>Marking Scheme</AdminModalSubHeading>
        <AdminModalSubHeading sx={{ flex: '0 0 1' }}>Answer</AdminModalSubHeading>
      </Box>

      {Object.keys(papersByYear).map((year) => (
        <CollapseContainer key={year}>
          <ResourceHeading expandIcon={<ArrowDropDownIcon />}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {year}
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
            {papersByYear[year].map((paper) => (
              <Box key={paper.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 0 }}>
                <ResourceItem
                  sx={{
                    flex: '0 0 calc(50%)',
                    color: selectedPastPaper?.id === paper.id ? 'secondary.main' : '',
                    fontWeight: selectedPastPaper?.id === paper.id ? 'bold' : '',
                  }}
                  onClick={() => setSelectedPastPaper(paper)}
                >
                  {paper.title}
                </ResourceItem>
                <DownloadIconButton
                  sx={{ flex: '0 0 1' }}
                  onClick={() => handleDownload(getDownloadUrl(paper, PastPaperResourceType.QUESTION_PAPER))}
                >
                  <Image src="/icons/downloadIcon.svg" alt="download" width={12} height={12} />
                </DownloadIconButton>
                <DownloadIconButton
                  sx={{ flex: '0 0 1' }}
                  onClick={() => handleDownload(getDownloadUrl(paper, PastPaperResourceType.MARKING_SCHEME))}
                >
                  <Image src="/icons/downloadIcon.svg" alt="download" width={12} height={12} />
                </DownloadIconButton>
                <DownloadIconButton
                  sx={{ flex: '0 0 1' }}
                  onClick={() => handleDownload(getDownloadUrl(paper, PastPaperResourceType.SOLUTION_BOOKLET))}
                >
                  <Image src="/icons/downloadIcon.svg" alt="download" width={12} height={12} />
                </DownloadIconButton>
              </Box>
            ))}
          </InnerCollapse>
        </CollapseContainer>
      ))}
      {/* TODO */}
      {/* {editContentOpen && selectedPastPaper && (
        <EditContentFormModal
          open={editContentOpen}
          onClose={() => setEditContentOpen(false)}
          id={selectedPastPaper.id}
          name={selectedPastPaper.title}
          description={''}
        />
      )}
      {createContentOpen && selectedPastPaper && (
        <CreateContentForm open={createContentOpen} onClose={() => setCreateContentOpen(false)} subjectId={null} parent={null} isTopical={false} />
      )} */}
    </>
  );
};

interface ContentSelectionFormProps {
  subject: string;
  resourceType: ResourceType;
  selectedSubtopic: ContentWithChildren | undefined;
  setSelectedSubtopic: React.Dispatch<React.SetStateAction<ContentWithChildren | undefined>>;
  selectedPastPaper: PastPaperWithResource | undefined;
  setSelectedPastPaper: React.Dispatch<React.SetStateAction<PastPaperWithResource | undefined>>;
}

const ContentSelectionForm: React.FC<ContentSelectionFormProps> = ({
  subject,
  resourceType,
  setSelectedSubtopic,
  setSelectedPastPaper,
  selectedSubtopic,
  selectedPastPaper
}) => {
  const { data, isLoading, refetch } = useGetResources(parseInt(subject));

  const [createContentOpen, setCreateContentOpen] = useState<boolean>(false);

  useEffect(() => {
    refetch();
  }, [subject, resourceType]);

  return (
    <Box>
      <AdminCenteredSectionHeading>
        {resourceType === ResourceType.REVISION_NOTES
          ? 'Revision Notes'
          : resourceType === ResourceType.TOPIC_QUESTIONS
            ? 'Topical Questions'
            : 'Past Papers'}
      </AdminCenteredSectionHeading>
      <Box sx={{ position: 'relative' }}>
        <AdminSectionHeading>Select Content</AdminSectionHeading>
        <AdminSectionSubHeading>Select, Add and Edit the Chapter, Topic and Subtopic for your resources.</AdminSectionSubHeading>

        {!data || isLoading ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[...Array(3)].map((_, index) => (
              <Skeleton variant="text" key={index} width="100%" height={20} />
            ))}
          </Box>
        ) : (
          <>
            <Box sx={{ position: 'absolute', top: '-10px', right: '10px', zIndex: 10, display: 'flex', alignItems: 'center' }}>
              {resourceType === ResourceType.REVISION_NOTES && (
                <Button
                  onClick={() => setCreateContentOpen(true)}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ color: '#333', fontWeight: 600, mr: 1 }}>Add Chapter</Typography>
                  <AddIcon />
                </Button>
              )}

              {resourceType === ResourceType.TOPIC_QUESTIONS && (
                <Button
                  onClick={() => setCreateContentOpen(true)}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ color: '#333', fontWeight: 600, mr: 1 }}>Add Topic</Typography>
                  <AddIcon />
                </Button>
              )}

              <IconButton onClick={() => refetch()}>
                <ReplayIcon />
              </IconButton>
            </Box>

            {createContentOpen && (
              <CreateContentForm
                open={createContentOpen}
                onClose={() => setCreateContentOpen(false)}
                subjectId={parseInt(subject)}
                isTopical={resourceType === ResourceType.TOPIC_QUESTIONS}
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

            {resourceType === ResourceType.PAST_PAPER && (
              <PastPaperSelectionForm selectedPastPaper={selectedPastPaper} setSelectedPastPaper={setSelectedPastPaper} data={data.pastPapers as PastPaperWithResource[]} />
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default ContentSelectionForm;
