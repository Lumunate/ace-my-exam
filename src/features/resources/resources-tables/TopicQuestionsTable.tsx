"use client";

import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";

import { ResourcesPara, ResourcesSubHeading } from "@/app/(main)/resources/Resources.style";
import {
  ChapterHeading,
  CollapseContainer,
  DownloadIconButton,
  InnerCollapse,
  RessourcesTableHeading,
  SubtopicHeading,
  TopicHeading,
} from "./ResourceTables.style";
import type { Content } from "@/entities";

const TopicQuestionsTable: React.FC<{ data: Content[]; isLoading: boolean }> = ({ data, isLoading }) => {
  const handleDownload = (url: string) => {
    const link = document.createElement("a");

    link.href = url;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box>
      <Box sx={{ my: { xs: "20px", sm: "30px" } }}>
        <ResourcesSubHeading>Topical Questions</ResourcesSubHeading>
        <ResourcesPara variant="body1" sx={{ textAlign: "start" }}>
          Select the Content
        </ResourcesPara>
      </Box>
      <Box>
        <Box sx={{ minWidth: 700 }}>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <RessourcesTableHeading sx={{ flex: '0 0 calc(50% + 6rem)' }}>Name</RessourcesTableHeading>
              <RessourcesTableHeading sx={{ flex: '0 0 13.67%', textAlign: 'center' }}>Download</RessourcesTableHeading>
              <RessourcesTableHeading sx={{ flex: '0 0 18.67%' }}>Marking Scheme</RessourcesTableHeading>
              <RessourcesTableHeading sx={{ flex: '0 0 16.67%' }}>Answer</RessourcesTableHeading>
            </Box>
          </Box>
          <Box>
            {data.map((topic, index) => (
              <CollapseContainer key={index}>
                <ChapterHeading>
                  {index + 1}. {topic.name}
                </ChapterHeading>

                <InnerCollapse>
                  {topic.children?.map((subtopic, index) => (
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
    </Box>
  );
};

export default TopicQuestionsTable;
