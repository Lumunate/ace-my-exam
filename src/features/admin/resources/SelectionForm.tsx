'use client';
import React, { useState } from "react";
import ResourceSelectionForm from "./ResourceSelectionForm";
import { Box } from "@mui/material";
import { IStepOption } from "@/contexts/MultiStepperContext";
import { AdminSectionInnerSpacer } from "../Admin.style";
import ContentSelectionForm from "./ContentSelectionForm";
import { ResourceType } from "@/types/resources";

const SelectionForm = () => {
  const [selectedSubjectSubtype, setSelectedSubjectSubtype] = useState("");
  const [selectedResourceType, setSelectedResourceType] = useState("");
  const [selectedSubtopic, setSelectedSubtopic] = useState("");

  return (
    <Box>
      <ResourceSelectionForm
        H_selectedSubjectSubtype={selectedSubjectSubtype}
        H_setSelectedSubjectSubtype={setSelectedSubjectSubtype}
        H_selectedResourceType={selectedResourceType}
        H_setSelectedResourceType={setSelectedResourceType}
        onSubmit={() => { }}
      />
      <AdminSectionInnerSpacer />

      <ContentSelectionForm setSelectedSubtopic={setSelectedSubtopic} subject={selectedSubjectSubtype} resourceType={selectedResourceType as ResourceType} />

      <AdminSectionInnerSpacer />

      <Box>
        <h3>Selected Subtopic: {selectedSubtopic}</h3>
        <p>Selected Resource Type: {selectedResourceType}</p>
        <p>Selected Subject Subtype: {selectedSubjectSubtype}</p>
      </Box>
    </Box>
  );
};

export default SelectionForm;
