import AccountHeader from '@/features/admin/account/AccountHeader';

const AdminAccountLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <AccountHeader />
      {children}
    </>
  );
};

export default AdminAccountLayout;
