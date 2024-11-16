"use client";

import Grid from "@mui/material/Grid2";
import Image from "next/image";
import React, { useEffect } from "react";

import useMultiStepForm from "@/hooks/useMultiStepper";

import { ResourcesCard, ResourcesCardSmall, ResourcesCardTitle } from "../ResourcesSteps.style";
import { ResourceType as IResourceType } from "@/types/resources";
import { IStepOption } from "@/contexts/MultiStepperContext";
import { useGetValidResources } from "@/hooks/resources/useReferenceData";
import { Box, Typography } from "@mui/material";

const resourceTypes: Record<string, IStepOption> = {
  revisionNotes: { name: "Revision Notes", icon: "/resources/RevisionNotesImg.svg", value: IResourceType.REVISION_NOTES },
  topicalQuestions: { name: "Topic Questions", icon: "/resources/TopicQuestionsImg.svg", value: IResourceType.TOPIC_QUESTIONS },
  pastPapers: { name: "Past Papers", icon: "/resources/PastPapersImg.svg", value: IResourceType.PAST_PAPER },
};

const ResourceType: React.FC = () => {
  const { selectOption, selectedOptions } = useMultiStepForm();

  const educationLevel = selectedOptions.educationalResources;
  const examBoard = selectedOptions.examBoard;
  const subject = selectedOptions.subject;
  const subjectSubtype = selectedOptions.subjectSubtype;

  const { data: validResources, refetch } = useGetValidResources(educationLevel?.value, examBoard?.value, subjectSubtype?.value);
  useEffect(() => {
    refetch();
  }, [educationLevel, examBoard, subject, subjectSubtype]);

  const selectedResourceType = selectedOptions.resourceType;

  return (
    <Grid container spacing={"22px"} sx={{ mb: "40px" }} columns={12}>
      <Grid
        size={{
          xs: 12,
        }}
      >
        <ResourcesCardSmall
          onClick={() => {
            if (!validResources?.revisionNotes) return;
            selectOption("resourceType", resourceTypes.revisionNotes)
          }}
          sx={{
            justifyContent: "flex-start",
            width: "30rem",
            paddingLeft: '2rem',
            outline: selectedResourceType?.value === resourceTypes.revisionNotes.value ? "2px solid #DA9694" : "unset",
            position: "relative",
            cursor: !validResources?.revisionNotes ? "default" : "pointer",
            opacity: !validResources?.revisionNotes ? "0.5" : "1",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image src={resourceTypes.revisionNotes.icon} alt={resourceTypes.revisionNotes.name} width={82} height={22} />
            <Typography variant="body1" sx={{ ml: "1px", textWrap: "nowrap" }}>
              {resourceTypes.revisionNotes.name}
            </Typography>
          </Box>
        </ResourcesCardSmall>
      </Grid>

      <Grid
        size={{
          xs: 12,
        }}
      >
        <ResourcesCardSmall
          onClick={() => {
            if (!validResources?.topicalQuestions) return;
            selectOption("resourceType", resourceTypes.topicalQuestions)
          }}
          sx={{
            justifyContent: "flex-start",
            width: "30rem",
            paddingLeft: '2rem',
            outline: selectedResourceType?.value === resourceTypes.topicalQuestions.value ? "2px solid #DA9694" : "unset",
            position: "relative",
            cursor: !validResources?.topicalQuestions ? "default" : "pointer",
            opacity: !validResources?.topicalQuestions ? "0.5" : "1",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image src={resourceTypes.topicalQuestions.icon} alt={resourceTypes.topicalQuestions.name} width={82} height={22} />
            <Typography variant="body1" sx={{ ml: "1px", textWrap: "nowrap" }}>
              {resourceTypes.topicalQuestions.name}
            </Typography>
          </Box>
        </ResourcesCardSmall>
      </Grid>
      
      <Grid
        size={{
          xs: 12,
        }}
      >
        <ResourcesCardSmall
          onClick={() => {
            if (!validResources?.pastPapers) return;
            selectOption("resourceType", resourceTypes.pastPapers)
          }}
          sx={{
            justifyContent: "flex-start",
            width: "30rem",
            paddingLeft: '2rem',
            outline: selectedResourceType?.value === resourceTypes.pastPapers.value ? "2px solid #DA9694" : "unset",
            position: "relative",
            cursor: !validResources?.pastPapers ? "default" : "pointer",
            opacity: !validResources?.pastPapers ? "0.5" : "1",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image src={resourceTypes.pastPapers.icon} alt={resourceTypes.pastPapers.name} width={82} height={22} />
            <Typography variant="body1" sx={{ ml: "1px", textWrap: "nowrap" }}>
              {resourceTypes.pastPapers.name}
            </Typography>
          </Box>
        </ResourcesCardSmall>
      </Grid>
    </Grid>
  );
};

export default ResourceType;
