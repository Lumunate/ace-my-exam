'use client';

import { Box, List, ListItem, styled } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const FooterMain = styled(Box)({
  backgroundColor: '#DA9694',
});

const FooterContainer = styled(Box)({
  maxWidth: '1740px',
  width: '100%',
  margin: '0 auto',
  borderRadius: '20px 20px 0 0',
  padding: '22px 20px',
});

const FooterWrapper = styled(Box)(({ theme }) =>({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    alignItems: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    alignItems: 'start',
    flexWrap: 'wrap',
  },
}));

const FooterLinksContainer = styled(List)(({ theme }) =>({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '50%',
    flexDirection: 'column',
    alignItems: 'end',
  },
}));

const FooterLogoHead = styled(Link)(({ theme }) =>({
  display: 'flex',
  alignItems: 'center',
  filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7491%) hue-rotate(327deg) brightness(104%) contrast(100%)',
  [theme.breakpoints.down('sm')]: {
    width: '50%'
  },
}));

const FooterMediaIcons = styled(List)(({ theme }) =>({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '150px',
    justifyContent: 'center',
    transform: 'translateY(-46px)'
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
    filter: 'brightness(0) saturate(100%) invert(61%) sepia(68%) saturate(5764%) hue-rotate(316deg) brightness(93%) contrast(82%)',
    transform: 'scale(1.2)',
    transition: 'transform 0.3s ease',
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#fff',
  fontWeight: 400,
  fontSize: '16px',
  textTransform: 'capitalize',
  fontStyle: 'normal',
  fontFamily: 'Lato, sans-serif',
  margin: '0 36px',
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('md')]: {
    margin: '0 10px',
    fontSize: '13px',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '10px 0',
    textAlign: 'end',
    width: '100%',
    fontSize: '15px',
  },
  '&:hover':{
    color: '#DA5077',
    transition: 'all 0.3s ease',
  },
}));

const Footer: FC = () => {
  const pages = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Resources', link: '/resources' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <>
      <FooterMain>
        <FooterContainer>
          <FooterWrapper>
            <FooterLogoHead href={'/'}>
              <Image src={'/logo.svg'} width={120} height={65} alt="Logo" />
            </FooterLogoHead>

            <FooterLinksContainer>
              {pages.map((page, index) => (
                <ListItem key={index} sx={{ p: 0 }}>
                  <FooterLink href={page.link}>
                    {page.name}
                  </FooterLink>
                </ListItem>
              ))}
            </FooterLinksContainer>

            <FooterMediaIcons>
              <FooterMediaItem>
                <Image src={'/footer/Youtube.svg'} width={26} height={26} alt='youtube' />
              </FooterMediaItem>
              <FooterMediaItem>
                <Image src={'/footer/Facebook.svg'} width={22} height={22} alt='facebook' />
              </FooterMediaItem>
              <FooterMediaItem>
                <Image src={'/footer/Instagram.svg'} width={22} height={22} alt='instagram' />
              </FooterMediaItem>
            </FooterMediaIcons>
          </FooterWrapper>
        </FooterContainer>
      </FooterMain>
    </>
  );
};

export default Footer;
