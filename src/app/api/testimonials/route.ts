import { NextRequest, NextResponse } from 'next/server';

import { getTestimonials } from '@/services/testimonials';
import { initializeDataSource } from '@/utils/typeorm';

export async function GET(_request: NextRequest) {
  await initializeDataSource();
  try {
    const testimonials = await getTestimonials();

    return NextResponse.json({ testimonials }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message || 'Internal Server Error' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
