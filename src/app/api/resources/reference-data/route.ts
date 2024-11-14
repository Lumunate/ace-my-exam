import { NextRequest, NextResponse } from "next/server";

import { initializeDataSource } from "@/utils/typeorm";
import { createSubject, getEducationOptionBySelection, IReferenceData } from "@/services/subject";

export async function GET(request: NextRequest) {
  await initializeDataSource();
  try {
    const query = request.nextUrl.searchParams;
    const data = {
      educationLevel: query.get("educationLevel"),
      examBoard: query.get("examBoard"),
      subject: query.get("subject"),
      meta: query.get("meta"),
    };

    const _data: Partial<IReferenceData> = await getEducationOptionBySelection(data);

    return NextResponse.json({ success: true, ..._data }, { status: 200 });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await initializeDataSource();
    const body = await request.json();

    const createdSubject = await createSubject(body);
    return NextResponse.json({ success: true, data: createdSubject }, { status: 200 });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json({ success: false, error: "failed to create content" }, { status: 500 });
  }
}