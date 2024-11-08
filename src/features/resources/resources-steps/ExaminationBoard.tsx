'use client';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import useMultiStepForm from '@/hooks/useMultiStepper';

import { ResourcesCard } from '../ResourcesSteps.style';

interface BoardOption {
  name: string;
  imageUrl: string;
}

const boardData: Record<string, BoardOption[]> = {
  'A levels': [
    { name: 'Edexcel', imageUrl: '/resources/edexcel-Logo.svg' },
    { name: 'AQA', imageUrl: '/resources/AQA-LOGO.svg' },
    { name: 'OCR-A', imageUrl: '/resources/ocr-a.png' },
    { name: 'OCR-B', imageUrl: '/resources/ocr-b.png' },
    { name: 'Cambridge', imageUrl: '/resources/CIE.svg' },
    { name: 'Edexcel International', imageUrl: '/resources/edexcel-internationnal.png' },
  ],
  GCSE: [
    { name: 'Edexcel', imageUrl: '/resources/edexcel-Logo.svg' },
    { name: 'AQA', imageUrl: '/resources/AQA-LOGO.svg' },
    { name: 'OCR', imageUrl: '/resources/OCR-logo.svg' },
    { name: 'Wjec', imageUrl: '/resources/wjec.svg' },
    { name: 'OCR-Gateway', imageUrl: '/resources/ocr-gateway.png' },
    { name: 'OCR-21st Century', imageUrl: '/resources/ocr-21st.png' },
  ],
  IGCSE: [
    { name: 'Edexcel', imageUrl: '/resources/edexcel-Logo.svg' },
    { name: 'Cambridge', imageUrl: '/resources/CIE.svg' },
    { name: 'OxfordAQA', imageUrl: '/resources/OxfordAQA.svg' },
  ],
  KS3: [
    { name: 'Edexcel', imageUrl: '/resources/edexcel-Logo.svg' },
    { name: 'Cambridge', imageUrl: '/resources/CIE.svg' },
    { name: 'OxfordAQA', imageUrl: '/resources/OxfordAQA.svg' },
  ],
  'Primary School': [
    { name: 'ISEB', imageUrl: '/resources/ISEB.svg' },
    { name: 'School', imageUrl: '/resources/school.svg' },
  ],
  'Secondary School': [
    { name: 'ISEB', imageUrl: '/resources/ISEB.svg' },
    { name: 'School', imageUrl: '/resources/school.svg' },
  ],
  'Higher Secondary': [
    { name: 'ISEB', imageUrl: '/resources/ISEB.svg' },
    { name: 'School', imageUrl: '/resources/school.svg' },
  ],
  Scholarship: [
    { name: 'ISEB', imageUrl: '/resources/ISEB.svg' },
    { name: 'School', imageUrl: '/resources/school.svg' },
  ],
};

const ExaminationBoard: React.FC = () => {
  const { selectOption, selectedOptions } = useMultiStepForm();
  const selectedResource = selectedOptions[1.5] || selectedOptions[1];
  const selectedExaminationBoard = selectedOptions[2];
  const [boardOptions, setBoardOptions] = useState<BoardOption[]>([]);

  useEffect(() => {
    if (selectedResource && selectedResource in boardData) {
      setBoardOptions(boardData[selectedResource]);
    } else {
      setBoardOptions([]);
    }
  }, [selectedResource]);

  return (
    <Grid
      container
      spacing={'20px'}
      sx={{ mb: '40px', maxWidth: '718px', mx: 'auto' }}
      justifyContent={'center'}
      columns={24}
    >
      {boardOptions.map((board) => (
        <Grid
          size={{
            xs: 24,
            sm: 12,
            md: 8,
            lg: 8,
          }}
          key={board.name}
        >
          <ResourcesCard
            onClick={() => selectOption(board.name)}
            height='124px'
            sx={{
              outline: selectedExaminationBoard === board.name ? '2px solid #DA9694' : 'unset',
            }}
          >
            <Box sx={{width: '70%', height: '80px', mx: 'auto', position: 'relative'}}>
              <Image
                src={board?.imageUrl}
                alt={board?.name ?? ''}
                layout='fill' objectFit='contain'
              />
            </Box>
          </ResourcesCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default ExaminationBoard;
