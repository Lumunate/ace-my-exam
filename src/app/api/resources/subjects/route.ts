import { NextRequest, NextResponse } from "next/server";

import { initializeDataSource } from "@/utils/typeorm";
import { createSubject } from "@/services/subject";

export async function POST(request: NextRequest) {
  try {
    await initializeDataSource();
    const body = await request.json();

    const createdSubject = await createSubject(body);
    return NextResponse.json({ data: createdSubject }, { status: 200 });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json({ error: "failed to create content" }, { status: 500 });
  }
}
