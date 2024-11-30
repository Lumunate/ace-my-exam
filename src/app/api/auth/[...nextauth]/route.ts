import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { compare } from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import AuthError, { AuthErrorType } from 'types/auth-error';

import prisma from '../../../../utils/prisma';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new AuthError(AuthErrorType.MISSING_FIELDS, 400);
        }
        
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        
        if (!user) {
          throw new AuthError(AuthErrorType.USER_NOT_FOUND, 404);
        }
        if (!user.emailVerified) {
          throw new AuthError(AuthErrorType.ACCOUNT_UNVERIFIED, 401);
        }
        
        const isValidPassword = await compare(credentials.password, user.password);
        
        if (!isValidPassword) {
          throw new AuthError(AuthErrorType.INVALID_CREDENTIALS, 401);
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          isAdmin: user.role === 'ADMIN',
        };
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;

      return session;
    },
  },
});

export { handler as GET, handler as POST };
