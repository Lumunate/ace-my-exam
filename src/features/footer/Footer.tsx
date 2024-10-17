'use client';

import { ListItem, Box, Typography, List, styled } from '@mui/material';
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

const FooterWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const FooterLinksContainer = styled(List)({
  display: 'flex',
  alignItems: 'center',
});

const FooterLogoHead = styled(Link)({
  display: 'flex',
  alignItems: 'center',
});

const FooterMediaIcons = styled(List)({
  display: 'flex',
  alignItems: 'center',
});

const FooterMediaItem = styled(ListItem)({
  padding: '0',
  paddingLeft: '18px',
  cursor: 'pointer',
});

const FooterLink = styled(Link)({
  color: '#fff',
  fontWeight: 400,
  fontSize: '15px',
  textTransform: 'capitalize',
  fontStyle: 'normal',
  fontFamily: 'Lato, sans-serif',
  margin: '0 36px',
  whiteSpace: 'nowrap',
});

const FooterHeading = styled(Typography)({
  color: '#fff',
  fontWeight: 400,
  fontSize: '15px',
  textTransform: 'capitalize',
  fontStyle: 'normal',
  fontFamily: 'Lato, sans-serif',
  marginLeft: '6.5px',
  whiteSpace: 'nowrap',
});

const Footer: FC = () => {
  const pages = ['Home', 'Testimonials', 'About', 'Contact Us'];

  return (
    <>
      <FooterMain>
        <FooterContainer>
          <FooterWrapper>
            <FooterLogoHead href={'/'}>
              <Image src={'/white-logo.png'} width={52} height={49} alt='Logo' />
              <FooterHeading variant="h2">Acemyexam</FooterHeading>
            </FooterLogoHead>

            <FooterLinksContainer>
              {pages.map((page, index) => (
                <ListItem key={index} sx={{ p: 0 }}>
                  <FooterLink href={page === 'Contact' ? '/contact' : '/'}>
                    {page}
                  </FooterLink>
                </ListItem>
              ))}
            </FooterLinksContainer>

            <FooterMediaIcons>
              <FooterMediaItem>
                <Image src={'/footer/Youtube.svg'} width={24} height={24} alt='youtube' />
              </FooterMediaItem>
              <FooterMediaItem>
                <Image src={'/footer/Facebook.svg'} width={19} height={19} alt='facebook' />
              </FooterMediaItem>
              <FooterMediaItem>
                <Image src={'/footer/Instagram.svg'} width={19} height={19} alt='instagram' />
              </FooterMediaItem>
            </FooterMediaIcons>
          </FooterWrapper>
        </FooterContainer>
      </FooterMain>
    </>
  );
};

export default Footer;
