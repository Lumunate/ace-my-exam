import { TableBody, TableHead, TableRow, IconButton, TableCell } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import { ResourcesPara } from '@/app/(main)/resources/Resources.style';

import { StyledLink, StyledTable, ResourcesTableContainer, TablePara  } from './ResourcesSteps.style';
import { ExaminationBoardHeading } from './ResourcesSteps.style';

const materials = [
  { name: 'Chapter 1: Introduction to Algebra', topic: 'Number Toolkit', fileUrl: '/materials/algebra.pdf' },
  { name: 'Chapter 2: Functions and Graphs', topic: 'Number Toolkit', fileUrl: '/materials/functions.pdf' },
  { name: 'Chapter 3: Calculus Basics', topic: 'Number Toolkit', fileUrl: '/materials/calculus.pdf' },
  { name: 'Chapter 4: Geometry Essentials', topic: 'Number Toolkit', fileUrl: '/materials/geometry.pdf' },
  { name: 'Chapter 5: Probability and Statistics', topic: 'Number Toolkit', fileUrl: '/materials/probability.pdf' },
];

const DownloadMaterialStep: React.FC = () => {
  const handleDownload = (fileUrl: string) => {
    // Trigger the download of the PDF file
    const link = document.createElement('a');

    link.href = fileUrl;
    link.download = fileUrl.split('/').pop() || 'download.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <ExaminationBoardHeading sx={{mt: {xs: '20px', sm: '30', lg: '60px'}}}>Revision Notes</ExaminationBoardHeading>
      <ResourcesPara variant='body1' sx={{ textAlign: 'start', mb: '10px' }}>Select the Content Type</ResourcesPara>
      <ResourcesTableContainer >
        <StyledTable  sx={{ minWidth: 768 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Topic/Type</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {materials.map((material, index) => (
              <TableRow key={index}>
                <TableCell>{material.name}</TableCell>
                <TableCell><TablePara>{material.topic}</TablePara></TableCell>
                <TableCell align="center">
                  <IconButton
                    color="primary"
                    onClick={() => handleDownload(material.fileUrl)}
                  >
                    <Image
                      src='/icons/downloadIcon.svg'
                      alt={'resources Icon'}
                      width={17}
                      height={17}
                    />
                  </IconButton>
                  <StyledLink
                    variant="body2"
                    onClick={() => handleDownload(material.fileUrl)}
                  >
                    Download
                  </StyledLink>
                </TableCell >
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </ResourcesTableContainer>
    </>
  );
};

export default DownloadMaterialStep;
