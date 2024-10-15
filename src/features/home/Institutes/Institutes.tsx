import { InstituteWrapper, InstituteImage, InstituteGrid } from './Institutes.style';

const instituteImages = [
  'home/institute1.png',
  'home/institute2.png',
  'home/institute3.png',
  'home/institute4.png',
  'home/institute5.png',
  'home/institute6.png',
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
