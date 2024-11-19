'use client';

import { Accordion, AccordionDetails, AccordionSummary, IconButton, styled, Typography } from '@mui/material';

export const ChapterHeading = styled(AccordionSummary)(() => ({
  color: '#000',
  fontSize: '1.8rem',
  fontWeight: 700,
  fontFamily: 'Jost, sans-serif',
  border: 'none',
}));

export const RessourcesTableHeading = styled(AccordionSummary)(() => ({
  color: '#000',
  fontSize: '20px',
  fontWeight: 600,
  fontFamily: 'Jost, sans-serif',
  border: 'none',
  padding: '15px 0',
}));

export const TopicHeading = styled(AccordionSummary)(() => ({
  color: '#000',
  fontSize: '1.6rem',
  fontWeight: 500,
  fontFamily: 'Jost, sans-serif',
  border: 'none',
}));

export const CollapseContainer = styled(Accordion)(() => ({
  boxShadow: 'none',
  backgroundColor: 'transparent',
}));

export const InnerCollapse = styled(AccordionDetails)(() => ({
  marginLeft: '4rem',
}));

export const SubtopicHeading = styled(Typography)(() => ({
  color: 'rgba(128, 128, 128, 1)',
  fontSize: '16px',
  fontWeight: 400,
  fontFamily: 'Jost, sans-serif',
  border: 'none',
  padding: '15px 0',
}));

export const DownloadIconButton = styled(IconButton)(() => ({
  color: '#CCC',
  fontSize: '20px',
  fontWeight: 400,
  fontFamily: 'Jost, sans-serif',
  border: 'none',
  padding: '15px 0',
}));
