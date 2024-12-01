'use client';
import { Box, Grid2 } from '@mui/material';
import { useState } from 'react';

import { IResourceCounts } from 'app/api/resources/stats/count/route';
import { useSnackbar } from 'contexts/SnackbarContext';
import useResourceCounts from 'hooks/resources/useResourceCounts';

import { StatCardHeading, StatCardValue, StatsCard } from '../../../features/home/stats/Stats.style';

interface StatItem {
  name: string;
  value: string;
  subTitle: string;
  showPlus?: boolean;
}

const Page = () => {
  const { showSnackbar } = useSnackbar();

  const [stats, setStats] = useState<Record<string, StatItem>>({
    pastPapers: {
      name: 'Revision Notes',
      value: '0',
      subTitle: 'Uploaded',
      showPlus: true,
    },
    topicalQuestions: {
      name: 'Topical Exam Questions',
      value: '0',
      subTitle: 'Uploaded',
      showPlus: true,
    },
    revisionNotes: {
      name: 'Past Papers',
      value: '0',
      subTitle: 'Uploaded',
      showPlus: true,
    },
  });

  const onSuccess = (data: IResourceCounts) => {
    setStats((prevStats) => {
      const updatedStats = { ...prevStats };

      Object.keys(updatedStats).forEach((key) => {
        updatedStats[key].value = (data as unknown as Record<string, number>)[key].toString();
      });

      return updatedStats;
    });
  };

  const onError = (_error: unknown) => {
    showSnackbar('An error occurred while fetching resource counts');
  };

  useResourceCounts(onSuccess, onError);

  return (
    <Box sx={{margin: '1rem 10%'}}>
      <Grid2 container columnSpacing={{ xs: '8px', md: '24px', lg: '48px' }} columns={24}>
        {Object.values(stats).map((stat, index) => (
          <Grid2 size={{ xs: 8 }} key={index}>
            <StatsCard>
              <StatCardHeading variant="h4">{stat.name}</StatCardHeading>
              <StatCardValue
                variant="h2"
              >
                {stat.value}
              </StatCardValue>
              <StatCardHeading variant="h4">{stat.subTitle}</StatCardHeading>
            </StatsCard>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Page;
