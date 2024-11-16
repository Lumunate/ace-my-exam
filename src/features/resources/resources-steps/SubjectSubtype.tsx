"use client";

import Grid from "@mui/material/Grid2";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import useMultiStepForm from "@/hooks/useMultiStepper";

import { ResourcesCard, ResourcesCardSmall, ResourcesCardTitle } from "../ResourcesSteps.style";
import { useGetSubjects, useGetUniqueSubjects } from "@/hooks/resources/useReferenceData";

import { Box, Typography } from "@mui/material";
import { StepsDisabled, StepsLoader } from "./StepsLoader";
import { IStepOption } from "@/contexts/MultiStepperContext";
import { EducationLevel, ExamBoards, Subjects } from "@/types/resources";

const SubjectSubtype: React.FC = () => {
  const { selectOption, selectedOptions } = useMultiStepForm();
  const educationLevel = selectedOptions.educationalResources;
  const examBoard = selectedOptions.examBoard;
  const subject = selectedOptions.subject;

  const { data: subjectOptions, isLoading, refetch } = useGetSubjects(educationLevel?.value, examBoard?.value, subject?.value);

  console.log(subject);
  console.log('ssssss', subjectOptions);
  useEffect(() => {
    refetch();
  }, [educationLevel, examBoard, subject]);

  const selectedSubject = selectedOptions.subjectSubtype;
  if (isLoading || !subjectOptions) return <StepsLoader />;

  if (educationLevel.value === EducationLevel.A_LEVEL && subject.value === Subjects.MATH) {
    return (
      <Year1Year2Subjects subjectOptions={subjectOptions} selectedSubjectSubtype={selectedSubject} selectOption={selectOption} />
    );
  }

  return <SimpleSubjects subjectOptions={subjectOptions} selectedSubjectSubtype={selectedSubject} selectOption={selectOption} />;
};

export default SubjectSubtype;

const Year1Year2Subjects = ({
  subjectOptions,
  selectedSubjectSubtype,
  selectOption,
}: {
  subjectOptions: {
    id: number;
    subject: string;
    tags: string[];
  }[];
  selectedSubjectSubtype: IStepOption;
  selectOption: (stepName: string, option: IStepOption) => void;
}) => {
  const year1Subjects = subjectOptions.filter((s) => s.tags?.includes("YEAR_1")).map((s) => ({
    ...s, tags: s.tags?.filter((s) => {
      return s !== "YEAR_1";
    })
  }));
  const year2Subjects = subjectOptions.filter((s) => s.tags?.includes("YEAR_2")).map((s) => ({
    ...s, tags: s.tags?.filter((s) => {
      return s !== "YEAR_2";
    })
  }));

  return (
    <Grid
      container
      spacing={"20px"}
      sx={{ mb: "40px" }}
      columns={{
        sm: 6,
        md: 12,
      }}
    >
      {
        year1Subjects.map((subject) => (
          <Grid
            size={{
              xs: 12,
              sm: 6,
            }}
            key={subject.id}
          >
            <ResourcesCardSmall
              onClick={() => selectOption("subjectSubtype", { name: subject.subject, value: subject.id?.toString(), icon: "" })}
              sx={{
                outline: selectedSubjectSubtype?.value === subject.id?.toString() ? "2px solid #DA9694" : "unset",
              }}
            >
              <Typography variant="body1" sx={{ ml: "1px", textWrap: "nowrap" }}>
                Year 1 - {subject.tags.join(" - ")}
              </Typography>
            </ResourcesCardSmall>
          </Grid>
        ))
      }

      {
        year2Subjects.map((subject) => (
          <Grid
            size={{
              xs: 12,
              sm: 6,
            }}
            key={subject.id}
          >
            <ResourcesCardSmall
              onClick={() => selectOption("subjectSubtype", { name: subject.subject, value: subject.id?.toString(), icon: "" })}
              sx={{
                outline: selectedSubjectSubtype?.value === subject.id?.toString() ? "2px solid #DA9694" : "unset",
              }}
            >
              <Typography variant="body1" sx={{ ml: "1px", textWrap: "nowrap" }}>
                Year 2 - {subject.tags.join(" - ")}
              </Typography>
            </ResourcesCardSmall>
          </Grid>
        ))
      }
    </Grid >
  );
};

const SimpleSubjects = ({
  subjectOptions,
  selectedSubjectSubtype,
  selectOption,
}: {
  subjectOptions: {
    id: number;
    subject: string;
    tags: string[];
  }[];
  selectedSubjectSubtype: IStepOption;
  selectOption: (stepName: string, option: IStepOption) => void;
}) => {
  return (
    <Grid
      container
      spacing={"20px"}
      sx={{ mb: "40px" }}
      columns={{
        sm: 6,
        md: 12,
      }}
    >
      {subjectOptions.map((subject) => (
        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
          key={subject.id}
        >
          <ResourcesCardSmall
            onClick={() => selectOption("subjectSubtype", { name: subject.subject, value: subject.id?.toString(), icon: "" })}
            sx={{
              outline: selectedSubjectSubtype?.value === subject.id?.toString() ? "2px solid #DA9694" : "unset",
            }}
          >
            <Typography variant="body1" sx={{ ml: "1px", textWrap: "nowrap" }}>
              {subject.tags?.join(" - ")}
            </Typography>
          </ResourcesCardSmall>
        </Grid>
      ))}
    </Grid>
  );
};
