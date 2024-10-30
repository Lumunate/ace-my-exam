import Grid from '@mui/material/Grid2';
import Image from 'next/image';

import { ResourcesCard, ResourcesCardTitle, } from './ResourcesSteps.style';

const resources = [
  { title: 'Alevel Maths', SubTitle: 'Alevel Maths', icon: '/resources/mathsImg.svg' },
  { title: 'GCSE/IGCSE Maths', SubTitle: 'GCSE/IGCSE Maths', icon: '/resources/mathsImg.svg' },
  { title: 'GCSE/IGCSE Science', SubTitle: 'GCSE/IGCSE Science', icon: '/resources/ScienceImg.svg' },
  { title: 'Entrance & scholarship Exams', SubTitle: 'Entrance & scholarship Exams', icon: '/resources/ExamImg.svg' },
];

interface Step1Props {
  selectedResource: string | null;
  onSelectResource: (resourceName: string) => void;
}

const Step1_EducationalResources: React.FC<Step1Props> = ({ selectedResource, onSelectResource }) => (
  <>
    <Grid container spacing={'15px'} sx={{ mb: '40px' }}>
      {resources.map((resource, index) => (
        <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
          <ResourcesCard onClick={() => onSelectResource(resource.title)} sx={{
            cursor: 'pointer',
            outline: selectedResource === resource.title ? '3px solid #DA9694' : 'none',
          }}>
            <Image
              src={resource.icon}
              alt={resource.title}
              width={54}
              height={54}
            />
            <ResourcesCardTitle variant="h6">{resource.title}</ResourcesCardTitle>
          </ResourcesCard>
        </Grid>
      ))}
    </Grid>
  </>
);

export default Step1_EducationalResources;
