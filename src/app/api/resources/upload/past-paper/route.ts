import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { createPastPaper } from '@/services/past-paper';
import { pastPaperSchema } from '@/types/past-paper';
import { initializeDataSource } from '@/utils/typeorm';

export async function POST(request: NextRequest) {
  await initializeDataSource();
  try {
    const body = await request.json();
    const data = pastPaperSchema.parse(body);

    await createPastPaper(data);

    return NextResponse.json({ error: 'Created structure successfully' }, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message || 'Internal Server Error' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}