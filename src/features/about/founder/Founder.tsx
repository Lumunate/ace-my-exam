import Grid from '@mui/material/Grid2';
import Image from 'next/image';

import {
  FounderContent,
  FounderContentContainer,
  FounderHeading,
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
  // const educationList = [
  //   {
  //     degree: 'PhD',
  //     subject: 'Image Processing/Computer Vision',
  //     institution: 'University College London',
  //   },
  //   {
  //     degree: 'MSc',
  //     subject: 'Computing Science',
  //     institution: 'Imperial College London',
  //   },
  //   {
  //     degree: 'BSc',
  //     subject: 'Physics (First Class Honours)',
  //     institution: 'Imperial College London',
  //   },
   
  // ];

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
    'Independent School Exams: Common Entrance/13+ and 16+, 13+ Scholarship',
    
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
              I, Asma Chaudhri, am the founder and CEO of Acemyexam Education. I am educated to PhD level in Image Processing from University College London (UCL) and earned an MSc in Computing Science and a BSc in Physics with First-Class Honours from Imperial College London, complemented by the prestigious DIC and ARCS awards. My rigorous academic training underpins my methodical approach to tutoring, blending deep subject knowledge with innovative teaching techniques.
              </FounderContent>
              <FounderContent>
              As an examiner for A-level Mathematics and (I)GCSE Science, I offer unique insights into exam standards and requirements, equipping my students with the skills and confidence needed to excel under pressure.
              </FounderContent>
              <FounderContent>
              I have dedicated over 16 years to transforming students&lsquo; academic journeys, with a proven track record of guiding 99% of my students to achieve remarkable progress. Many have improved by 2 to 5 grades and successfully gained admission to top schools and universities worldwide. This success is supported by verified testimonials from students and parents, reflecting my unwavering commitment to academic excellence and personalised learning strategies.
              </FounderContent>
              <FounderContent>
              Beyond academia, I bring 13+ years of experience as a Senior Quantitative Analyst in top-tier hedge funds and investment banks, including AllianceBernstein Ltd and Investcorp Bank. This professional expertise in financial modelling and quantitative analysis enriches my teaching, enabling me to offer real-world applications that inspire and engage my students.
              </FounderContent>
              <FounderContent>
              At Acemyexam Education, I am passionate about empowering students to achieve their fullest potential, fostering a love for learning, and preparing them not just for exams, but for lifelong success.
              </FounderContent>
              <FounderContent>
              I am supported by a team of exceptional tutors, many of whom are graduates from some of the world‘s top universities. Together, we deliver bespoke tuition that extends far beyond academic success— equipping students with the confidence, critical thinking skills, and independence they need to thrive well beyond their exams.
              </FounderContent>

              {/* <FounderList>
                {educationList.map((edu, index) => (
                  <FounderListItem key={index}>
                    <Image
                      src={'/icons/check.svg'}
                      width={23}
                      height={23}
                      alt="icon"
                      style={{ marginRight: '8px'}}
                    />
                    <FounderSubHeading>
                      <strong>{edu.degree}</strong> {edu.subject && `in ${edu.subject}`} 
                      {edu.institution && (
                        <strong>
                          {' – '}
                          <span style={{ whiteSpace: 'nowrap' }}>{edu.institution}</span>
                        </strong>
                      )}
                    </FounderSubHeading>
                  </FounderListItem>
                ))}
              </FounderList> */}
            </FadeIn>
          </Grid>

          <Grid
            size={{ xs: 24, lg: 10 }}
            sx={{
              // px: { xs: '0', md: '15px' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <FadeIn direction="up" distance={300} duration={1} delay={0.2}>
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
