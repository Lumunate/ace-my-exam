import Navbar from '@/features/admin/nav-bar/Navbar';

const AdminMainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default AdminMainLayout;
