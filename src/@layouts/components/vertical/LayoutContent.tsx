'use client';
import classnames from 'classnames';

import type { ChildrenType } from '@/@core/types';
import StyledMain from '@/@layouts/styles/shared/StyledMain';
import { verticalLayoutClasses } from '@/@layouts/utils/layoutClasses';

const LayoutContent = ({ children }: ChildrenType) => {
  return (
    <StyledMain
      isContentCompact={true}
      className={classnames(verticalLayoutClasses.content, verticalLayoutClasses.contentCompact, 'flex-auto is-full')}
    >
      {children}
    </StyledMain>
  );
};

export default LayoutContent;
