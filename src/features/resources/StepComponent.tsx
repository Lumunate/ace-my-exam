'use client';

import {
  Box,
  Breadcrumbs,
  TableBody,
  TableHead,
  TableRow,
  IconButton,
  TableCell,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import {
  ResourcesContainer,
  ResourcesHeading,
  ResourcesPara,
  Resourceswrapper,
  BreadcrumbsHeading,
  ResourcesSubHeading,
  PaginationHead,
} from '@/app/(main)/resources/Resources.style';
import { Button } from '@/components/buttons/Button.style';
import { AppContentWrapper } from '@/components/common/Global.style';
import { StyledPagination } from '@/components/pagination/Pagination.style';
import SectionHeading from '@/components/section-heading/SectionHeading';
import { useMultiStepContext } from '@/contexts/MultiStepContext';

import { optionsData, Option, StepOptions } from './OptionsData';
import {
  ResourcesCard,
  ResourcesCardNumber,
  ResourcesCardTitle,
  StyledLink,
  StyledTable,
  ResourcesTableContainer,
  TablePara,
} from './ResourcesSteps.style';

const StepComponent: React.FC = () => {
  const { currentStep, handleNext, handleBack, breadcrumbs } =
    useMultiStepContext();
  const [options, setOptions] = useState<Option[] | string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>('');

  useEffect(() => {
    // Find the options for the current step in optionsData
    const stepData: StepOptions | undefined = optionsData.find(
      (item) => item.step === currentStep?.stepNumber
    );

    if (stepData) {
      if (Array.isArray(stepData.options)) {
        setOptions(stepData.options);
      } else if (
        currentStep?.stepNumber < 4 &&
        !Array.isArray(stepData.options)
      ) {
        const previousSelection = breadcrumbs[breadcrumbs.length - 1];

        if (stepData.options) {
          setOptions(stepData.options[previousSelection] || []);
        }
      } else if (
        currentStep?.stepNumber === 5 &&
        typeof stepData.options === 'object'
      ) {
        const previousSelection = breadcrumbs[breadcrumbs.length - 1];

        setOptions(
          (stepData.options[previousSelection] as unknown as string) ||
            'No table available'
        );
      }
    }
  }, [currentStep, breadcrumbs]);

  const handleOptionChange = (name: string) => {
    setSelectedOption(name);
  };

  const handleNextClick = () => {
    if (selectedOption) {
      handleNext(selectedOption);
      setSelectedOption('');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentResourse = localStorage.getItem('selectedResource');

      if (currentResourse) {
        if(currentStep?.stepNumber !== 1){
          handleBack();
        } else {
          handleNext(currentResourse);
          setSelectedOption('');
        }
      }

      localStorage.removeItem('selectedResource');
    }
  }, []);

  return (
    <div>
      <Resourceswrapper>
        <AppContentWrapper>
          <ResourcesContainer>
            <Box>
              <SectionHeading
                text="Start Practicing"
                align="center"
                showLeftLine={true}
                color="#DA9694"
                textWidth="150px"
                gradientType="second"
              />
              <ResourcesHeading variant="h2">
                {currentStep?.stepName}
              </ResourcesHeading>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              ></Box>
              <Box
                sx={{
                  mt: '30px',
                  display: { xs: 'none', sm: 'flex' },
                  alignItems: 'center',
                }}
              >
                <Breadcrumbs
                  aria-label="breadcrumb"
                  separator={
                    <Image
                      src={'/icons/right-arrow.svg'}
                      alt={'icon'}
                      width={9}
                      height={9}
                      style={{ transform: 'translateY(20%)' }}
                    />
                  }
                >
                  {breadcrumbs.map((title, index) => (
                    <BreadcrumbsHeading key={index} variant="body2">
                      {title}
                    </BreadcrumbsHeading>
                  ))}
                </Breadcrumbs>
              </Box>
              <Box sx={{ my: { xs: '20px', sm: '30px' } }}>
                <ResourcesSubHeading>
                  {breadcrumbs.length > 0 && (
                    <span style={{ fontWeight: 'bold', marginTop: '8px' }}>
                      {breadcrumbs[breadcrumbs.length - 1]}
                    </span>
                  )}
                </ResourcesSubHeading>
                <ResourcesPara variant="body1" sx={{ textAlign: 'start' }}>
                  {currentStep?.stepHeading}
                </ResourcesPara>
              </Box>
              <Box>
                {currentStep?.stepNumber === 5 ? (
                  <ResourcesTableContainer>
                    <StyledTable sx={{ minWidth: 768 }}>
                      <TableHead>
                        <TableRow>
                          {Array.isArray(options) &&
                            options.map((option, index) =>
                              option?.headings?.map((heading, headingIndex) => (
                                <TableCell
                                  key={`${index}-${headingIndex}`}
                                  sx={{
                                    fontWeight: 'bold',
                                    '&:nth-last-child(1)': {
                                      textAlign: 'right',
                                    },
                                  }}
                                >
                                  {heading}
                                </TableCell>
                              ))
                            )}
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {Array.isArray(options) ? (
                          options.map((option) => (
                            <>
                              {option?.data?.map((data, dataIndex) =>
                                option?.name === 'Revision Notes' ? (
                                  <TableRow key={dataIndex}>
                                    <TableCell>{data.name}</TableCell>
                                    <TableCell>
                                      <TablePara>{data.topic}</TablePara>
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      sx={{ textAlign: 'right' }}
                                    >
                                      <IconButton color="primary">
                                        <Image
                                          src="/icons/downloadIcon.svg"
                                          alt={'resources Icon'}
                                          width={17}
                                          height={17}
                                        />
                                      </IconButton>
                                      <StyledLink variant="body2">
                                        Download
                                      </StyledLink>
                                    </TableCell>
                                  </TableRow>
                                ) : option?.name === 'Topic Questions' ? (
                                  <TableRow key={dataIndex}>
                                    <TableCell>{data.topic}</TableCell>
                                    <TableCell>
                                      <IconButton color="primary">
                                        <Image
                                          src="/icons/downloadIcon.svg"
                                          alt={'resources Icon'}
                                          width={17}
                                          height={17}
                                        />
                                      </IconButton>
                                      <StyledLink variant="body2">
                                        {data.question}
                                      </StyledLink>
                                    </TableCell>
                                    <TableCell>
                                      <IconButton color="primary">
                                        <Image
                                          src="/icons/downloadIcon.svg"
                                          alt={'resources Icon'}
                                          width={17}
                                          height={17}
                                        />
                                      </IconButton>
                                      <StyledLink variant="body2">
                                        {data.question}
                                      </StyledLink>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'right' }}>
                                      <IconButton color="primary">
                                        <Image
                                          src="/icons/downloadIcon.svg"
                                          alt={'resources Icon'}
                                          width={17}
                                          height={17}
                                        />
                                      </IconButton>
                                      <StyledLink variant="body2">
                                        {data.question}
                                      </StyledLink>
                                    </TableCell>
                                  </TableRow>
                                ) : option?.name === 'Past Papers' ? (
                                  <TableRow key={dataIndex}>
                                    <TableCell>{data.exam}</TableCell>
                                    <TableCell>
                                      <TablePara>{data.year}</TablePara>
                                    </TableCell>
                                    <TableCell>
                                      <IconButton color="primary">
                                        <Image
                                          src="/icons/downloadIcon.svg"
                                          alt={'resources Icon'}
                                          width={17}
                                          height={17}
                                        />
                                      </IconButton>
                                      <StyledLink variant="body2">
                                        {data.questionPaper}
                                      </StyledLink>
                                    </TableCell>
                                    <TableCell>
                                      <IconButton color="primary">
                                        <Image
                                          src="/icons/downloadIcon.svg"
                                          alt={'resources Icon'}
                                          width={17}
                                          height={17}
                                        />
                                      </IconButton>
                                      <StyledLink variant="body2">
                                        {data.markingScheme}
                                      </StyledLink>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'right' }}>
                                      <IconButton color="primary">
                                        <Image
                                          src="/icons/downloadIcon.svg"
                                          alt={'resources Icon'}
                                          width={17}
                                          height={17}
                                        />
                                      </IconButton>
                                      <StyledLink variant="body2">
                                        {data.answer}
                                      </StyledLink>
                                    </TableCell>
                                  </TableRow>
                                ) : (
                                  'No data'
                                )
                              )}
                            </>
                          ))
                        ) : (
                          <div>
                            <h3>{options}</h3>
                          </div>
                        )}
                      </TableBody>
                    </StyledTable>
                  </ResourcesTableContainer>
                ) : (
                  <Grid
                    container
                    spacing={'22px'}
                    sx={{ mb: '40px' }}
                    justifyContent={'center'}
                    columns={20}
                  >
                    {Array.isArray(options) ? (
                      options.map((option, index) => (
                        <Grid
                          size={{
                            xs: 20,
                            sm: currentStep?.stepNumber === 2 ? 10 : 10,
                            md: currentStep?.stepNumber === 2 ? 10 : 6,
                            lg: currentStep?.stepNumber === 2 ? 6 : 4,
                          }}
                          key={index}
                        >
                          <ResourcesCard
                            height={
                              currentStep?.stepNumber === 2 ? '100%' : '245px'
                            }
                            onClick={() =>
                              handleOptionChange(option?.name ?? '')
                            }
                            sx={{
                              cursor: 'pointer',
                              outline:
                                selectedOption === option.name
                                  ? '3px solid #DA9694'
                                  : 'none',
                            }}
                          >
                            {option?.icon && (
                              <Image
                                src={option?.icon}
                                alt={option?.name ?? ''}
                                width={67}
                                height={45}
                              />
                            )}
                            {option?.imageUrl && (
                              <Box sx={{width: '70%', height: '80px', mx: 'auto', position: 'relative'}}>
                                <Image
                                  src={option?.imageUrl}
                                  alt={option?.name ?? ''}
                                  layout='fill' objectFit='contain'
                                />
                              </Box>
                            )}
                            {option?.age && (
                              <ResourcesCardNumber>
                                {option?.age}
                              </ResourcesCardNumber>
                            )}
                            {currentStep?.stepNumber !== 2 && option?.name && (
                              <ResourcesCardTitle variant="h6">
                                {option.name}
                              </ResourcesCardTitle>
                            )}
                          </ResourcesCard>
                        </Grid>
                      ))
                    ) : (
                      <div>
                        <h3>{options}</h3>
                      </div>
                    )}
                  </Grid>
                )}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '35px',
                  flexWrap: 'wrap',
                }}
              >
                <Box
                  sx={{
                    order: { xs: 2, md: 1 },
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flex: 1
                  }}
                >
                  <Button
                    fontSize="16px"
                    borderRadius="50px"
                    width="212px"
                    height="60px"
                    onClick={handleBack}
                    disabled={currentStep?.stepNumber === 1}
                  >
                    Previous
                  </Button>
                  {currentStep?.stepNumber < 5 && (
                    <Button
                      special
                      fontSize="16px"
                      borderRadius="50px"
                      width="212px"
                      height="60px"
                      onClick={handleNextClick}
                      disabled={
                        !selectedOption && currentStep?.stepNumber !== 5
                      }
                    >
                      {currentStep?.stepNumber === 5 ? 'Finish' : 'Next'}
                    </Button>
                  )}
                </Box>
                {currentStep?.stepNumber === 5 && (
                  <PaginationHead
                    sx={{
                      order: { xs: 1, md: 2 },
                      mb: { xs: '20px', md: '0' },
                      width: { xs: '100%', md: 'unset' },
                    }}
                  >
                    <StyledPagination count={10} />
                  </PaginationHead>
                )}
              </Box>
            </Box>
          </ResourcesContainer>
        </AppContentWrapper>
      </Resourceswrapper>
    </div>
  );
};

export default StepComponent;
