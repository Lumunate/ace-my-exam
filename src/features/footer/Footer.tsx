import {ListItem } from '@mui/material';
import Image from 'next/image';

import {
  FooterContainer,
  FooterLink,
  FooterLinksContainer,
  FooterWrapper,
  FooterMain, 
  FooterMediaIcons, 
  FooterMediaItem,
  FooterHeading,
  FooterLogoHead
} from '@/features/footer/Footer.style';

const pages = ['Home', 'Testimonials','About', 'Contact Us'];

function Footer() {
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
                <ListItem key={index} sx={{p:0}}>
                  <FooterLink
                    href={page === 'Contact' ? '/contact' : '/'}
                  >
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
}

export default Footer;