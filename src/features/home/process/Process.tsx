import ProcessCardSlider from '@/components/process-card-slider/ProcessCardSlider';
import SectionHeading from '@/components/section-heading/SectionHeading';
import { ProcessHeading, ProcessWrapper, ProcessMain } from '@/features/home/process/Process.style';

const Process: React.FC = () => {
  return (
    <ProcessWrapper>
      <SectionHeading text="Process" align="center" showLeftLine={true} color="#DA9694" textWidth="160px" gradientType="second" />
      <ProcessHeading variant="h2" >
        How we Operate
      </ProcessHeading>
      <ProcessMain>
        <ProcessCardSlider />
      </ProcessMain>
    </ProcessWrapper>
  );
};

export default Process;
