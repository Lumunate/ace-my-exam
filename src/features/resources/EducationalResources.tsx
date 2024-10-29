import Grid from '@mui/material/Grid2';
import Image from 'next/image';

import { ResourcesCard, ResourcesCardTitle, } from './ResourcesSteps.style';

const resources = [
  { title: 'Alevel Maths Resources', SubTitle: 'Alevel Maths', icon: '/resources/mathsImg.svg' },
  { title: 'GCSE/IGCSE Maths Resources', SubTitle: 'GCSE/IGCSE Maths', icon: '/resources/mathsImg.svg' },
  { title: 'GCSE/IGCSE Science Resources', SubTitle: 'GCSE/IGCSE Science', icon: '/resources/ScienceImg.svg' },
  { title: 'Entrance & scholarship Exams Resources', SubTitle: 'Entrance & scholarship Exams', icon: '/resources/ExamImg.svg' },
];

interface Step1Props {
  selectedResource: string | null;
  onSelectResource: (resourceName: string) => void;
}

const Step1_EducationalResources: React.FC<Step1Props> = ({ selectedResource, onSelectResource }) => (
  <>
    <Grid container spacing={'22px'} sx={{ maxWidth: '686px', mx: 'auto', mb: '73px' }}>
      {resources.map((resource, index) => (
        <Grid size={{ xs: 12, md: 6 }} key={index}>
          <ResourcesCard padding="36px 50px" height='188px' onClick={() => onSelectResource(resource.title)} sx={{
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
