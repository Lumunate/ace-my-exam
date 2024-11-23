'use client';
import { Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { getDisplayOptions } from '../../../features/resources/resources-steps/ResourceType';
import {
  useGetEducationLevels,
  useGetExamBoards,
  useGetSubjects,
  useGetUniqueSubjects,
} from '../../../hooks/resources/useReferenceData';
import { ResourceType } from '../../../types/resources';

interface IResourceSelectionFormProps {
  H_selectedSubjectSubtype: string;
  H_setSelectedSubjectSubtype: React.Dispatch<React.SetStateAction<string>>;
  H_selectedResourceType: string;
  H_setSelectedResourceType: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (educationLevel: string, examBoard: string, subject: string, subjectSubtype: string, resourceType: string) => void;
}

export default function ResourceSelectionForm({
  H_setSelectedSubjectSubtype,
  H_setSelectedResourceType,
}: IResourceSelectionFormProps) {
  // State for tracking selected values
  const [selectedEducationLevel, setSelectedEducationLevel] = useState('');
  const [selectedExamBoard, setSelectedExamBoard] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedSubjectSubtype, setSelectedSubjectSubtype] = useState('');
  const [selectedResourceType, setSelectedResourceType] = useState('');

  // Fetch data using custom hooks
  const {
    data: educationLevels,
  //  isLoading: _educationLevelsIsLoading,
  // refetch: educationLevelsRefetch
  } = useGetEducationLevels();
  const {
    data: examBoards,
    // isLoading: _examBoardsIsLoading,
    refetch: examBoardsRefetch,
  } = useGetExamBoards(selectedEducationLevel);
  const {
    data: subjects,
    // isLoading: _subjectsIsLoading,
    refetch: subjectsRefetch,
  } = useGetUniqueSubjects(selectedEducationLevel, selectedExamBoard);
  const {
    data: subjectSubtypes,
    // isLoading: _subjectSubtypesIsLoading,
    refetch: subjectSubtypesRefetch,
  } = useGetSubjects(selectedEducationLevel, selectedExamBoard, selectedSubject);

  // Handle form submission
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();

    H_setSelectedSubjectSubtype(selectedSubjectSubtype);
    H_setSelectedResourceType(selectedResourceType);
  };

  const { past_paper_show, topic_question_show, revision_notes_show } = getDisplayOptions(
    { name: '', value: selectedEducationLevel, icon: '' },
    { name: '', value: selectedExamBoard, icon: '' },
    { name: '', value: selectedSubjectSubtype, icon: '' },
    { name: '', value: selectedSubject, icon: '' },
    { name: '', value: selectedSubjectSubtype, icon: '' },
  );

  useEffect(() => {
    examBoardsRefetch();
    subjectsRefetch();
    subjectSubtypesRefetch();
  }, [selectedEducationLevel, selectedExamBoard, selectedSubject, selectedSubjectSubtype, selectedResourceType]);

  // Reset form when education level changes
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEducationLevelChange = (value: any) => {
    setSelectedEducationLevel(value);
    setSelectedExamBoard('');
    setSelectedSubject('');
    setSelectedSubjectSubtype('');
    setSelectedResourceType('');
  };

  return (
    <Box>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Box sx={{ display: 'flex', gap: '20px' }}>
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
                setSelectedSubject('');
                setSelectedSubjectSubtype('');
                setSelectedResourceType('');
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
                setSelectedSubjectSubtype('');
                setSelectedResourceType('');
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
                setSelectedResourceType('');
              }}
            >
              {subjectSubtypes &&
                subjectSubtypes.map((subtype) => (
                  <MenuItem key={subtype.id} value={subtype.id}>
                    {subtype.tags
                      ?.map((tag) => {
                        if (tag === 'YEAR_1') {
                          return 'AS Level';
                        } else if (tag === 'YEAR_2') {
                          return 'A Level';
                        } else {
                          return tag;
                        }
                      })
                      .join(' - ')}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          {/* Resource Type Dropdown */}
          <FormControl fullWidth disabled={!selectedSubjectSubtype}>
            <InputLabel>Resource Type</InputLabel>
            <Select
              value={selectedResourceType}
              disabled={!selectedEducationLevel || !selectedExamBoard || !selectedSubject || !selectedSubjectSubtype}
              label="Resource Type"
              onChange={(e) => setSelectedResourceType(e.target.value)}
            >
              {past_paper_show && <MenuItem value={ResourceType.PAST_PAPER}>Past Paper</MenuItem>}
              {topic_question_show && <MenuItem value={ResourceType.TOPIC_QUESTIONS}>Topical Questions</MenuItem>}
              {revision_notes_show && <MenuItem value={ResourceType.REVISION_NOTES}>Revision Notes</MenuItem>}
            </Select>
          </FormControl>

          {/* Submit Button */}
          <Button type="submit" onClick={handleSubmit} variant="contained" disabled={!selectedResourceType}>
            Get Resources
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
