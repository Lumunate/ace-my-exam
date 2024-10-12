'use client';

import { CommonHeadingContainer, CommonHeadingLeftLine, CommonHeadingRightLine, CommonHeadingTypography } from './SectionHeading.style';

interface SectionHeadingProps {
  text: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ text }) => {
  return (
    <CommonHeadingContainer>
      <CommonHeadingLeftLine />
      <CommonHeadingTypography variant="h6" sx={{ fontWeight: '600', color: '#000000' }}>
        {text}
      </CommonHeadingTypography>
      <CommonHeadingRightLine />
    </CommonHeadingContainer>
  );
};

export default SectionHeading;
