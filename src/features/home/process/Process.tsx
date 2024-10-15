import ProcessCardSlider from '@/components/process-card-slider/ProcessCardSlider';
import SectionHeading from '@/components/section-heading/SectionHeading';
import { ProcessHeading, ProcessWrapper } from '@/features/home/process/Process.style';

const Process: React.FC = () => {
  return (
    <ProcessWrapper>
      <SectionHeading text="Process" align="center" showLeftLine={true} color="#DA9694" textWidth="160px" />
      <ProcessHeading variant="h2" sx={{ mt: '23px' }}>
        How we Operate
      </ProcessHeading>
      <ProcessCardSlider />
    </ProcessWrapper>
  );
};

export default Process;
