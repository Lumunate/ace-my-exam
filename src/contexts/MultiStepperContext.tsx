'use client';
import { useRouter } from 'next/navigation';
import React, { createContext, useState } from 'react';

import { EducationLevel } from '@/types/resources';

type StepKey = 1 | 1.5 | 2 | 3 | 4 | 5;

interface MultiStepFormContextProps {
  currentStep: StepKey;
  selectedOptions: Record<string, IStepOption>;
  isNextDisabled: boolean;
  handleNext: () => void;
  handleBack: () => void;
  selectOption: (stepName: string, option: IStepOption) => void;
  selectOptionNavbar: (stepName: string, option: IStepOption) => void;
  setSelectedOptions: React.Dispatch<React.SetStateAction<Record<string, IStepOption>>>; 
  setCurrentStep: (step: StepKey) => void;
}

const MultiStepFormContext = createContext<MultiStepFormContextProps | undefined>(undefined);

export interface IStepOption {
  name: string,
  value: string
  icon: string
}

export const MultiStepFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<StepKey>(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, IStepOption>>({});
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const router = useRouter();

  const handleNext = () => {
    let nextStep: StepKey = currentStep;

    if (currentStep === 3) {
      router.push(`/resources/${selectedOptions.subjectSubtype?.value}/${selectedOptions.resourceType?.value}`);
    }
    else if (currentStep === 1) {
      nextStep = selectedOptions.educationLevel?.value === EducationLevel.ENTRANCE_EXAMS ? 1.5 : 2;
    } else if (currentStep === 1.5) {
      nextStep = 2;
    } else {
      nextStep = (currentStep + 1) as StepKey;
    }

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
      if (prev === 2 && selectedOptions.educationLevel?.value === EducationLevel.ENTRANCE_EXAMS) {
        return 1.5;
      }

      return Math.max(prev - 1, 1) as StepKey;
    });

    setIsNextDisabled(false);
  };

  const selectOption = (stepName: string, option: IStepOption) => {
    setSelectedOptions((prev) => ({ ...prev, [stepName]: option }));
    setIsNextDisabled(false);
  };

  const selectOptionNavbar = (stepName: string, option: IStepOption) => {
    setSelectedOptions({ [stepName]: option }); 
    setIsNextDisabled(false);
  };

  return (
    <MultiStepFormContext.Provider
      value={{
        currentStep,
        selectedOptions,
        isNextDisabled,
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
