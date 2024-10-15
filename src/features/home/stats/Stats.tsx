import Grid from '@mui/material/Grid2';

import { AppContentWrapper } from '@/components/common/Global.style';
import { StatCardHeading, StatCardValue, StatsCard, StatsCardHeah, StatsContentWrapper } from '@/features/home/stats/Stats.style';

interface StatItem {
  name: string;
  value: string;
  subTitle: string;
}

const stats: StatItem[] = [
  {
    name: 'Backed by',
    value: '15+',
    subTitle: 'Years of Experience'
  },
  {
    name: 'Expertise in',
    value: '49+',
    subTitle: 'Entrance and Scholarships Exams'
  },
  {
    name: 'With Over',
    value: '3000+',
    subTitle: 'Students Tutored'
  },
];

const Stats: React.FC = () => {
  return (
    <StatsContentWrapper>
      <AppContentWrapper>
        <StatsCardHeah>
          <Grid container columnSpacing={'22px'} columns={24}>
            {stats.map((stat, index) => (
              <Grid size={{ xs: 12, md: 8 }} key={index}>
                <StatsCard>
                  <StatCardHeading variant="h4">{stat.name}</StatCardHeading>
                  <StatCardValue variant="h2">{stat.value}</StatCardValue>
                  <StatCardHeading variant="h4">{stat.subTitle}</StatCardHeading>
                </StatsCard>
              </Grid>
            ))}
          </Grid>
        </StatsCardHeah>
      </AppContentWrapper>
    </StatsContentWrapper>
  );
};

export default Stats;
