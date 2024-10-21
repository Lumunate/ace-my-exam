import { ChildrenType } from '@/@core/types';
import Navbar from '@/@layouts/components/vertical/Navbar';
import LayoutWrapper from '@/@layouts/LayoutWrapper';
import VerticalLayout from '@/@layouts/VerticalLayout';
import VerticalFooter from '@/components/layout/vertical/Footer';
import Navigation from '@/components/layout/vertical/Navigation';
import Providers from '@/components/Providers';

const DashboardLayout = async ({ children }: ChildrenType) => {
  const direction = 'ltr';

  return (
    <Providers direction={direction}>
      <LayoutWrapper
        verticalLayout={
          <VerticalLayout navigation={<Navigation />} navbar={<Navbar />} footer={<VerticalFooter />} >
            {children}
          </VerticalLayout>
        }
      />
    </Providers>
  );
};

export default DashboardLayout; 
