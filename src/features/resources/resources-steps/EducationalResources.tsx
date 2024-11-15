"use client";

import Grid from "@mui/material/Grid2";
import Image from "next/image";
import React from "react";

import useMultiStepForm from "@/hooks/useMultiStepper";

import { ResourcesCard, ResourcesCardTitle } from "../ResourcesSteps.style";
import { EducationLevel } from "@/types/resources";
import { Box } from "@mui/material";
import { IStepOption } from "@/contexts/MultiStepperContext";
import {
  ResourcesContentHeading,
  ResourcesContentPara,
  ResourcesPara,
  ResourcesSubHeading,
} from "@/app/(main)/resources/Resources.style";

const options: IStepOption[] = [
  { name: "A levels", icon: "/resources/ALevels.svg", value: EducationLevel.A_LEVEL },
  { name: "GCSE", icon: "/resources/GCSE.svg", value: EducationLevel.GCSE },
  { name: "IGCSE", icon: "/resources/IGCSE.svg", value: EducationLevel.IGCSE },
  { name: "KS3", icon: "/resources/KS3.svg", value: EducationLevel.KS3 },
  { name: "Entrance Exam", icon: "/resources/EntranceExam.svg", value: EducationLevel.ENTRANCE_EXAMS },
];

const EducationalResources: React.FC = () => {
  const { selectOption, selectedOptions } = useMultiStepForm();
  const selectedResource = selectedOptions.educationalResources;

  return (
    <Box>
      <Box sx={{ my: { xs: "20px", sm: "30px" } }}>
        <ResourcesSubHeading>Resources</ResourcesSubHeading>
        <ResourcesPara variant="body1" sx={{ textAlign: "start" }}>
          Choose your Resource
        </ResourcesPara>
      </Box>
      <Grid container spacing={"22px"} sx={{ mb: "40px" }} justifyContent={"center"} columns={20}>
        {options.map((option: IStepOption) => (
          <Grid
            size={{
              xs: 20,
              sm: 10,
              md: 6,
              lg: 4,
            }}
            key={option.name}
          >
            <ResourcesCard
              height={"245px"}
              onClick={() => selectOption("educationalResources", option)}
              sx={{
                outline: selectedResource?.value === option.value ? "2px solid #DA9694" : "unset",
              }}
            >
              <Image src={option.icon} alt={option.name} width={67} height={45} />
              <ResourcesCardTitle variant="h6">{option.name}</ResourcesCardTitle>
            </ResourcesCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EducationalResources;
