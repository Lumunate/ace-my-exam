import './globals.css';
import { getServerSession } from 'next-auth';

import AuthProvider from '@/contexts/AuthContext';
import Footer from '@/features/footer/Footer';
import Navbar from '@/features/navbar/Navbar';

export const metadata = {
  title: 'Ace My Exams',
  description: 'Generated by create next app',
};

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <AuthProvider session={session} >
      <Navbar />
      {children}
      <Footer />
    </AuthProvider>
  );
}
