'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import {
  ProcessSliderWrapper,
  ProcessCard,
  ProcessCardNumber,
  ProcessCardTitle,
  ProcessCardDescription,
  ProcessContent,
} from './ProcessCardSlider.style';

interface StepCard {
  number: number;
  title: string;
  description: string;
}

const cardSteps: StepCard[] = [
  { number: 1, title: 'Student’s Initial Assessment', description: 'Initial assessment to identify knowledge gaps and evaluate exam technique' },
  { number: 2, title: 'Personalised Success Session', description: 'Student success session to establish a personalized tutoring plan.' },
  { number: 3, title: 'Live Lessons', description: 'Live lessons to cover all the content and practice exam questions. We kickstart the lessons either 1-to-1 or group-based on your preferred choice to cover the content and practice exam questions.' },
  { number: 4, title: 'Weekly Homework Practice', description: 'Homework is set weekly to consolidate learning and boost retention.' },
  { number: 5, title: 'Progress Tracking', description: 'We closely monitor each student’s progress to ensure their continuous improvement and success.' },
  { number: 6, title: 'Comprehensive Resource Library', description: 'Full access to an extensive library of educational resources for all students.' },
  { number: 7, title: 'One-on-One Support Calls', description: 'One-to-one calls for when students need support or encouragement.' },
  { number: 8, title: 'Monthly Parent Reports', description: 'Monthly reports for parents to ensure transparency and student accountability.' },
];

const ProcessCardSlider: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null); 

  const handleCardHover = (index: number) => {
    // Skip hover effect for the first card (index === 0)
    if (index !== 0) {
      setActiveCard(index); 
    }
  };

  const handleMouseLeave = () => {
    setActiveCard(null); 
  };

  return (
    <ProcessSliderWrapper>
      {cardSteps.map((step, index) => (
        <ProcessCard
          key={step.number}
          active={index === activeCard} 
          index={index}
          onMouseOver={() => handleCardHover(index)} 
          onMouseLeave={handleMouseLeave} 
        >             
          <ProcessCardNumber variant="h4">{step.number}</ProcessCardNumber>
          <ProcessContent>

            {(index === 0 || index === activeCard) && (
              <>
                <Image
                  src="/icons/Vivid-Icons.svg"
                  width={21}
                  height={28}
                  alt="icon"
                />
                <ProcessCardTitle variant="h6">
                  {step.title}
                </ProcessCardTitle>
                <ProcessCardDescription variant="body2">
                  {step.description}
                </ProcessCardDescription>
              </>
            )}

          </ProcessContent>
        </ProcessCard>
      ))}
    </ProcessSliderWrapper>
  );
};

export default ProcessCardSlider;
