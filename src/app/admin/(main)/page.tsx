import { Box, Grid2 } from '@mui/material';

import { StatCardHeading, StatCardValue, StatsCard } from '../../../features/home/stats/Stats.style';

interface StatItem {
  name: string;
  value: string;
  subTitle: string;
  showPlus?: boolean;
}

const stats: StatItem[] = [
  {
    name: 'Revision Notes',
    value: '15',
    subTitle: 'Uploaded',
    showPlus: true,
  },
  {
    name: 'Topical Exam Questions',
    value: '0',
    subTitle: 'Uploaded',
    showPlus: true,
  },
  {
    name: 'Past Papers',
    value: '0',
    subTitle: 'Uploaded',
    showPlus: true, 
  },
];

const Page = () => {
  return (
    <Box sx={{margin: '1rem 10%'}}>
      <Grid2 container columnSpacing={{ xs: '8px', md: '24px', lg: '48px' }} columns={24}>
        {stats.map((stat, index) => (
          <Grid2 size={{ xs: 8 }} key={index}>
            <StatsCard>
              <StatCardHeading variant="h4">{stat.name}</StatCardHeading>
              <StatCardValue
                variant="h2"
              >
                0
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
