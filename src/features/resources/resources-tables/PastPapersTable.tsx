'use client';

import { Box } from '@mui/material';
import { PastPaper } from '@prisma/client';
import Image from 'next/image';
import React from 'react';

import {
  ChapterHeading,
  CollapseContainer,
  DownloadIconButton,
  InnerCollapse,
  RessourcesTableHeading,
  SubtopicHeading,
} from './ResourceTables.style';
import { ResourcesPara, ResourcesSubHeading } from '../../../app/(main)/resources/Resources.style';

const PastPapersTable: React.FC<{ data: PastPaper[]; isLoading: boolean }> = ({ data }) => {

  const papersByYear = data.reduce((acc, paper) => {
    if (!acc[paper.year]) {
      acc[paper.year] = [];
    }
    acc[paper.year].push(paper);

    return acc;
  }, {} as Record<string, PastPaper[]>);

  const handleDownload = (fileName: string) => {
    const fileUrl = `/path/to/files/${fileName}.pdf`;
    const link = document.createElement('a');

    link.href = fileUrl;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box>
      <Box sx={{ my: { xs: '20px', sm: '30px' } }}>
        <ResourcesSubHeading>Topical Questions</ResourcesSubHeading>
        <ResourcesPara variant="body1" sx={{ textAlign: 'start' }}>
          Select the Content
        </ResourcesPara>
      </Box>
      <Box>
        <Box sx={{ minWidth: 700 }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <RessourcesTableHeading sx={{ flex: '0 0 calc(50% + 6rem)' }}>Exam</RessourcesTableHeading>
              <RessourcesTableHeading sx={{ flex: '0 0 13.67%', textAlign: 'center' }}>Download</RessourcesTableHeading>
              <RessourcesTableHeading sx={{ flex: '0 0 18.67%' }}>Marking Scheme</RessourcesTableHeading>
              <RessourcesTableHeading sx={{ flex: '0 0 16.67%' }}>Answer</RessourcesTableHeading>
            </Box>
          </Box>
          <Box></Box>
          {Object.keys(papersByYear).map((year: string, index: number) => (
            <CollapseContainer key={index}>
              <ChapterHeading>
                {year}
              </ChapterHeading>

              <InnerCollapse>
                {papersByYear[year].map((paper) => (
                  <Box key={paper.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <SubtopicHeading sx={{ flex: '0 0 50%' }}>{paper.title}</SubtopicHeading>
                    <DownloadIconButton sx={{ flex: '0 0 16.67%' }} onClick={() => handleDownload(paper.title)}>
                      <Image src="/icons/downloadIcon.svg" alt="download" width={20} height={20} />
                    </DownloadIconButton>
                    <DownloadIconButton sx={{ flex: '0 0 16.67%' }} onClick={() => handleDownload(paper.title)}>
                      <Image src="/icons/downloadIcon.svg" alt="download" width={20} height={20} />
                    </DownloadIconButton>
                    <DownloadIconButton sx={{ flex: '0 0 16.67%' }} onClick={() => handleDownload(paper.title)}>
                      <Image src="/icons/downloadIcon.svg" alt="download" width={20} height={20} />
                    </DownloadIconButton>
                  </Box>
                ))}
              </InnerCollapse>
            </CollapseContainer>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PastPapersTable;
