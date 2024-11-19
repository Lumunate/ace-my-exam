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
  { number: 2, title: 'Personalized Success Session', description: 'Student success session with me to establish a personalized road map.' },
  { number: 3, title: 'Live Weekly Lessons', description: 'Weekly group live lessons to cover all the content and practice exam questions.' },
  { number: 4, title: 'Drop-In Support Sessions', description: 'Weekly drop-in sessions for when your child is struggling with the content.' },
  { number: 5, title: 'Progress Tracking Tool', description: 'Tracker to measure progress.' },
  { number: 6, title: 'Weekly Homework Practice', description: 'Weekly homework to consolidate learning' },
  { number: 7, title: 'Comprehensive Resource Library', description: 'Library of resources covering the whole syllabus of A-Level maths.' },
  { number: 8, title: 'One-on-One Support Calls', description: 'One-to-one calls for when students need support or encouragement.' },
  { number: 9, title: 'Monthly Parent Reports', description: 'Parent monthly reports to keep parents informed and students accountable.' },
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
