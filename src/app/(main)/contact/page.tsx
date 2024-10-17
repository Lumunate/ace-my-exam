import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';

import { AppContentWrapper } from '@/components/common/Global.style';
import ContactForm from '@/features/contact/ContactForm'; 

import {
  ContactContainer,
  ContactHeadingTypography,
  ContactParaTypography,
  ContactLinksHead,
  ContactStyledLinkOne,
  ContactIconHead,
} from './Contact.style';

export default function ContactPage() {
  return (
    <ContactContainer>
      <AppContentWrapper>
        <Grid container columns={24} columnSpacing={2} sx={{ px: '40px' }}>
          <Grid size={{ xs: 24, md: 12 }} sx={{ mt: '80px' }}>
            <Box sx={{ mb: '100px', position: 'relative' }}>
              <ContactHeadingTypography variant='h1'>CONTACT US</ContactHeadingTypography>
              <ContactParaTypography variant='body1'>
                We&apos;d love to hear from you. Contact us directly or use the form below. We&apos;ll be in touch.
              </ContactParaTypography>
              <ContactIconHead>
                <Image src={'/home/play.svg'} width={26} height={21} alt="icon" />
              </ContactIconHead>
            </Box>
            <ContactLinksHead>
              <Box sx={{ mb: '20px' }}>
                <ContactStyledLinkOne href={'#'}>+1 234-567-890</ContactStyledLinkOne>
                <ContactStyledLinkOne href={'#'}>asma@acemyexam.co.uk</ContactStyledLinkOne>
              </Box>
              <ContactStyledLinkOne href={'#'}>Cambridge, UK</ContactStyledLinkOne>
            </ContactLinksHead>
          </Grid>
          <Grid size={{ xs: 24, md: 12 }}>
            <ContactForm /> 
          </Grid>
        </Grid>
      </AppContentWrapper>
    </ContactContainer>
  );
}
