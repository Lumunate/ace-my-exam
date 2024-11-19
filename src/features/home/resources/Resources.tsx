'use client';

import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/buttons/Button.style';
import SectionHeading from '@/components/section-heading/SectionHeading';
import {
  ResourcesWrapper,
  ResourcesHeading,
  ResourceGrid,
  ResourceCard,
  ResourcesCardHeading,
  ResourcesImageContainer,
  ResourcesImage,
  ResourcesImageOverlay,
  ResourcesCardSubHeading
} from '@/features/home/resources/Resources.style';
import useMultiStepForm from '@/hooks/useMultiStepper';

// Define the StepKey type for steps
type StepKey = 1 | 1.5 | 2 | 3 | 4 | 5;

const cardsData = [
  {
    subTitle: 'Maths, Further Maths Physics, Chemistry, Biology',
    title: 'Alevel',
    image: '/home/Resources1.webp',
    buttonText: 'Get Started'
  },
  {
    subTitle: 'Maths, Further Maths Physics, Chemistry, Biology',
    title: 'GCSE',
    image: '/home/Resources2.webp',
    buttonText: 'Get Started'
  },
  {
    subTitle: 'Maths, Further Maths Physics, Chemistry, Biology',
    title: 'IGCSE',
    image: '/home/Resources2.webp',
    buttonText: 'Get Started'
  },
  {
    subTitle: 'Maths, Physics, Chemistry, Biology',
    title: 'KS3',
    image: '/home/Resources3.webp',
    buttonText: 'Get Started'
  },
  {
    subTitle: '11+, 13+, 16+, 13+ ',
    title: 'Entrance Exams',
    image: '/home/Resources3.webp',
    buttonText: 'Get Started'
  }
];

const Resources: React.FC = () => {
  const router = useRouter();
  const { selectOptionNavbar, setCurrentStep } = useMultiStepForm();

  const handleGetStartedClick = (cardTitle: string) => {
    let step: StepKey = 2; 
    
    if (cardTitle === 'Entrance Exams') {
      step = 1.5; 
    } else {
      selectOptionNavbar('educationalResources', {
        name: cardTitle,
        value: cardTitle, 
        icon: '/resources/some-icon.svg' 
      });
    }

    setCurrentStep(step);

    router.push('/resources');
  };

  return (
    <ResourcesWrapper>
      <SectionHeading
        text='Start Resources'
        align='center'
        showLeftLine={true}
        color='#DA9694'
        textWidth='160px'
        gradientType="second"
      />
      <ResourcesHeading variant='h2'>
        The Key to Your Academic Success
      </ResourcesHeading>

      <ResourceGrid container columns={24} spacing={'17px'} sx={{ mb: '40px' }} justifyContent={'center'}>
        {cardsData.map((card, index) => (
          <ResourceGrid key={index} size={{ xs: 24, md: 12, lg: 8 }}>
            <ResourceCard key={index} onClick={() => handleGetStartedClick(card.title)}>
              <ResourcesImageContainer>
                <ResourcesImage
                  src={card.image}
                  width={0}
                  height={0}
                  sizes='100vw'
                  alt='Resources background'
                />
                <ResourcesImageOverlay />
              </ResourcesImageContainer>
              <ResourcesCardSubHeading className='resources-subtitle'>{card.subTitle}</ResourcesCardSubHeading>
              <ResourcesCardHeading>{card.title}</ResourcesCardHeading>
              <Box>
                <Button
                  special
                  fontSize='16px'
                  borderRadius='50px'
                  width='212px'
                  height='60px'
                >
                  {card.buttonText}
                </Button>
              </Box>
            </ResourceCard>
          </ResourceGrid>
        ))}
      </ResourceGrid>
    </ResourcesWrapper>
  );
};

export default Resources;
