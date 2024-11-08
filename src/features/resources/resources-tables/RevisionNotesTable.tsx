'use client';

import { TableBody, TableHead, TableRow, TableCell, IconButton, Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import { StyledLink, StyledTable, ResourcesTableContainer, TablePara } from '../ResourcesSteps.style';

const revisionNotesData = [
  { name: 'Chapter 1: Introduction to Algebra', topic: 'Number Toolkit', fileUrl: '' },
  { name: 'Chapter 1: Introduction to Algebra', topic: 'Number Toolkit', fileUrl: '' },
  { name: 'Chapter 1: Introduction to Algebra', topic: 'Number Toolkit', fileUrl: '' },
  { name: 'Chapter 1: Introduction to Algebra', topic: 'Number Toolkit', fileUrl: '' },
  { name: 'Chapter 1: Introduction to Algebra', topic: 'Number Toolkit', fileUrl: '' },
  { name: 'Chapter 1: Introduction to Algebra', topic: 'Number Toolkit', fileUrl: '' },

];

const RevisionNotesTable: React.FC = () => {
  const handleDownload = (fileUrl: string) => {
    const link = document.createElement('a');

    link.href = fileUrl;
    link.download = fileUrl.split('/').pop() || 'download.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ResourcesTableContainer>
      <StyledTable sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Topic</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {revisionNotesData.map((material, index) => (
            <TableRow key={index}>
              <TableCell>{material.name}</TableCell>
              <TableCell><TablePara>{material.topic}</TablePara></TableCell>
              <TableCell align="center">
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'end'}}>
                  <IconButton onClick={() => handleDownload(material.fileUrl)}>
                    <Image src="/icons/downloadIcon.svg" alt="Download Icon" width={17} height={17} />
                  </IconButton>
                  <StyledLink onClick={() => handleDownload(material.fileUrl)}>Download</StyledLink>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </ResourcesTableContainer>
  );
};

export default RevisionNotesTable;