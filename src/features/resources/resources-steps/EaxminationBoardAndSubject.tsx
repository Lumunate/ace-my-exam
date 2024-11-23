import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';

import ExaminationBoard from './ExaminationBoard';
import Subject from './Subject';
import { ResourcesPara, ResourcesSubHeading } from '../../../app/(main)/resources/Resources.style';

const ExaminationBoardAndSubject = () => {
  return (
    <Grid
      sx={{
        width: '100%',
      }}
      justifyContent="space-between"
      container
      columns={12}
      columnSpacing={'30px'}
    >
      <Grid
        size={{
          xs: 12,
          sm: 6,
          xl: 5
        }}
      >
        <Box sx={{ my: { xs: '20px', sm: '30px' } }}>
          <ResourcesSubHeading>Examination Board</ResourcesSubHeading>
          <ResourcesPara variant="body1" sx={{ textAlign: 'start' }}>
            Select the Examination Board
          </ResourcesPara>
        </Box>
        <ExaminationBoard />
      </Grid><Grid
        size={{
          xs: 12,
          sm: 6,
          xl: 5
        }}
      >
        <Box sx={{ my: { xs: '20px', sm: '30px' } }}>
          <ResourcesSubHeading>Subject</ResourcesSubHeading>
          <ResourcesPara variant="body1" sx={{ textAlign: 'start' }}>
              Select the Subject
          </ResourcesPara>
        </Box>
        <Subject />
      </Grid>
    </Grid>
  );
};

export default ExaminationBoardAndSubject;
