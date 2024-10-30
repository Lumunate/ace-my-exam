import Grid from '@mui/material/Grid2';
import Image from 'next/image';

import { ResourcesCard, ResourcesCardTitle, } from './ResourcesSteps.style';

const resources = [
  { title: 'Revision Notes', icon: '/resources/RevisionNotesImg.svg',  },
  { title: 'Topic Questions', icon: '/resources/TopicQuestionsImg.svg' },
  { title: 'Past Papers', icon: '/resources/PastPapersImg.svg' },
];

interface ResourceTypeProps {
  selectedType: string | null;
  onSelectType: (typeName: string) => void;
}

const ResourcesTypeStep: React.FC<ResourceTypeProps> = ({ selectedType, onSelectType }) => (
  <>
    <Grid container spacing={'15px'} sx={{ mb: '40px'}} justifyContent={'center'}>
      {resources.map((type, index) => (
        <Grid size={{ xs: 12, md: 4, lg: 3 }} key={index}>
          <ResourcesCard  onClick={() => onSelectType(type.title)} sx={{
            cursor: 'pointer',
            outline: selectedType === type.title ? '3px solid #DA9694' : 'none',
          }}>
            <Image
              src={type.icon}
              alt={type.title}
              width={54}
              height={54}
            />
            <ResourcesCardTitle variant="h6">{type.title}</ResourcesCardTitle>
          </ResourcesCard>
        </Grid>
      ))}
    </Grid>
  </>
);

export default ResourcesTypeStep;
