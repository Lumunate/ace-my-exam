import { createSubject } from "@/services/subject";
import { initializeDataSource } from "@/utils/typeorm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await initializeDataSource();
  try {
    const body = await request.json();

    const createdSubject = await createSubject(body);

    return NextResponse.json({ success: true, data: createdSubject }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
}
