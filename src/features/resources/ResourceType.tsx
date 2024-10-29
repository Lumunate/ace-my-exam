import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';

import { ResourcesPara } from '@/app/(main)/resources/Resources.style';

import { ExaminationBoardHeading, ResourceCardSubTitle, ResourcesCard, } from './ResourcesSteps.style';

const resources = [
  { title: 'Revision Notes', icon: '/resources/RevisionNotesImg.svg', ImgWidth: 100, ImgHeight: 102 },
  { title: 'Topic Questions', icon: '/resources/TopicQuestionsImg.svg', ImgWidth: 108, ImgHeight: 108 },
  { title: 'Past Papers', icon: '/resources/PastPapersImg.svg', ImgWidth: 102, ImgHeight: 102 },
];

interface ResourceTypeProps {
  selectedType: string | null;
  onSelectType: (typeName: string) => void;
}

const ResourcesTypeStep: React.FC<ResourceTypeProps> = ({ selectedType, onSelectType }) => (
  <>
    <ExaminationBoardHeading sx={{mt: {xs: '20px', sm: '30', lg: '60px'}}}>AQA</ExaminationBoardHeading>
    <ResourcesPara variant='body1' sx={{ textAlign: 'start' }}>Pick Your Resource Type</ResourcesPara>

    <Grid container spacing={{xs: '10px', lg: '22px'}} sx={{ mb: '60px', mt: '20px' }}>
      {resources.map((type, index) => (
        <Grid size={{ xs: 12, sm: 4 }} key={index}>
          <ResourcesCard padding="15px" onClick={() => onSelectType(type.title)} sx={{
            cursor: 'pointer',
            outline: selectedType === type.title ? '3px solid #DA9694' : 'none',
            minHeight: {xs: '160px', lg: '242px'}
          }}>
            <Box sx={{width:{xs: '70px', lg: '100px'}, height: {xs: '70px', lg: '100px'}, position: 'relative'}}>
              <Image
                src={type.icon}
                alt={type.title}
                fill
                sizes='100vw'
                style={{objectFit: 'contain'}}
              />
            </Box>
            <ResourceCardSubTitle>{type.title}</ResourceCardSubTitle>
          </ResourcesCard>
        </Grid>
      ))}
    </Grid>
  </>
);

export default ResourcesTypeStep;
