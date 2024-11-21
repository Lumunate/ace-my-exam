import { Box } from '@mui/material';
import { getServerSession } from 'next-auth';

import AuthProvider from '@/contexts/AuthContext';
import SideBar from '@/features/admin/side-bar/Sidebar';
export default async function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <AuthProvider session={session}>
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Box sx={{ flexGrow: 1, padding: '2.4rem 1.8rem', minHeight: '100vh' }}>{children}</Box>
      </Box>
    </AuthProvider>
  );
}
