import { CommonHeadingContainer, CommonHeadingLeftLine, CommonHeadingRightLine, CommonHeadingTypography } from './SectionHeading.style';

interface SectionHeadingProps {
  text: string;
  align?: 'center' | 'start';  
  showLeftLine?: boolean;      
  color?: string;            
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ text, align = 'center', showLeftLine = true, color = '#000' }) => {
  return (
    <CommonHeadingContainer align={align}>
      {showLeftLine && <CommonHeadingLeftLine hasLeftLine={showLeftLine} />}
      <CommonHeadingTypography variant="h6" textColor={color}>
        {text}
      </CommonHeadingTypography>
      <CommonHeadingRightLine hasLeftLine={true} />
    </CommonHeadingContainer>
  );
};

export default SectionHeading;