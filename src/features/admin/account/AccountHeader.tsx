import { Box } from '@mui/material';
import Image from 'next/image';

import {
  AccountDetailsBox,
  AccountHeaderBox,
  AccountName,
  AccountTag,
  AccountWrapper,
  BgWrapper,
  NavbarWrapper,
} from './AccountHeader.style';
import Navbar from '../nav-bar/Navbar';

const AccountHeader = () => {
  return (
    <AccountHeaderBox>
      <BgWrapper>
        <Image src={'/decorative/account-header-bg.svg'} alt="Account Header" layout="fill" objectFit="cover" />
      </BgWrapper>

      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>

      <AccountWrapper>
        <AccountDetailsBox>
          <Image src={'/decorative/dummy-account.png'} alt="Profile Picture" width={80} height={80} style={{ borderRadius: '6px' }} />
          <Box>
            <AccountName>John Doe</AccountName>
            <AccountTag>@johndoe</AccountTag>
          </Box>
        </AccountDetailsBox>
      </AccountWrapper>
    </AccountHeaderBox>
  );
};

export default AccountHeader;
