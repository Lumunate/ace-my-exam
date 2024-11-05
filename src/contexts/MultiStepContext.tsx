import React, { createContext, useContext, useState, ReactNode } from 'react';

import { optionsData } from '../features/resources/OptionsData';

interface StepData {
  stepNumber: number;
  stepName: string;
  stepHeading: string;
}

interface MultiStepContextProps {
  currentStep: StepData;
  selections: Record<string, string>;
  breadcrumbs: string[];
  handleNext: (selectedOption: string) => void;
  handleBack: () => void;
}

const MultiStepContext = createContext<MultiStepContextProps | undefined>(
  undefined
);

interface MultiStepProviderProps {
  children: ReactNode;
}

export const MultiStepProvider: React.FC<MultiStepProviderProps> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = useState<StepData>({
    stepNumber: 1,
    stepName:
      optionsData?.find((step) => step.step === 1)?.stepName || 'Unknown Step',
    stepHeading:
      optionsData?.find((step) => step.step === 1)?.stepHeading ||
      'Unknown Step',
  });
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>(['Resources']);

  const handleNext = (selectedOption: string) => {
    setSelections((prev) => ({
      ...prev,
      [`step${currentStep.stepNumber}`]: selectedOption,
    }));
    setBreadcrumbs((prev) => [...prev, selectedOption]);

    let nextStepNumber: number;

    if (currentStep.stepNumber === 1 && selectedOption === 'Entrance Exam') {
      nextStepNumber = 1.5;
    } else if (currentStep.stepNumber === 1.5) {
      nextStepNumber = 2;
    } else {
      nextStepNumber = currentStep.stepNumber + 1;
    }

    const nextStepData = optionsData.find(
      (step) => step.step === nextStepNumber
    );

    if (nextStepData) {
      setCurrentStep({
        stepNumber: nextStepData.step,
        stepName: nextStepData.stepName,
        stepHeading: nextStepData.stepHeading,
      });
    }
  };

  const handleBack = () => {
    setBreadcrumbs((prev) => prev.slice(0, -1));
    setSelections((prev) => {
      const newSelections = { ...prev };

      delete newSelections[`step${currentStep.stepNumber}`];

      return newSelections;
    });

    let previousStepNumber: number;

    if (currentStep.stepNumber === 1.5) {
      previousStepNumber = 1;
    } else if (selections?.step1 === 'Entrance Exam' && currentStep.stepNumber === 2) {
      previousStepNumber = 1.5; 
    } else {
      previousStepNumber = currentStep.stepNumber - 1;
    }

    const previousStepData = optionsData.find(
      (step) => step.step === previousStepNumber
    );

    if (previousStepData) {
      setCurrentStep({
        stepNumber: previousStepData.step,
        stepName: previousStepData.stepName,
        stepHeading: previousStepData.stepHeading,
      });
    }
  };

  return (
    <MultiStepContext.Provider
      value={{ currentStep, selections, breadcrumbs, handleNext, handleBack }}
    >
      {children}
    </MultiStepContext.Provider>
  );
};

export const useMultiStepContext = (): MultiStepContextProps => {
  const context = useContext(MultiStepContext);

  if (!context) {
    throw new Error(
      'useMultiStepContext must be used within a MultiStepProvider'
    );
  }

  return context;
};
