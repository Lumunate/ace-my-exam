import { NextRequest, NextResponse } from 'next/server';

import { Content, PastPaper } from '@/entities';
import { createFullChapterStructure, getSubjectContentAndPastPapers } from '@/services/content';
import { initializeDataSource } from '@/utils/typeorm';

export interface IResourceData {
  pastPapers: PastPaper[];
  chapters: Content[];
  topics: Content[];
}

export async function GET(request: NextRequest) {
  await initializeDataSource();
  try {
    const query = request.nextUrl.searchParams;
    const subjectId = query.get('subjectId');

    if (!subjectId || isNaN(parseInt(subjectId))) {
      return NextResponse.json({ error: 'Subject ID is required' }, { status: 400 });
    }

    const data: IResourceData = await getSubjectContentAndPastPapers(parseInt(subjectId));

    return NextResponse.json({ ...data }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
}

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
