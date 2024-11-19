'use client';
import React, { useState } from "react";
import ResourceSelectionForm from "./ResourceSelectionForm";
import { Box } from "@mui/material";
import { AdminSectionInnerSpacer } from "../Admin.style";
import ContentSelectionForm from "./ContentSelectionForm";
import { ResourceType } from "@/types/resources";
import type { Content } from "@/entities";

const SelectionForm = () => {
  const [selectedSubjectSubtype, setSelectedSubjectSubtype] = useState("");
  const [selectedResourceType, setSelectedResourceType] = useState("");
  const [selectedSubtopic, setSelectedSubtopic] = useState<Content | undefined>();

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


    </Box>
  );
};

export default SelectionForm;
