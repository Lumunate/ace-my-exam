import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { addTopicalQuestion } from '@/services/topical-question';
import { topicalQuestionSchema } from '@/types/topical-qeustion';
import { initializeDataSource } from '@/utils/typeorm';

export async function POST(request: NextRequest) {
  await initializeDataSource();
  try {
    const body = await request.json();
    const data = topicalQuestionSchema.parse(body);

    await addTopicalQuestion(data);

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
