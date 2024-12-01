import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { createPastPaper, createResources, updatePastPaper } from '../../../../../services/past-paper';
import { pastPaperResourcesSchema, pastPaperSchema, pastPaperUpdateSchema } from '../../../../../types/past-paper';

// Update Past Paper Route
export async function POST(request: NextRequest) {
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

// Upload Resources Route
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const data = pastPaperResourcesSchema.parse(body);
    
    await createResources(data);

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

// Update Data Route
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const data = pastPaperUpdateSchema.parse(body);

    await updatePastPaper(data);

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
