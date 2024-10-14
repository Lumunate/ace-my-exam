import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { createContact } from '@/services/contact';
import { contactSchema } from '@/types/contact';
import { initializeDataSource } from '@/utils/typeorm';

export async function POST(request: NextRequest) {
  await initializeDataSource();
  
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const contact = await createContact(validatedData);

    return NextResponse.json(contact, { status: 201 });
  } catch (error: unknown) {
    // console.error(error);
    if (error instanceof ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message || 'Internal Server Error' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
