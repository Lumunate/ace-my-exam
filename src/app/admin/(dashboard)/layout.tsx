// Type Imports
import { ChildrenType } from '@/@core/types'
import Navbar from '@/@layouts/components/vertical/Navbar'
import LayoutWrapper from '@/@layouts/LayoutWrapper'
import VerticalLayout from '@/@layouts/VerticalLayout'
import Navigation from '@/components/layout/vertical/Navigation'
import VerticalFooter from '@/components/layout/vertical/Footer'
import Providers from '@/components/Providers'

// Layout Imports

// Component Imports

const Layout = async ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'

  return (
    <Providers direction={direction}>
      <LayoutWrapper
        verticalLayout={
          <VerticalLayout navigation={<Navigation />} navbar={<Navbar />} footer={<VerticalFooter />}>
            {children}
          </VerticalLayout>
        }
      />
    </Providers>
  )
}

export default Layout
