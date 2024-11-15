import Grid from "@mui/material/Grid";
import React from 'react'
import ExaminationBoard from './ExaminationBoard'
import Subject from './Subject'
import { Box } from "@mui/material";
import { ResourcesPara, ResourcesSubHeading } from "@/app/(main)/resources/Resources.style";

const ExaminationBoardAndSubject = () => {
  return (
    <Grid
      sx={{
        width: '100%',
      }}
      gap={2}
      justifyContent="space-between"
      container
      columns={12}
    >
      <Grid xs={5}>
        <Box sx={{ my: { xs: "20px", sm: "30px" } }}>
          <ResourcesSubHeading>Examination Board</ResourcesSubHeading>
          <ResourcesPara variant="body1" sx={{ textAlign: "start" }}>
            Select the Examination Board
          </ResourcesPara>
        </Box>
        <ExaminationBoard />
      </Grid>
      <Grid xs={5}>
        <Box sx={{ my: { xs: "20px", sm: "30px" } }}>
          <ResourcesSubHeading>Subject</ResourcesSubHeading>
          <ResourcesPara variant="body1" sx={{ textAlign: "start" }}>
            Select the Subject
          </ResourcesPara>
        </Box>
        <Subject />
      </Grid>
    </Grid>
  )
}

export default ExaminationBoardAndSubject