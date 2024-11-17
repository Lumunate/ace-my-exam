"use client";

import {
  IconButton,
  Box,
} from "@mui/material";
import Image from "next/image";
import React from "react";

import type { Content } from "@/entities";
import { ResourcesPara, ResourcesSubHeading } from "@/app/(main)/resources/Resources.style";
import {
  ChapterHeading,
  CollapseContainer,
  InnerCollapse,
  RessourcesTableHeading,
  SubtopicHeading,
  TopicHeading,
} from "./ResourceTables.style";

const RevisionNotesTable: React.FC<{ data: Content[]; isLoading: boolean }> = ({ data, isLoading }) => {
  const handleDownload = (fileUrl: string) => {
    const link = document.createElement("a");

    link.href = fileUrl;
    link.download = fileUrl.split("/").pop() || "download.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box>
      <Box sx={{ my: { xs: "20px", sm: "30px" } }}>
        <ResourcesSubHeading>Revision Notes</ResourcesSubHeading>
        <ResourcesPara variant="body1" sx={{ textAlign: "start" }}>
          Select the Content
        </ResourcesPara>
      </Box>
      <Box>
        <Box sx={{ minWidth: 700 }}>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <RessourcesTableHeading>Name</RessourcesTableHeading>
              <RessourcesTableHeading>Download</RessourcesTableHeading>
            </Box>
          </Box>
          <Box>
            {data.map((chapter, index) => (
              <CollapseContainer key={index}>
                <ChapterHeading>
                  {index + 1}. {chapter.name}
                </ChapterHeading>

                <InnerCollapse>
                  {chapter.children?.map((topic, index2) => (
                    <CollapseContainer key={index2}>
                      <TopicHeading>
                        {index + 1}.{index2 + 1}. {topic.name}
                      </TopicHeading>

                      <InnerCollapse>
                        {topic.children?.map((subtopic, index) => (
                          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <SubtopicHeading>{subtopic.name}</SubtopicHeading>
                            <IconButton
                              onClick={() => handleDownload(subtopic.name)}
                              sx={{
                                color: "#CCC",
                                fontSize: "20px",
                                fontWeight: 400,
                                fontFamily: "Jost, sans-serif",
                                border: "none",
                                padding: "15px 0",
                              }}
                            >
                              <Image src="/download.svg" alt="download" width={20} height={20} />
                            </IconButton>
                          </Box>
                        ))}
                      </InnerCollapse>
                    </CollapseContainer>
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

export default RevisionNotesTable;
