'use client';

import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import { StyledPagination } from '../../../components/pagination/Pagination.style';

import {
  ChapterHeading,
  CollapseContainer,
  DownloadIconButton,
  InnerCollapse,
  RessourcesTableHeading,
  SubtopicHeading,
  ExpandIconHead
} from './ResourceTables.style';
import { PaginationHead, ResourcesPara, ResourcesSubHeading } from '../../../app/(main)/resources/Resources.style';
import { ContentWithChildren } from '../../../types/content';

const TopicQuestionsTable: React.FC<{ data: ContentWithChildren[]; isLoading: boolean }> = ({ data }) => {
  const handleDownload = (url: string) => {
    const link = document.createElement('a');

    link.href = url;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box>
      <Box sx={{ mt: { xs: '20px', sm: '30px' } }}>
        <ResourcesSubHeading>Topical Questions</ResourcesSubHeading>
        <ResourcesPara variant="body1" sx={{ textAlign: 'start' }}>
          Select the Content
        </ResourcesPara>
      </Box>
      <Box sx={{ overflow: { xs: 'auto', lg: 'hidden' }, width: '100%' }}>
        <Box sx={{ minWidth: 700}}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <RessourcesTableHeading sx={{ flex: '0 0 calc(50%)' }}>Name</RessourcesTableHeading>
              <RessourcesTableHeading sx={{ flex: '0 0 1', textAlign: 'center' }}>Download</RessourcesTableHeading>
              <RessourcesTableHeading sx={{ flex: '0 0 1' }}>Marking Scheme</RessourcesTableHeading>
              <RessourcesTableHeading sx={{ flex: '0 0 1' }}>Answer</RessourcesTableHeading>
            </Box>
          </Box>
          <Box>
            {data.map((topic, index) => (
              <CollapseContainer key={index}>
                <ChapterHeading 
                  expandIcon={
                    <ExpandIconHead>
                      <Image
                        src="/icons/down.svg" 
                        alt="Collapse"
                        width={10}
                        height={10}
                      />
                    </ExpandIconHead>
                  }
                  sx={{maxWidth: '352px'}}
                >
                  {index + 1}. {topic.name}
                </ChapterHeading>

                <InnerCollapse sx={{py: 0, px: '15px', mt: '11px'}}>
                  {topic.children?.map((subtopic) => (
                    <Box key={subtopic.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: '4px', py: '2px'}}>
                      <SubtopicHeading sx={{ flex: '0 0 50%' }}>{subtopic.name}</SubtopicHeading>
                      <DownloadIconButton sx={{ flex: '0 0 16.67%' }} onClick={() => handleDownload(subtopic.name)}>
                        <Image src="/icons/downloadIcon.svg" alt="download" width={20} height={20} />
                      </DownloadIconButton>
                      <DownloadIconButton sx={{ flex: '0 0 16.67%' }} onClick={() => handleDownload(subtopic.name)}>
                        <Image src="/icons/downloadIcon.svg" alt="download" width={20} height={20} />
                      </DownloadIconButton>
                      <DownloadIconButton sx={{ flex: '0 0 16.67%' }} onClick={() => handleDownload(subtopic.name)}>
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
      <PaginationHead
        sx={{
          maxWidth: '485px',
          marginLeft: 'auto',
          mt: '30px'
        }}
      >
        <StyledPagination count={10} />
      </PaginationHead>
    </Box>
  );
};

export default TopicQuestionsTable;
