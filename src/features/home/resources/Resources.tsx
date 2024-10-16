import SectionHeading from '@/components/section-heading/SectionHeading';
import { ResourcesWrapper, ResourcesHeading, ResourceGrid, ResourceCard, ResourceButton, ResourcesCardHeading, ResourcesImageContainer, ResourcesImage, ResourcesImageOverlay } from '@/features/home/resources/Resources.style';

const cardsData = [
  {
    title: 'Alevel Maths Resources',
    image: '/home/Resources1.webp', 
    buttonText: 'Start Now'
  },
  {
    title: 'GCSE/IGCSE Maths Resources',
    image: '/home/Resources2.webp', 
    buttonText: 'Start Now'
  },
  {
    title: 'GCSE/IGCSE Science Resources',
    image: '/home/Resources3.webp', 
    buttonText: 'Start Now'
  },
  {
    title: 'Entrance & scholarship Exams Resources',
    image: '/home/Resources3.webp', 
    buttonText: 'Start Now'
  }
];

const Resources: React.FC = () => {
  return (
    <ResourcesWrapper>
      <SectionHeading
        text='Start Resources'
        align='center'
        showLeftLine={true}
        color='#DA9694'
        textWidth='160px'
      />
      <ResourcesHeading variant='h2'>
        The Key to Your Academic Success
      </ResourcesHeading>

      <ResourceGrid container columns={24} spacing={'17px'}>
        {cardsData.map((card, index) => (
          <ResourceGrid key={index} size={{ xs: 24, md: 12 }}>
            <ResourceCard key={index}>
              <ResourcesImageContainer>
                <ResourcesImage
                  src={card.image}
                  width={0}
                  height={0}
                  sizes='100vw'
                  alt='Resources background'
                />
                <ResourcesImageOverlay />
              </ResourcesImageContainer>
              <ResourcesCardHeading>{card.title}</ResourcesCardHeading>
              <ResourceButton>{card.buttonText}</ResourceButton>
            </ResourceCard>
          </ResourceGrid>
        ))}
      </ResourceGrid>
    </ResourcesWrapper>
  );
};

export default Resources;
