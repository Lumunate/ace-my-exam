import { NextRequest, NextResponse } from 'next/server';

import { UserRepository } from '@/repositories/user';
import { initializeDataSource } from '@/utils/typeorm';

export async function GET(req: NextRequest) {
  await initializeDataSource();
  try {
    const data = req.nextUrl.searchParams;
    const email = data.get('email');
    const user = await UserRepository.getUserbyEmail(email as string);

    if (!user) return NextResponse.json({ message: 'User not found' }, { status: 404 });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
