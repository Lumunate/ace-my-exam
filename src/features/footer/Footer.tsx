'use client';

import { Box, List, ListItem, styled, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const FooterMain = styled(Box)({
  backgroundColor: '#DA9694',
});

const FooterContainer = styled(Box)({
  maxWidth: '1405px',
  width: '100%',
  margin: '0 auto',
  borderRadius: '20px 20px 0 0',
  padding: '22px 20px',
});

const FooterWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    alignItems: 'start',
  },
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    flexWrap: 'wrap',
  },
}));

const FooterLogoHead = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '250px',
  filter:
    'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7491%) hue-rotate(327deg) brightness(104%) contrast(100%)',
  [theme.breakpoints.down('sm')]: {
    width: '140px',
  },
}));

const FooterMediaIcons = styled(List)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '150px',
    justifyContent: 'center',
    marginTop: '10px',
  },
}));

const FooterMediaItem = styled(ListItem)(({ theme }) => ({
  padding: '0',
  paddingLeft: '18px',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, filter 0.3s ease',
  [theme.breakpoints.down('md')]: {
    paddingLeft: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '6px',
  },
  '& img:hover': {
    filter:
      'brightness(0) saturate(100%) invert(61%) sepia(68%) saturate(5764%) hue-rotate(316deg) brightness(93%) contrast(82%)',
    transform: 'scale(1.2)',
    transition: 'transform 0.3s ease',
  },
}));

const LegalPagesLinks = styled(Link)(({ theme }) => ({
  fontSize: '16px',
  color: '#fff',
  textTransform: 'capitalize',
  marginBottom: '10px',
  '&:hover': {
    color: '#DA5077 !important',
    transition: 'all 0.3s ease',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}));

const EmailLink = styled(Link)(({ theme }) => ({
  color: '#fff',
  fontSize: '16px',
  marginTop: '10px',
  display: 'block',
  '&:hover': {
    color: '#DA5077 !important',
    transition: 'all 0.3s ease',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '12px',
    display: 'none',
  },
}));

const Footer: FC = () => {
  const pages = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Resources', link: '/resources' },
    { name: 'Contact', link: '/contact' },
  ];

  const legalPages = [
    { name: 'Terms & Conditions', link: '/terms-conditions' },
    { name: 'Safeguarding Policy', link: '/safeguarding-policy' },
    {
      name: 'Rescheduling & attendance policy',
      link: '/rescheduling-and-attendance-policy',
    },
    { name: 'Privacy Policy', link: '/privacy-policy' },
    { name: 'Working Together Policy', link: '/working-together-policy' },
    { name: 'Tutor Terms & Conditions', link: '/tutor-terms-and-conditions' },
  ];

  return (
    <>
      <FooterMain>
        <FooterContainer>
          <FooterWrapper>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <FooterLogoHead href={'/'}>
                <Image
                  src={'/logo.svg'}
                  width={250}
                  height={65}
                  alt='Logo'
                  layout='responsive'
                />
              </FooterLogoHead>

              <EmailLink href='mailto:Asma@acemyexam.co.uk'>
                Asma@acemyexam.co.uk
              </EmailLink>
              <Typography
                sx={{
                  color: '#fff',
                  fontSize: '16px',
                  marginTop: '20px',
                  display: { xs: 'none', md: 'flex' },
                }}
              >
                Copyright © 2021 Acemyexam
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: { xs: '20px', lg: '50px' },
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography
                  variant='body1'
                  sx={{
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '18px',
                    marginBottom: '20px',
                  }}
                >
                  Sitemap
                </Typography>
                {pages.map((page, index) => (
                  <ListItem key={index} sx={{ p: 0 }}>
                    <LegalPagesLinks href={page.link}>
                      {page.name}
                    </LegalPagesLinks>
                  </ListItem>
                ))}
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                  sx={{
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '18px',
                    marginBottom: '20px',
                  }}
                >
                  Legal
                </Typography>
                {legalPages.map((page, index) => (
                  <ListItem key={index} sx={{ p: 0 }}>
                    <LegalPagesLinks href={page.link}>
                      {page.name}
                    </LegalPagesLinks>
                  </ListItem>
                ))}
              </Box>
            </Box>

            <FooterMediaIcons>
              <FooterMediaItem>
                <Image
                  src={'/footer/Youtube.svg'}
                  width={26}
                  height={26}
                  alt='youtube'
                />
              </FooterMediaItem>
              <FooterMediaItem>
                <Image
                  src={'/footer/Facebook.svg'}
                  width={22}
                  height={22}
                  alt='facebook'
                />
              </FooterMediaItem>
              <FooterMediaItem>
                <Image
                  src={'/footer/Instagram.svg'}
                  width={22}
                  height={22}
                  alt='instagram'
                />
              </FooterMediaItem>
            </FooterMediaIcons>
          </FooterWrapper>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'space-between',
              marginTop: '10px',
            }}
          >
            <Box>
              <Typography
                variant='body1'
                sx={{
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '18px',
                  marginBottom: '10px',
                }}
              >
                Sitemap
              </Typography>
              {pages.map((page, index) => (
                <ListItem key={index} sx={{ p: 0 }}>
                  <LegalPagesLinks href={page.link}>
                    {page.name}
                  </LegalPagesLinks>
                </ListItem>
              ))}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                sx={{
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '18px',
                  marginBottom: '10px',
                }}
              >
                Legal
              </Typography>
              {legalPages.map((page, index) => (
                <ListItem key={index} sx={{ p: 0 }}>
                  <LegalPagesLinks href={page.link}>
                    {page.name}
                  </LegalPagesLinks>
                </ListItem>
              ))}
            </Box>
          </Box>
        </FooterContainer>
      </FooterMain>
    </>
  );
};

export default Footer;
