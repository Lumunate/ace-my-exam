import {NextResponse} from 'next/server';
import {getToken} from 'next-auth/jwt';

export default async function middleware(req) {
  const token = await getToken({req, secret: process.env.NEXTAUTH_SECRET});

  console.log('token debug 101', token);

  if (token && token.role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin'
  ]
};