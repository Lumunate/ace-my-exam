'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import { ProcessSliderWrapper, ProcessCard, ProcessCardNumber, ProcessCardTitle, ProcessCardDescription, ProcessContent } from './ProcessCardSlider.style';

interface StepCard {
  number: number;
  title: string;
  description: string;
}

const cardSteps: StepCard[] = [
  { number: 1, title: "Student's Initial Assessment", description: 'Student’s assessment to determine baseline and gaps.' },
  { number: 2, title: 'Step Two', description: 'This is the second step in the process.' },
  { number: 3, title: 'Step Three', description: 'This is the third step in the process.' },
  { number: 4, title: 'Step Four', description: 'This is the fourth step in the process.' },
  { number: 5, title: 'Step Five', description: 'This is the fifth step in the process.' },
  { number: 6, title: 'Step Six', description: 'This is the sixth step in the process.' },
  { number: 7, title: 'Step Seven', description: 'This is the seventh step in the process.' },
  { number: 8, title: 'Step Eight', description: 'This is the eighth step in the process.' },
  { number: 9, title: 'Step Nine', description: 'This is the ninth step in the process.' },
];

const ProcessCardSlider: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(0); 

  const handleCardClick = (index: number) => {
    setActiveCard(index);
  };

  return (
    <ProcessSliderWrapper>
      {cardSteps.map((step, index) => (
        <ProcessCard
          key={step.number}
          active={index === activeCard}
          index={index}
          activeCard={activeCard}
          onClick={() => handleCardClick(index)}
        >             
          <ProcessCardNumber variant="h4">{step.number}</ProcessCardNumber>
          <ProcessContent>
            <Image
              src={'/icons/Vivid-Icons.svg'}
              width={21}
              height={28}
              alt='icon'
            />
            <ProcessCardTitle variant="h6">{step.title}</ProcessCardTitle>
            <ProcessCardDescription variant="body2">{step.description}</ProcessCardDescription>
          </ProcessContent>
        </ProcessCard>
      ))}
    </ProcessSliderWrapper>
  );
};

export default ProcessCardSlider;
