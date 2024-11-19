"use client";
import React, { useEffect, useState } from "react";
import { Box, FormControl, InputLabel, Select, MenuItem, Button, Container, Stack } from "@mui/material";
import {
  useGetEducationLevels,
  useGetExamBoards,
  useGetSubjects,
  useGetUniqueSubjects,
  useGetValidResources,
} from "@/hooks/resources/useReferenceData";

interface IResourceSelectionFormProps {
  selectedSubjectSubtype: string;
  setSelectedSubjectSubtype: React.Dispatch<React.SetStateAction<string>>;
  selectedResourceType: string;
  setSelectedResourceType: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (educationLevel: string, examBoard: string, subject: string, subjectSubtype: string, resourceType: string) => void;
}

export default function ResourceSelectionForm({
  selectedSubjectSubtype,
  setSelectedSubjectSubtype,
  selectedResourceType,
  setSelectedResourceType,
  onSubmit,
}: IResourceSelectionFormProps) {
  // State for tracking selected values
  const [selectedEducationLevel, setSelectedEducationLevel] = useState("");
  const [selectedExamBoard, setSelectedExamBoard] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  // Fetch data using custom hooks
  const { data: educationLevels, isLoading: educationLevelsIsLoading, refetch: educationLevelsRefetch } = useGetEducationLevels();
  const {
    data: examBoards,
    isLoading: examBoardsIsLoading,
    refetch: examBoardsRefetch,
  } = useGetExamBoards(selectedEducationLevel);
  const {
    data: subjects,
    isLoading: subjectsIsLoading,
    refetch: subjectsRefetch,
  } = useGetUniqueSubjects(selectedEducationLevel, selectedExamBoard);
  const {
    data: subjectSubtypes,
    isLoading: subjectSubtypesIsLoading,
    refetch: subjectSubtypesRefetch,
  } = useGetSubjects(selectedEducationLevel, selectedExamBoard, selectedSubject);
  const {
    data: resourceTypes,
    isLoading: resourceTypesIsLoading,
    refetch: resourceTypesRefetch,
  } = useGetValidResources(selectedEducationLevel, selectedExamBoard, selectedSubjectSubtype);

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({
      educationLevel: selectedEducationLevel,
      examBoard: selectedExamBoard,
      subject: selectedSubject,
      subjectSubtype: selectedSubjectSubtype,
      resourceType: selectedResourceType,
    });
  };

  useEffect(() => {
    examBoardsRefetch();
    subjectsRefetch();
    subjectSubtypesRefetch();
    resourceTypesRefetch();
  }, [selectedEducationLevel, selectedExamBoard, selectedSubject, selectedSubjectSubtype, selectedResourceType]);

  // Reset form when education level changes
  const handleEducationLevelChange = (value: any) => {
    setSelectedEducationLevel(value);
    setSelectedExamBoard("");
    setSelectedSubject("");
    setSelectedSubjectSubtype("");
    setSelectedResourceType("");
  };

  {console.log('selectedSubjectSubtype', subjectSubtypes, 'aaaaaaaa', selectedSubjectSubtype, 'bbbb', selectedSubject)}


  return (
    <Box>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Box sx={{ display: "flex", gap: "20px" }}>
          {/* Education Level Dropdown */}
          <FormControl fullWidth>
            <InputLabel>Education Level</InputLabel>
            <Select
              disabled={!educationLevels}
              value={selectedEducationLevel}
              label="Education Level"
              onChange={(e) => handleEducationLevelChange(e.target.value)}
            >
              {educationLevels &&
                educationLevels.map((level) => (
                  <MenuItem key={level.value} value={level.value}>
                    {level.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          {/* Exam Board Dropdown */}
          <FormControl fullWidth disabled={!selectedEducationLevel}>
            <InputLabel>Exam Board</InputLabel>
            <Select
              value={selectedExamBoard}
              label="Exam Board"
              disabled={!selectedEducationLevel || !examBoards}
              onChange={(e) => {
                setSelectedExamBoard(e.target.value);
                setSelectedSubject("");
                setSelectedSubjectSubtype("");
                setSelectedResourceType("");
              }}
            >
              {examBoards &&
                examBoards.map((board) => (
                  <MenuItem key={board.value} value={board.value}>
                    {board.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          {/* Subject Dropdown */}
          <FormControl fullWidth disabled={!selectedExamBoard}>
            <InputLabel>Subject</InputLabel>
            <Select
              value={selectedSubject}
              label="Subject"
              disabled={!selectedEducationLevel || !selectedExamBoard || !subjects}
              onChange={(e) => {
                setSelectedSubject(e.target.value);
                setSelectedSubjectSubtype("");
                setSelectedResourceType("");
              }}
            >
              {subjects &&
                subjects.map((subject) => (
                  <MenuItem key={subject.value} value={subject.value}>
                    {subject.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          {/* Subject Subtype Dropdown */}
          <FormControl fullWidth disabled={!selectedSubject}>
            <InputLabel>Subject Subtype</InputLabel>
            <Select
              value={selectedSubjectSubtype}
              label="Subject Subtype"
              disabled={!selectedEducationLevel || !selectedExamBoard || !selectedSubject || !subjectSubtypes}
              onChange={(e) => {
                setSelectedSubjectSubtype(e.target.value);
                setSelectedResourceType("");
              }}
            >
              {subjectSubtypes &&
                subjectSubtypes.map((subtype) => (
                  <MenuItem key={subtype.id} value={subtype.id}>
                    {subtype.tags?.join(" - ")} 
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          {/* Resource Type Dropdown */}
          <FormControl fullWidth disabled={!selectedSubjectSubtype}>
            <InputLabel>Resource Type</InputLabel>
            <Select
              value={selectedResourceType}
              disabled={
                !selectedEducationLevel || !selectedExamBoard || !selectedSubject || !selectedSubjectSubtype || !resourceTypes
              }
              label="Resource Type"
              onChange={(e) => setSelectedResourceType(e.target.value)}
            >
              {resourceTypes &&
                Object.keys(resourceTypes).map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          {/* Submit Button */}
          <Button type="submit" variant="contained" disabled={!selectedResourceType}>
            Get Resources
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
