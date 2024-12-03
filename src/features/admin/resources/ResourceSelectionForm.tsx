'use client';
import { Box, FormControl, InputLabel, Select, MenuItem, Button, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { getDisplayOptions } from '../../../features/resources/resources-steps/ResourceType';
import {
  useGetEducationLevels,
  useGetExamBoards,
  useGetSubjects,
  useGetUniqueSubjects,
} from '../../../hooks/resources/useReferenceData';
import { ResourceType } from '../../../types/resources';

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: '1.6rem',
  color: theme.palette.text.primary,
}));

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
  const [selectedSubjectSubtype, setSelectedSubjectSubtype] = useState({ id: '', tags: [], name: '' });
  const [selectedResourceType, setSelectedResourceType] = useState('');

  const { data: educationLevels } = useGetEducationLevels();
  const { data: examBoards, refetch: examBoardsRefetch } = useGetExamBoards(selectedEducationLevel);
  const { data: subjects, refetch: subjectsRefetch } = useGetUniqueSubjects(selectedEducationLevel, selectedExamBoard);
  const { data: subjectSubtypes, refetch: subjectSubtypesRefetch } = useGetSubjects(
    selectedEducationLevel,
    selectedExamBoard,
    selectedSubject
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();

    H_setSelectedSubjectSubtype(selectedSubjectSubtype.id);
    H_setSelectedResourceType(selectedResourceType);
  };

  const { past_paper_show, topic_question_show, revision_notes_show } = getDisplayOptions(
    { name: '', value: selectedEducationLevel, icon: '' },
    { name: '', value: selectedExamBoard, icon: '' },
    { name: selectedSubjectSubtype.name, value: selectedSubjectSubtype.id, icon: '' },  
    { name: '', value: selectedSubject, icon: '' },
    { name: selectedSubjectSubtype.name, id: selectedSubjectSubtype.id, tags: [] }
  );

  useEffect(() => {
    examBoardsRefetch();
  }, [selectedEducationLevel]);
  useEffect(() => {
    subjectsRefetch();
  }, [selectedExamBoard]);
  useEffect(() => {
    subjectSubtypesRefetch();
  }, [selectedSubject, selectedSubjectSubtype, selectedResourceType]);

  // Reset form when education level changes
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEducationLevelChange = (value: any) => {
    setSelectedEducationLevel(value);
    setSelectedExamBoard('');
    setSelectedSubject('');
    setSelectedSubjectSubtype({ id: '', tags: [], name: '' });
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
                  <StyledMenuItem key={level.value} value={level.value}>
                    {level.name}
                  </StyledMenuItem>
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
                setSelectedSubjectSubtype({ id: '', tags: [], name: '' });
                setSelectedResourceType('');
              }}
            >
              {examBoards &&
                examBoards.map((board) => (
                  <StyledMenuItem key={board?.value} value={board?.value}>
                    {board?.name}
                  </StyledMenuItem>
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
                setSelectedSubjectSubtype({ id: '', tags: [], name: '' });
                setSelectedResourceType('');
              }}
            >
              {subjects &&
                subjects.map((subject) => (
                  <StyledMenuItem key={subject.value} value={subject.value}>
                    {subject.name}
                  </StyledMenuItem>
                ))}
            </Select>
          </FormControl>

          {/* Subject Subtype Dropdown */}
          <FormControl fullWidth disabled={!selectedSubject}>
            <InputLabel>Subject Subtype</InputLabel>
            <Select
              value={selectedSubjectSubtype.id}
              label="Subject Subtype"
              disabled={!selectedEducationLevel || !selectedExamBoard || !selectedSubject || !subjectSubtypes}
              onChange={(e) => {
                const selectedSubtype = subjectSubtypes?.find((subtype) => subtype?.id === parseInt(e.target.value));

                setSelectedSubjectSubtype({
                  id: e.target.value as string,
                  tags: [],
                  name: selectedSubtype
                    ? selectedSubtype.tags
                      .map((tag) => {
                        if (tag === 'YEAR_1') {
                          return 'AS Level';
                        } else if (tag === 'YEAR_2') {
                          return 'A Level';
                        } else {
                          return tag;
                        }
                      })
                      .join(' - ')
                    : '',
                });
                setSelectedResourceType('');
              }}
            >
              {subjectSubtypes &&
                subjectSubtypes.map((subtype) => (
                  <StyledMenuItem key={subtype.id} value={subtype.id}>
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
                  </StyledMenuItem>
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
              {past_paper_show && <StyledMenuItem value={ResourceType.PAST_PAPER}>Past Paper</StyledMenuItem>}
              {topic_question_show && <StyledMenuItem value={ResourceType.TOPIC_QUESTIONS}>Topical Questions</StyledMenuItem>}
              {revision_notes_show && <StyledMenuItem value={ResourceType.REVISION_NOTES}>Revision Notes</StyledMenuItem>}
            </Select>
          </FormControl>

          {/* Submit Button */}
          <Button type="submit" sx={{ fontSize: '1.4rem' }} onClick={handleSubmit} variant="contained" disabled={!selectedResourceType}>
            Get Resources
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
