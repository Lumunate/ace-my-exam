'use client';

import {
  Box,
  IconButton,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';

import {
  ResourcesTableContainer,
  StyledLink,
  StyledTable,
} from '../ResourcesSteps.style';

const topicQuestionsData = [
  {
    topic: '2.1 Algebra & Functions',
    question: 'Question 01',
    markingScheme: 'Marking Scheme 01',
    answer: 'Answer 01',
  },
  {
    topic: '2.1 Algebra & Functions',
    question: 'Question 02',
    markingScheme: 'Marking Scheme 02',
    answer: 'Answer 02',
  },
  {
    topic: '2.1 Algebra & Functions',
    question: 'Question 03',
    markingScheme: 'Marking Scheme 03',
    answer: 'Answer 03',
  },
  {
    topic: '2.1 Algebra & Functions',
    question: 'Question 04',
    markingScheme: 'Marking Scheme 04',
    answer: 'Answer 04',
  },
  {
    topic: '2.1 Algebra & Functions',
    question: 'Question 05',
    markingScheme: 'Marking Scheme 05',
    answer: 'Answer 05',
  },
  {
    topic: '2.1 Algebra & Functions',
    question: 'Question 06',
    markingScheme: 'Marking Scheme 06',
    answer: 'Answer 06',
  },
];

const TopicQuestionsTable: React.FC = () => {
  const handleDownload = (url: string) => {
    const link = document.createElement('a');

    link.href = url;
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
            <TableCell>Topics</TableCell>
            <TableCell>Question</TableCell>
            <TableCell>Marking Scheme</TableCell>
            <TableCell align="right">Answer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {topicQuestionsData.map((material, index) => (
            <TableRow key={index}>
              <TableCell>
                {material.topic}
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton
                    onClick={() =>
                      handleDownload(
                        `/path/to/question/${material.question}.pdf`
                      )
                    }
                  >
                    <Image
                      src="/icons/downloadIcon.svg"
                      alt="Download Question Icon"
                      width={17}
                      height={17}
                    />
                  </IconButton>
                  <StyledLink
                    onClick={() =>
                      handleDownload(
                        `/path/to/question/${material.question}.pdf`
                      )
                    }
                  >
                    {material.question}
                  </StyledLink>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton
                    onClick={() =>
                      handleDownload(
                        `/path/to/markingScheme/${material.markingScheme}.pdf`
                      )
                    }
                  >
                    <Image
                      src="/icons/downloadIcon.svg"
                      alt="Download Marking Scheme Icon"
                      width={17}
                      height={17}
                    />
                  </IconButton>
                  <StyledLink
                    onClick={() =>
                      handleDownload(
                        `/path/to/markingScheme/${material.markingScheme}.pdf`
                      )
                    }
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
                  <IconButton
                    onClick={() =>
                      handleDownload(`/path/to/answer/${material.answer}.pdf`)
                    }
                  >
                    <Image
                      src="/icons/downloadIcon.svg"
                      alt="Download Answer Icon"
                      width={17}
                      height={17}
                    />
                  </IconButton>
                  <StyledLink
                    onClick={() =>
                      handleDownload(`/path/to/answer/${material.answer}.pdf`)
                    }
                  >
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

export default TopicQuestionsTable;
