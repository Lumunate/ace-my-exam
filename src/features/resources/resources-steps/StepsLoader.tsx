import { Grid2 } from '@mui/material';
import React from 'react';

import {  ResourcesCardSmallDisabled, ResourcesCardSmallLoading } from '../ResourcesSteps.style';

export const StepsLoader = () => {
  return (
    <Grid2 container spacing={'20px'} columns={{
      sm: 6,
      md: 12,
    }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Grid2
          size={{
            xs: 12,
            sm: 6,
          }}
          key={i}
        >
          <ResourcesCardSmallLoading>&nbsp;</ResourcesCardSmallLoading>
        </Grid2>
      ))}
    </Grid2>
  );
};

export const StepsDisabled = () => {
  return (
    <Grid2 container spacing={'20px'} columns={{
      sm: 6,
      md: 12,
    }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Grid2
          size={{
            xs: 12,
            sm: 6,
          }}
          key={i}
        >
          <ResourcesCardSmallDisabled >&nbsp;</ResourcesCardSmallDisabled>
        </Grid2>
      ))}
    </Grid2>
  );
};
