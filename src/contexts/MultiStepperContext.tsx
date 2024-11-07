// src/contexts/MultiStepFormContext.tsx

import React, { createContext, useState } from 'react';

import { stepData } from '@/features/resources/StepHeaderData';

type StepKey = 1 | 1.5 | 2 | 3 | 4 | 5;

interface MultiStepFormContextProps {
  currentStep: StepKey;
  selectedOptions: Record<number, string>;
  isNextDisabled: boolean;
  mainTitle: string;
  subTitle: string;
  subHeadingPara: string;
  handleNext: (option: string) => void;
  handleBack: () => void;
  selectOption: (option: string) => void;
  selectOptionNavbar: (option: string) => void;
  setSelectedOptions: (option: string) => void;
  setCurrentStep: (step: StepKey) => void;
}

const MultiStepFormContext = createContext<MultiStepFormContextProps | undefined>(undefined);

export const MultiStepFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<StepKey>(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({});
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const handleNext = (option: string) => {
    let nextStep: StepKey = currentStep;

    if (currentStep === 1) {
      nextStep = option === 'Entrance Exam' ? 1.5 : 2;
    } else if (currentStep === 1.5) {
      nextStep = 2;
    } else {
      nextStep = (currentStep + 1) as StepKey;
    }

    setSelectedOptions((prev) => ({ ...prev, [currentStep]: option }));
    setCurrentStep(nextStep);
    setIsNextDisabled(true);
  };

  const handleBack = () => {
    setSelectedOptions((prev) => {
      const updatedOptions = { ...prev };

      delete updatedOptions[currentStep];

      return updatedOptions;
    });

    setCurrentStep((prev) => {
      if (prev === 2 && selectedOptions[1] === 'Entrance Exam') {
        return 1.5;
      }

      return Math.max(prev - 1, 1) as StepKey;
    });

    setIsNextDisabled(false);
  };

  const selectOption = (option: string) => {
    setSelectedOptions((prev) => ({ ...prev, [currentStep]: option }));
    setIsNextDisabled(false);
  };

  const selectOptionNavbar = (option: string) => {
    setSelectedOptions({ 1: option }); 
    setIsNextDisabled(false);
  };

  // Get step-specific titles and text
  const { mainTitle, subTitle, subHeadingPara } = stepData[currentStep];
  const dynamicSubTitle = typeof subTitle === 'function' ? subTitle(selectedOptions) : subTitle;

  return (
    <MultiStepFormContext.Provider
      value={{
        currentStep,
        selectedOptions,
        isNextDisabled,
        mainTitle,
        subTitle: dynamicSubTitle,
        subHeadingPara,
        handleNext,
        handleBack,
        selectOption,
        selectOptionNavbar,
        setCurrentStep,
        setSelectedOptions,
      }}
    >
      {children}
    </MultiStepFormContext.Provider>
  );
};

export { MultiStepFormContext };
