import { NextResponse } from 'next/server';

import { getResourceCounts } from 'services/content';

export interface IResourceCounts {
  pastPapers: number;
  revisionNotes: number;
  topicalQuestions: number;
}

export async function GET() {
  try {
    const data: IResourceCounts = await getResourceCounts();

    return NextResponse.json({ ...data }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
}
