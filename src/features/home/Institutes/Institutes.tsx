import { InstituteWrapper, InstituteImage, InstituteGrid } from './Institutes.style';

const instituteImages = [
  'home/pearson.svg',
  'home/warwick.svg',
  'home/UOC.svg',
  'home/aqa.svg',
  'home/UWM.svg',
  'home/UCL.svg',
  'home/imperial.svg',
  'home/SPC.svg',

];

const Institutes: React.FC = () => {
  return (
    <InstituteWrapper>
      <InstituteGrid>
        {instituteImages.map((src, index) => (
          <InstituteImage key={index} src={src} alt={`Institute ${index + 1}`} />
        ))}
      </InstituteGrid>
    </InstituteWrapper>
  );
};

export default Institutes;
