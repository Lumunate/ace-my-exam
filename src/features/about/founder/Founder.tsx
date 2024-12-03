import Grid from '@mui/material/Grid2';
import Image from 'next/image';

import {
  FounderContent,
  FounderContentContainer,
  FounderHeading,
  FounderSubHeading,
  FounderWrapper,
  FounderList,
  FounderListItem,
  FounderImgHead,
  FounderCard,
  FounderCardInnerHead,
  FounderCardDivider,
  FounderCardHeading,
  FounderCardListText,
  FounderHeadingTwo,
} from './Founder.style';
import FadeIn from '../../../components/animations/FadeIn';
import SectionHeading from '../../../components/section-heading/SectionHeading';

const AboutFounder: React.FC = () => {
  const stats = [
    '99% of students improved by 2 to 5 grades.',
    'Many gained admission to top schools.',
    'Focus on both grades and intellectual growth.',
    'Track record of long-term academic success.',
  ];

  const philosophy = [
    'Unlock your full potential with personalized support.',
    'Lessons are customized to fit individual learning styles.',
    'Builds confidence while nurturing curiosity.',
    'Tailored approach leads to meaningful results.',
  ];

  const subjectsOffered = [
    'Maths: KS2 to A-level',
    'Science (Physics, Chemistry, Biology): KS2 to GCSE',
    'Independent School Exams: Scholarship, Common',
    'Entrance, 16+ exams',
  ];

  return (
    <FounderWrapper>
      <FounderContentContainer>
        <Grid container justifyContent={'center'} columns={24}>
          <Grid size={{ xs: 24, lg: 14 }} sx={{ px: { xs: '0', md: '15px' } }}>
            <FadeIn direction="up" distance={100} duration={1}>
              <SectionHeading text="Our Founder" align="start" showLeftLine={false} color="#000000" gradientType="second" />
              <FounderHeading>Dr. Asma Chaudhri</FounderHeading>
              <FounderHeadingTwo sx={{ mb: { xs: '20px', md: '30px' } }}>An Educator Driven by Passion</FounderHeadingTwo>
              <FounderContent>
                Founded in 2016 by Asma Chaudhri, Acemyexam has established itself as a leading tuition provider with an
                outstanding reputation for helping students achieve their academic ambitions.
              </FounderContent>
              <FounderContent>
                Asma is educated to PhD level in Image Processing from University College London (UCL), alongside a First-Class
                Honours in BSc Physics and an MSc in Computing Science, both from Imperial College London.
              </FounderContent>
              <FounderContent>
                Asma leads a team of exceptional tutors, many of whom are graduates from some of the world&lsquo;s top
                universities. Together, they deliver bespoke tuition that extends far beyond academic success— equipping students
                with the confidence, critical thinking skills, and independence they need to thrive well beyond their exams.
              </FounderContent>

              <FounderList>
                <FounderListItem>
                  <Image src={'/icons/check.svg'} width={23} height={23} alt="icon" style={{ marginRight: '8px' }} />
                  <FounderSubHeading>
                    Over{' '}
                    <strong>16 years of experience </strong>
                    preparing students for top UK schools and universities.
                  </FounderSubHeading>
                </FounderListItem>
                <FounderListItem>
                  <Image src={'/icons/check.svg'} width={23} height={23} alt="icon" style={{ marginRight: '8px' }} />
                  <FounderSubHeading>
                    Combines{' '}
                    <strong>academic expertise </strong>
                    with{' '}
                    <strong>advanced analytical skills </strong>
                    for effective teaching.
                  </FounderSubHeading>
                </FounderListItem>
                <FounderListItem>
                  <Image src={'/icons/check.svg'} width={23} height={23} alt="icon" style={{ marginRight: '8px' }} />
                  <FounderSubHeading>
                    <strong>Former senior Quantitative Analyst </strong>
                    known for simplifying complex concepts.
                  </FounderSubHeading>
                </FounderListItem>
              </FounderList>
            </FadeIn>
          </Grid>

          <Grid
            size={{ xs: 24, lg: 10 }}
            sx={{
              px: { xs: '0', md: '15px' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <FadeIn direction="up" distance={300} duration={1.5} delay={0.2}>
              <FounderImgHead>
                <Image src="/about/founder.png" alt="founder" layout="fill" objectFit="cover" />
              </FounderImgHead>
            </FadeIn>
          </Grid>

          <Grid size={24} sx={{ px: { xs: '0', md: '15px' } }}>
            <FadeIn direction="up" distance={100} duration={1} delay={0.2}>
              <FounderCard>
                <FounderCardInnerHead>
                  <FounderCardHeading>About Acemyexam</FounderCardHeading>
                  <FounderList>
                    {stats.map((stat, index) => (
                      <FounderListItem key={index}>
                        <Image src={'/icons/check.svg'} width={13} height={13} alt="icon" style={{ marginRight: '8px' }} />
                        <FounderCardListText>{stat}</FounderCardListText>
                      </FounderListItem>
                    ))}
                  </FounderList>
                </FounderCardInnerHead>

                <FounderCardDivider orientation="vertical" variant="middle" flexItem />

                <FounderCardInnerHead>
                  <FounderCardHeading>Teaching Philosophy</FounderCardHeading>
                  <FounderList>
                    {philosophy.map((item, index) => (
                      <FounderListItem key={index}>
                        <Image src={'/icons/check.svg'} width={13} height={13} alt="icon" style={{ marginRight: '8px' }} />
                        <FounderCardListText>{item}</FounderCardListText>
                      </FounderListItem>
                    ))}
                  </FounderList>
                </FounderCardInnerHead>

                <FounderCardDivider orientation="vertical" variant="middle" flexItem />

                <FounderCardInnerHead>
                  <FounderCardHeading>Subjects Offered</FounderCardHeading>
                  <FounderList>
                    {subjectsOffered.map((subject, index) => (
                      <FounderListItem key={index}>
                        <Image src={'/icons/check.svg'} width={13} height={13} alt="icon" style={{ marginRight: '8px' }} />
                        <FounderCardListText>{subject}</FounderCardListText>
                      </FounderListItem>
                    ))}
                  </FounderList>
                </FounderCardInnerHead>
              </FounderCard>
            </FadeIn>
          </Grid>
        </Grid>
      </FounderContentContainer>
    </FounderWrapper>
  );
};

export default AboutFounder;
