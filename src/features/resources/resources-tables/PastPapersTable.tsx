'use client';

import {
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  IconButton,
  Box,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';

import {
  StyledTable,
  ResourcesTableContainer,
  StyledLink,
  TablePara,
} from '../ResourcesSteps.style';

const pastPapersData = [
  {
    exam: 'Mathematics — 9709 — Oct & Nov',
    year: '2001',
    questionPaper: '9709_s02_er',
    markingScheme: '9709_s02_er',
    answer: '9709_s02_er',
  },
  {
    exam: 'Mathematics — 9709 — May & June',
    year: '2001',
    questionPaper: '9709_s02_er',
    markingScheme: '9709_s02_er',
    answer: '9709_s02_er',
  },
  {
    exam: 'Mathematics — 9709 — Oct & Nov',
    year: '2001',
    questionPaper: '9709_s02_er',
    markingScheme: '9709_s02_er',
    answer: '9709_s02_er',
  },
  {
    exam: 'Mathematics — 9709 — Oct & Nov',
    year: '2001',
    questionPaper: '9709_s02_er',
    markingScheme: '9709_s02_er',
    answer: '9709_s02_er',
  },
  {
    exam: 'Mathematics — 9709 — Oct & Nov',
    year: '2001',
    questionPaper: '9709_s02_er',
    markingScheme: '9709_s02_er',
    answer: '9709_s02_er',
  },
  {
    exam: 'Mathematics — 9709 — Oct & Nov',
    year: '2001',
    questionPaper: '9709_s02_er',
    markingScheme: '9709_s02_er',
    answer: '9709_s02_er',
  },
];

const PastPapersTable: React.FC = () => {
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
    <ResourcesTableContainer>
      <StyledTable sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <TableCell>Exam</TableCell>
            <TableCell sx={{ minWidth: '60px' }}>Year</TableCell>
            <TableCell>Question Paper</TableCell>
            <TableCell>Marking Scheme</TableCell>
            <TableCell align="right">Answer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pastPapersData.map((material, index) => (
            <TableRow key={index}>
              <TableCell>{material.exam}</TableCell>
              <TableCell>
                <TablePara>{material.year}</TablePara>
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton
                    onClick={() => handleDownload(material.questionPaper)}
                  >
                    <Image
                      src="/icons/downloadIcon.svg"
                      alt="Download Question Paper Icon"
                      width={17}
                      height={17}
                    />
                  </IconButton>
                  <StyledLink
                    onClick={() => handleDownload(material.questionPaper)}
                  >
                    {material.questionPaper}
                  </StyledLink>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton
                    onClick={() => handleDownload(material.markingScheme)}
                  >
                    <Image
                      src="/icons/downloadIcon.svg"
                      alt="Download Marking Scheme Icon"
                      width={17}
                      height={17}
                    />
                  </IconButton>
                  <StyledLink
                    onClick={() => handleDownload(material.markingScheme)}
                  >
                    {material.markingScheme}
                  </StyledLink>
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'end',
                  }}
                >
                  <IconButton onClick={() => handleDownload(material.answer)}>
                    <Image
                      src="/icons/downloadIcon.svg"
                      alt="Download Answer Icon"
                      width={17}
                      height={17}
                    />
                  </IconButton>
                  <StyledLink onClick={() => handleDownload(material.answer)}>
                    {material.answer}
                  </StyledLink>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </ResourcesTableContainer>
  );
};

export default PastPapersTable;
