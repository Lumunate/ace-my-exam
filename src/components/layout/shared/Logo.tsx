'use client';
import styled from '@emotion/styled';
import type { CSSProperties } from 'react';

import MaterioLogo from '@/components/@core/svg/Logo';

type LogoTextProps = {
  color?: CSSProperties['color']
}

const LogoText = styled.span<LogoTextProps>`
  color: ${({ color }) => color ?? 'var(--mui-palette-text-primary)'};
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: 0.15px;
  text-transform: uppercase;
  margin-inline-start: 10px;
`;

const Logo = ({ color }: { color?: CSSProperties['color'] }) => {
  return (
    <div className='flex items-center min-bs-[24px]'>
      <MaterioLogo className='text-[22px] text-primary' />
      <LogoText color={'white'}>Ace my exams</LogoText>
    </div>
  );
};

export default Logo;
