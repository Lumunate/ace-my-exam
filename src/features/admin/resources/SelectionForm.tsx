'use client';
import React, { useState } from "react";
import ResourceSelectionForm from "./ResourceSelectionForm";
import { Box } from "@mui/material";
import { IStepOption } from "@/contexts/MultiStepperContext";

const SelectionForm = () => {
  const [selectedSubjectSubtype, setSelectedSubjectSubtype] = useState("");
  const [selectedResourceType, setSelectedResourceType] = useState("");

  return (
    <Box>
      <ResourceSelectionForm
        selectedSubjectSubtype={selectedSubjectSubtype}
        setSelectedSubjectSubtype={setSelectedSubjectSubtype}
        selectedResourceType={selectedResourceType}
        setSelectedResourceType={setSelectedResourceType}
        onSubmit={() => { }}
      />
    </Box>
  );
};

export default SelectionForm;
