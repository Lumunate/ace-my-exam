'use client';

import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EditIcon from '@mui/icons-material/Edit';
import ReplayIcon from '@mui/icons-material/Replay';
import { AccordionSummary, Box, Button, IconButton, Skeleton, styled, Typography } from '@mui/material';
import {
  Content,
  ContentLevel,
  ContentType,
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
  ExpandIconHead,
  InnerCollapse,
} from '../../../features/resources/resources-tables/ResourceTables.style';
import { useGetResources } from '../../../hooks/resources/useResources';
import { ContentWithChildren } from '../../../types/content';
import { ResourceType } from '../../../types/resources';
import { AdminCenteredSectionHeading, AdminModalSubHeading, AdminSectionHeading, AdminSectionSubHeading } from '../Admin.style';
import { CreatePastPaperForm, EditPastPaperFormModal } from './PastPaperModals';

export const AdminTableHeading = styled(AdminSectionHeading)(() => ({
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
  fontSize: '2rem',
  fontWeight: 600,
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 'max-content',
}));

export const ResourceItem = styled(AccordionSummary)(({ theme }) => ({
  color: '#333',
  fontSize: '1.8rem',
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
          {getRevisionNoteDownloadUrl(data, RevisionNoteResourceType.NOTE) === '' ? (
            <DownloadIconButton disabled>
              <Image src="/icons/cross.svg" alt="download" width={18} height={18} />
            </DownloadIconButton>
          ) : (
            <DownloadIconButton onClick={() => handleDownload(getRevisionNoteDownloadUrl(data, RevisionNoteResourceType.NOTE))}>
              <Image src="/icons/search.svg" alt="download" width={18} height={18} />
            </DownloadIconButton>
          )}
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
          {getTopicalQuestionDownloadUrl(data, TopicalQuestionResourceType.QUESTION_PAPER) === '' ? (
            <DownloadIconButton disabled>
              <Image src="/icons/cross.svg" alt="download" width={18} height={18} />
            </DownloadIconButton>
          ) : (
            <DownloadIconButton
              sx={{ flex: '0 0 1' }}
              onClick={() => handleDownload(getTopicalQuestionDownloadUrl(data, TopicalQuestionResourceType.QUESTION_PAPER))}
            >
              <Image src="/icons/search.svg" alt="download" width={18} height={18} />
            </DownloadIconButton>
          )}
          {getTopicalQuestionDownloadUrl(data, TopicalQuestionResourceType.MARKING_SCHEME) === '' ? (
            <DownloadIconButton disabled>
              <Image src="/icons/cross.svg" alt="download" width={18} height={18} />
            </DownloadIconButton>
          ) : (
            <DownloadIconButton
              sx={{ flex: '0 0 1' }}
              onClick={() => handleDownload(getTopicalQuestionDownloadUrl(data, TopicalQuestionResourceType.MARKING_SCHEME))}
            >
              <Image src="/icons/search.svg" alt="download" width={18} height={18} />
            </DownloadIconButton>
          )}
          {getTopicalQuestionDownloadUrl(data, TopicalQuestionResourceType.SOLUTION_BOOKLET) === '' ? (
            <DownloadIconButton disabled>
              <Image src="/icons/cross.svg" alt="download" width={18} height={18} />
            </DownloadIconButton>
          ) : (
            <DownloadIconButton
              sx={{ flex: '0 0 1' }}
              onClick={() => handleDownload(getTopicalQuestionDownloadUrl(data, TopicalQuestionResourceType.SOLUTION_BOOKLET))}
            >
              <Image src="/icons/search.svg" alt="download" width={18} height={18} />
            </DownloadIconButton>
          )}
        </Box>
      );
    }
  }

  return (
    <>
      <CollapseContainer>
        <ResourceHeading
          expandIcon={
            <ExpandIconHead>
              <Image src="/icons/down.svg" alt="Collapse" width={10} height={10} />
            </ExpandIconHead>
          }
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: data.type === ContentType.CHAPTER || data.type === ContentType.TOPICAL_TOPIC ? 'bold' : 'normal',
              fontSize: 'inherit',
            }}
          >
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

  const [editContentOpen, setEditContentOpen] = useState<boolean>(false);

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
          <ResourceHeading
            expandIcon={
              <ExpandIconHead>
                <Image src="/icons/down.svg" alt="Collapse" width={10} height={10} />
              </ExpandIconHead>
            }
          >
            <Typography sx={{ fontWeight: 'bold', fontSize: 'inherit' }}>{year}</Typography>
          </ResourceHeading>

          <InnerCollapse>
            {papersByYear[year].map((paper) => (
              <>
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

                    <Box sx={{ display: 'flex', alignItems: 'center', transform: 'translateY(-5px)', marginLeft: '2rem' }}>
                      <IconButton onClick={() => setEditContentOpen(true)}>
                        <EditIcon />
                      </IconButton>
                    </Box>
                  </ResourceItem>
                  {getDownloadUrl(paper, PastPaperResourceType.QUESTION_PAPER) === '' ? (
                    <DownloadIconButton disabled>
                      <Image src="/icons/cross.svg" alt="download" width={18} height={18} />
                    </DownloadIconButton>
                  ) : (
                    <DownloadIconButton
                      sx={{ flex: '0 0 1' }}
                      onClick={() => handleDownload(getDownloadUrl(paper, PastPaperResourceType.QUESTION_PAPER))}
                    >
                      <Image src="/icons/search.svg" alt="download" width={18} height={18} />
                    </DownloadIconButton>
                  )}
                  {getDownloadUrl(paper, PastPaperResourceType.MARKING_SCHEME) === '' ? (
                    <DownloadIconButton disabled>
                      <Image src="/icons/cross.svg" alt="download" width={18} height={18} />
                    </DownloadIconButton>
                  ) : (
                    <DownloadIconButton
                      sx={{ flex: '0 0 1' }}
                      onClick={() => handleDownload(getDownloadUrl(paper, PastPaperResourceType.MARKING_SCHEME))}
                    >
                      <Image src="/icons/search.svg" alt="download" width={18} height={18} />
                    </DownloadIconButton>
                  )}
                  {getDownloadUrl(paper, PastPaperResourceType.SOLUTION_BOOKLET) === '' ? (
                    <DownloadIconButton disabled>
                      <Image src="/icons/cross.svg" alt="download" width={18} height={18} />
                    </DownloadIconButton>
                  ) : (
                    <DownloadIconButton
                      sx={{ flex: '0 0 1' }}
                      onClick={() => handleDownload(getDownloadUrl(paper, PastPaperResourceType.SOLUTION_BOOKLET))}
                    >
                      <Image src="/icons/search.svg" alt="download" width={18} height={18} />
                    </DownloadIconButton>
                  )}
                </Box>
                {editContentOpen && selectedPastPaper && (
                  <EditPastPaperFormModal
                    open={editContentOpen}
                    onClose={() => setEditContentOpen(false)}
                    id={paper.id}
                    title={paper.title}
                    year={paper.year}
                    subjectId={paper.subject_id ?? 0}
                  />
                )}
              </>
            ))}
          </InnerCollapse>
        </CollapseContainer>
      ))}
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
  selectedPastPaper,
}) => {
  const { data, isLoading, refetch } = useGetResources(parseInt(subject));

  const [createContentOpen, setCreateContentOpen] = useState<boolean>(false);
  const [createPastPaperOpen, setCreatePastPaperOpen] = useState<boolean>(false);

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
                  <Typography sx={{ color: '#333', fontWeight: 600, mr: 1, fontSize: '1.4rem' }}>Add Chapter</Typography>
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
                  <Typography sx={{ color: '#333', fontWeight: 600, mr: 1, fontSize: '1.4rem' }}>Add Topic</Typography>
                  <AddIcon />
                </Button>
              )}

              {resourceType === ResourceType.PAST_PAPER && (
                <Button
                  onClick={() => setCreatePastPaperOpen(true)}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ color: '#333', fontWeight: 600, mr: 1, fontSize: '1.4rem' }}>Add Past Paper</Typography>
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

            {createPastPaperOpen && (
              <CreatePastPaperForm
                open={createPastPaperOpen}
                onClose={() => setCreatePastPaperOpen(false)}
                subjectId={parseInt(subject)}
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
              <PastPaperSelectionForm
                selectedPastPaper={selectedPastPaper}
                setSelectedPastPaper={setSelectedPastPaper}
                data={data.pastPapers as PastPaperWithResource[]}
              />
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default ContentSelectionForm;
