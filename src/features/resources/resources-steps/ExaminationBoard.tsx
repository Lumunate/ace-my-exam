'use client';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import useMultiStepForm from '@/hooks/useMultiStepper';

import { ResourcesCard, ResourcesCardSmall } from '../ResourcesSteps.style';
import { useGetExamBoards } from '@/hooks/resources/useReferenceData';

interface BoardOption {
  name: string;
  imageUrl: string;
}

const boardImages: Record<string, string> = {
  AQA: '/resources/AQA-LOGO.svg',
  CAMBRIDGE: '/resources/CIE.svg',
  EDEXCEL: '/resources/edexcel-Logo.svg',
  EDEXCEL_INTERNATIONAL: '/resources/edexcel-internationnal.png',
  ISEB: '/resources/ISEB.svg',
  OCR: '/resources/OCR-logo.svg',
  OCR_21: '/resources/ocr-21st.png',
  OCR_A: '/resources/ocr-a.png',
  OCR_B: '/resources/ocr-b.png',
  OCR_GATEWAY: '/resources/ocr-gateway.png',
  SCHOOL: '/resources/school.svg',
};

const ExaminationBoard: React.FC = () => {
  const { selectOption, selectedOptions } = useMultiStepForm();
  const selectedResource = selectedOptions[1.5] || selectedOptions[1];
  const selectedExaminationBoard = selectedOptions[2];
  const { data: boardOptions, isLoading } = useGetExamBoards(selectedResource);

  if (isLoading || !boardOptions) return <div>Loading...</div>;

  return (
    <Grid
      container
      spacing={'20px'}
      justifyContent={'center'}
      columns={12}
    >
      {boardOptions.map((board) => (
        <Grid
          size={{
            xs: 24,
            sm: 12,
            md: 8,
            lg: 8,
          }}
          key={board}
        >
          <ResourcesCardSmall
            onClick={() => selectOption(board)}
            sx={{
              outline: selectedExaminationBoard === board ? '2px solid #DA9694' : 'unset',
            }}
          >
              <Image
              src={boardImages[board]}
              alt={board ?? ''}
              width={82}
              height={22}
              />
          </ResourcesCardSmall>
        </Grid>
      ))}
    </Grid>
  );
};

export default ExaminationBoard;
