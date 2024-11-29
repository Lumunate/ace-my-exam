'use client';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import React, { useEffect } from 'react';

import { ResourcesCardTypography } from '../../../app/(main)/resources/Resources.style';
import { IStepOption } from '../../../contexts/MultiStepperContext';
import { useGetValidResources } from '../../../hooks/resources/useReferenceData';
import useMultiStepForm from '../../../hooks/useMultiStepper';
import { AgeGroups, EducationLevel, ResourceType as IResourceType, Subjects } from '../../../types/resources';
import { ResourcesCardSmall } from '../ResourcesSteps.style';

const resourceTypes: Record<string, IStepOption> = {
  revisionNotes: { name: 'Revision Notes', icon: '/resources/RevisionNotesImg.svg', value: IResourceType.REVISION_NOTES },
  topicalQuestions: { name: 'Topic Questions', icon: '/resources/TopicQuestionsImg.svg', value: IResourceType.TOPIC_QUESTIONS },
  pastPapers: { name: 'Past Papers', icon: '/resources/PastPapersImg.svg', value: IResourceType.PAST_PAPER },
};

export const getDisplayOptions = (
  educationLevel: IStepOption,
  _examBoard: IStepOption,
  ageGroup: IStepOption,
  subject: IStepOption,
  subjectSubtype: { id: string, name: string, tags: string[] }
) => {
  const past_paper_show = (educationLevel?.value === EducationLevel.KS3);
  const topic_question_show =
    (educationLevel?.value === EducationLevel.A_LEVEL && subject?.value === Subjects.FURTHER_MATH) ||
    (ageGroup?.value === AgeGroups.SECONDARY_SCHOOL && subject?.value === Subjects.SCIENCE) || !(subjectSubtype?.name !== '13+ Scholarship' && subjectSubtype?.name !== '16+' && (subjectSubtype?.name === '13+' && subject?.value !== Subjects.SCIENCE)); 
  const revision_notes_show =
    (educationLevel?.value === EducationLevel.A_LEVEL && subject?.value === Subjects.FURTHER_MATH) ||
    (ageGroup?.value === AgeGroups.SECONDARY_SCHOOL && subject?.value === Subjects.SCIENCE) || !(subjectSubtype?.name !== '11+' && subjectSubtype?.name !== '13+ Scholarship' && subjectSubtype?.name !== '16+' && (subjectSubtype?.name === '13+' && subject?.value !== Subjects.SCIENCE));

  return {
    past_paper_show: !past_paper_show,
    topic_question_show: !topic_question_show,
    revision_notes_show: !revision_notes_show,
  };
};

const ResourceType: React.FC = () => {
  const { selectOption, selectedOptions } = useMultiStepForm();

  const educationLevel = selectedOptions.educationalResources;
  const examBoard = selectedOptions.examBoard;
  const ageGroup = selectedOptions.ageGroup;
  const subject = selectedOptions.subject;
  const subjectSubtype = selectedOptions.subjectSubtype;

  const { data: validResources, refetch } = useGetValidResources(educationLevel?.value, examBoard?.value, subjectSubtype?.value);

  const { past_paper_show, topic_question_show, revision_notes_show } = getDisplayOptions(
    educationLevel,
    examBoard,
    ageGroup,
    subject,
    { id: subjectSubtype.value as string, name: subjectSubtype.name, tags: [] }
  );

  useEffect(() => {
    refetch();
  }, [educationLevel, examBoard, subject, subjectSubtype]);

  const selectedResourceType = selectedOptions.resourceType;

  return (
    <Grid container rowSpacing={'17px'} columnSpacing={'24px'} sx={{ mb: '40px' }} columns={12}>
      {revision_notes_show && (
        <Grid
          size={{
            xs: 12,
          }}
        >
          <ResourcesCardSmall
            onClick={() => {
              if (!validResources?.revisionNotes) return;
              selectOption('resourceType', resourceTypes.revisionNotes);
            }}
            sx={{
              justifyContent: 'flex-start',
              outline: selectedResourceType?.value === resourceTypes.revisionNotes.value ? '1px solid #DA9694' : 'unset',
              position: 'relative',
              cursor: !validResources?.revisionNotes ? 'default' : 'pointer',
              opacity: !validResources?.revisionNotes ? '0.5' : '1',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image src={resourceTypes.revisionNotes.icon} alt={resourceTypes.revisionNotes.name} width={82} height={22} />
              <ResourcesCardTypography variant="body1" sx={{ ml: '12px', textWrap: 'nowrap' }}>
                {resourceTypes.revisionNotes.name}
              </ResourcesCardTypography>
            </Box>
          </ResourcesCardSmall>
        </Grid>
      )}

      {topic_question_show && (
        <Grid
          size={{
            xs: 12,
          }}
        >
          <ResourcesCardSmall
            onClick={() => {
              if (!validResources?.topicalQuestions) return;
              selectOption('resourceType', resourceTypes.topicalQuestions);
            }}
            sx={{
              justifyContent: 'flex-start',
              outline: selectedResourceType?.value === resourceTypes.topicalQuestions.value ? '1px solid #DA9694' : 'unset',
              position: 'relative',
              cursor: !validResources?.topicalQuestions ? 'default' : 'pointer',
              opacity: !validResources?.topicalQuestions ? '0.5' : '1',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image src={resourceTypes.topicalQuestions.icon} alt={resourceTypes.topicalQuestions.name} width={82} height={22} />
              <ResourcesCardTypography variant="body1" sx={{ ml: '12px', textWrap: 'nowrap' }}>
                {resourceTypes.topicalQuestions.name}
              </ResourcesCardTypography>
            </Box>
          </ResourcesCardSmall>
        </Grid>
      )}

      {past_paper_show && (
        <Grid
          size={{
            xs: 12,
          }}
        >
          <ResourcesCardSmall
            onClick={() => {
              if (!validResources?.pastPapers) return;
              selectOption('resourceType', resourceTypes.pastPapers);
            }}
            sx={{
              justifyContent: 'flex-start',
              outline: selectedResourceType?.value === resourceTypes.pastPapers.value ? '1px solid #DA9694' : 'unset',
              position: 'relative',
              cursor: !validResources?.pastPapers ? 'default' : 'pointer',
              opacity: !validResources?.pastPapers ? '0.5' : '1',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image src={resourceTypes.pastPapers.icon} alt={resourceTypes.pastPapers.name} width={82} height={22} />
              <ResourcesCardTypography variant="body1" sx={{ ml: '12px', textWrap: 'nowrap' }}>
                {resourceTypes.pastPapers.name}
              </ResourcesCardTypography>
            </Box>
          </ResourcesCardSmall>
        </Grid>
      )}
    </Grid>
  );
};

export default ResourceType;
