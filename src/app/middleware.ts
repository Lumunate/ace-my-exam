// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import dbConnect from '@/utils/mongodb';

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api')) {
    try {
      await dbConnect();
    } catch {
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
