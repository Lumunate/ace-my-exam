import { TypeORMAdapter } from '@auth/typeorm-adapter';
import { compare } from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import User from '@/entities/user';
import AppDataSource from '@/utils/typeorm';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, _req) {
        // Add 'req' parameter here
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await AppDataSource.getRepository(User).findOne({ where: { email: credentials.email } });

        if (!user || !user.emailVerified) {
          return null;
        }

        const isValid = await compare(credentials.password, user.password);

        if (!isValid) {
          return null;
        }

        return { id: user.id.toString(), email: user.email, name: user.name };
      },
    }),
  ],
  adapter: TypeORMAdapter(AppDataSource.options),
  session: {
    strategy: 'jwt',
  },
  // Add custom pages for sign in, sign out, etc.
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },
});
