import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';

import { AppContentWrapper } from '@/components/common/Global.style';
import FeedbackForm from '@/features/feedback/FeedbackForm';

import {
  FeedbackContainer,
  FeedbackHeadingTypography,
  FeedbackParaTypography,
  FeedbackIconHead,
} from './Feedback.style';

export default function FeedbackPage() {
  return (
    <FeedbackContainer>
      <AppContentWrapper>
        <Grid container columns={24} sx={{ px: '40px', maxWidth: '900px', mx: 'auto' }}>
          <Grid size={{ xs: 24}} sx={{ mt: '80px', position: 'relative' }}>
            <FeedbackHeadingTypography variant='h1'>
            Your Feedback Matters!
            </FeedbackHeadingTypography>
            <FeedbackParaTypography variant='body1'>
            Help us improve by sharing your experience!
            </FeedbackParaTypography>
            <FeedbackIconHead>
              <Image src={'/home/play.svg'} width={26} height={21} alt='icon' />
            </FeedbackIconHead>
          </Grid>
          <Grid size={{ xs: 24}}>
            <Box sx={{ maxWidth: '715px', mx: 'auto' }}>
              <FeedbackForm />
            </Box>
          </Grid>
        </Grid>
      </AppContentWrapper>
    </FeedbackContainer>
  );
}
