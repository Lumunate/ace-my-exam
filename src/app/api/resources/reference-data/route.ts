import { NextRequest, NextResponse } from 'next/server';

import { createContent } from '@/services/content';
import {  getEducationOptionBySelection, IReferenceData } from '@/services/subject';
import { createContentSchema } from '@/types/content';
import { initializeDataSource } from '@/utils/typeorm';

export async function GET(request: NextRequest) {
  await initializeDataSource();
  try {
    const query = request.nextUrl.searchParams;
    const data = {
      educationLevel: query.get('educationLevel'),
      examBoard: query.get('examBoard'),
      subject: query.get('subject'),
      meta: query.get('meta'),
    };

    const _data: Partial<IReferenceData> = await getEducationOptionBySelection(data);

    return NextResponse.json({ success: true, ..._data }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  await initializeDataSource();
  try {
    const body = await request.json();
    const data = createContentSchema.parse(body);

    const createdSubject = await createContent(data);

    return NextResponse.json({ success: true, data: createdSubject }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
}
