'use client';

// Third-party Imports
import type { ChildrenType } from '@core/types';
import classnames from 'classnames';

// Type Imports

// Util Imports
import { blankLayoutClasses } from './utils/layoutClasses';

const BlankLayout = ({ children }: ChildrenType) => {
  return <div className={classnames(blankLayoutClasses.root, 'is-full bs-full')}>{children}</div>;
};

export default BlankLayout;
