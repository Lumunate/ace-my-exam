"use client";

import { Accordion, AccordionDetails, AccordionSummary, IconButton, styled, Typography } from "@mui/material";

export const ChapterHeading = styled(AccordionSummary)(({ theme }) => ({
  color: "#000",
  fontSize: "1.8rem",
  fontWeight: 700,
  fontFamily: "Jost, sans-serif",
  border: "none",
}));

export const RessourcesTableHeading = styled(AccordionSummary)(({ theme }) => ({
  color: "#000",
  fontSize: "20px",
  fontWeight: 600,
  fontFamily: "Jost, sans-serif",
  border: "none",
  padding: "15px 0",
}));

export const TopicHeading = styled(AccordionSummary)(({ theme }) => ({
  color: "#000",
  fontSize: "1.6rem",
  fontWeight: 500,
  fontFamily: "Jost, sans-serif",
  border: "none",
}));

export const CollapseContainer = styled(Accordion)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: "transparent",
}));

export const InnerCollapse = styled(AccordionDetails)(({ theme }) => ({
  marginLeft: "4rem",
}));

export const SubtopicHeading = styled(Typography)(({ theme }) => ({
  color: "rgba(128, 128, 128, 1)",
  fontSize: "16px",
  fontWeight: 400,
  fontFamily: "Jost, sans-serif",
  border: "none",
  padding: "15px 0",
}));

export const DownloadIconButton = styled(IconButton)(({ theme }) => ({
  
  color: "#CCC",
  fontSize: "20px",
  fontWeight: 400,
  fontFamily: "Jost, sans-serif",
  border: "none",
  padding: "15px 0",
}));
