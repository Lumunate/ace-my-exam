export const stepData = {
  1: {
    mainTitle: 'Educational Resources',
    subTitle: 'Resources',
    subHeadingPara: 'Choose Your Resource',
  },
  1.5: {
    mainTitle: 'Age Group',
    subTitle: (selectedOptions: Record<number, string>) =>
      selectedOptions[1] || 'Age Group',
    subHeadingPara: 'Select Age Group',
  },
  2: {
    mainTitle: 'Examination Board',
    subTitle: (selectedOptions: Record<number, string>) =>
      selectedOptions[1] || 'Examination Board',
    subHeadingPara: 'Select the Examination Board',
  },
  3: {
    mainTitle: 'Subject',
    subTitle: (selectedOptions: Record<number, string>) =>
      selectedOptions[2] || 'Subject',
    subHeadingPara: 'Select Subject',
  },
  4: {
    mainTitle: 'Resource Type',
    subTitle: (selectedOptions: Record<number, string>) =>
      selectedOptions[3] || 'Resource Type',
    subHeadingPara: 'Pick Your Resource Type',
  },
  5: {
    mainTitle: 'Download Material',
    subTitle: (selectedOptions: Record<number, string>) =>
      selectedOptions[4] || 'Download Material',
    subHeadingPara: 'Select the Content Type',
  },
};
