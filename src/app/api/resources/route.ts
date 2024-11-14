import { NextRequest, NextResponse } from 'next/server';

import { createFullChapterStructure } from '@/services/content';
import { initializeDataSource } from '@/utils/typeorm';

export async function POST(request: NextRequest) {
  try {
    await initializeDataSource();
    const body = await request.json();

    await createFullChapterStructure(body);

    return NextResponse.json({ error: 'Created structure successfully' }, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
}
