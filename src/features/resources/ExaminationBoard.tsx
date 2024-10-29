import Grid from '@mui/material/Grid2';
import Image from 'next/image';

import { ResourcesPara } from '@/app/(main)/resources/Resources.style';

import { ExaminationBoardHeading, ResourcesCard } from './ResourcesSteps.style';

const resources = [
  { title: 'AQA', icon: '/resources/AQA-LOGO.svg', ImgWidth: 106, ImgHeight: 43 },
  { title: 'Edexcel', icon: '/resources/edexcel-Logo.svg', ImgWidth: 157, ImgHeight: 28 },
  { title: 'Cambridge', icon: '/resources/cambridge-Logo.svg', ImgWidth: 185, ImgHeight: 79 },
  { title: 'OCR', icon: '/resources/OCR-logo.svg', ImgWidth: 114, ImgHeight: 46 },
];

interface ExaminationBoardProps {
  selectedBoard: string | null;
  onSelectBoard: (boardName: string) => void;
}

const ExaminationBoardStep: React.FC<ExaminationBoardProps> = ({selectedBoard, onSelectBoard }) => (
  <>
    <ExaminationBoardHeading sx={{mt: {xs: '20px', sm: '30', lg: '60px'}}}>ALevels Math</ExaminationBoardHeading>
    <ResourcesPara variant='body1' sx={{ textAlign: 'start' }}>
      Select the Examination Board
    </ResourcesPara>
    <Grid
      container
      spacing={'15px'}
      sx={{ maxWidth: '471px', mx: 'auto', mb: '27px', mt: '20px' }}
    >
      {resources.map((board, index) => (
        <Grid size={{ xs: 12, sm: 6 }} key={index}>
          <ResourcesCard padding='15px' height='131px' onClick={() => onSelectBoard(board.title)} sx={{
            cursor: 'pointer',
            outline: selectedBoard === board.title ? '3px solid #DA9694' : 'none',
          }}>
            <Image
              src={board.icon}
              alt={board.title}
              width={board.ImgWidth}
              height={board.ImgHeight}
            />
          </ResourcesCard>
        </Grid>
      ))}
    </Grid>
  </>
);

export default ExaminationBoardStep;
