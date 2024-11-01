import Grid from '@mui/material/Grid2';
import Image from 'next/image';

import { ResourcesCard } from './ResourcesSteps.style';

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
    <Grid
      container
      spacing={'15px'}
      sx={{mb: '40px' }}
    >
      {resources.map((board, index) => (
        <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
          <ResourcesCard onClick={() => onSelectBoard(board.title)} sx={{
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
