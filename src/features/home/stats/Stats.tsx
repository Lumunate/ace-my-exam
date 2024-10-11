import { Box } from '@mui/material';

import { StatCardDivider, StatHeading, StatsCardsContainer, StatsContainer, StatsContentWrapper, StatValue } from './Stats.style';

const stats = [
  {
    name: 'Students',
    value: '2500+',
  },
  {
    name: 'Courses',
    value: '100+',
  },
  {
    name: 'Tutors',
    value: '50+',
  },
];

const Stats = () => {
  return (
    <StatsContentWrapper>
      <StatsContainer>
        <StatsCardsContainer>
          {stats.map((stat, index) => (
            <>
              <Box key={index}>
                <StatHeading>{stat.name}</StatHeading>
                <StatValue>{stat.value}</StatValue>
              </Box>

              {index !== stats.length - 1 && <StatCardDivider />}
            </>
          ))}
        </StatsCardsContainer>
      </StatsContainer>
    </StatsContentWrapper>
  );
};

export default Stats;
