import SectionHeading from '@/components/section-heading/SectionHeading';
import { PracticingWrapper, PracticingHeading, ResourceGrid, ResourceCard, ResourceButton, PracticingCardHeading, PracticingImageContainer, PracticingImage, PracticingImageOverlay } from '@/features/home/practicing/Practicing.style';

const cardsData = [
  {
    title: 'Alevel Maths Resources',
    image: '/home/Practicing1.webp', 
    buttonText: 'Start Now'
  },
  {
    title: 'GCSE/IGCSE Maths Resources',
    image: '/home/Practicing2.webp', 
    buttonText: 'Start Now'
  },
  {
    title: 'GCSE/IGCSE Science Resources',
    image: '/home/Practicing3.webp', 
    buttonText: 'Start Now'
  },
  {
    title: 'Entrance & scholarship Exams Resources',
    image: '/home/Practicing3.webp', 
    buttonText: 'Start Now'
  }
];

const Practicing: React.FC = () => {
  return (
    <PracticingWrapper>
      <SectionHeading
        text='Start Practicing'
        align='center'
        showLeftLine={true}
        color='#DA9694'
        textWidth='160px'
      />
      <PracticingHeading variant='h2'>
        The Key to Your Academic Success
      </PracticingHeading>

      <ResourceGrid container columns={24} spacing={'17px'}>
        {cardsData.map((card, index) => (
          <ResourceGrid key={index} size={{ xs: 24, md: 12 }}>
            <ResourceCard key={index}>
              <PracticingImageContainer>
                <PracticingImage
                  src={card.image}
                  width={0}
                  height={0}
                  sizes='100vw'
                  alt='Practicing background'
                />
                <PracticingImageOverlay />
              </PracticingImageContainer>
              <PracticingCardHeading>{card.title}</PracticingCardHeading>
              <ResourceButton>{card.buttonText}</ResourceButton>
            </ResourceCard>
          </ResourceGrid>
        ))}
      </ResourceGrid>
    </PracticingWrapper>
  );
};

export default Practicing;
