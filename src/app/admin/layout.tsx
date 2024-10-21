import 'react-perfect-scrollbar/dist/css/styles.css';
import type { ChildrenType } from '@/components/@core/types';
import './admin.css';

export const metadata = {
  title: 'Demo: Materio - NextJS Dashboard Free',
  description:
    'Develop next-level web apps with Materio Dashboard Free - NextJS. Now, updated with lightning-fast routing powered by MUI and App router.'
};

const RootLayout = ({ children }: ChildrenType) => {
  const direction = 'ltr';

  return (
    <html id='__next' dir={direction}>
      <body className='flex is-full min-bs-full flex-auto flex-col'>{children}</body>
    </html>
  );
};

export default RootLayout;
