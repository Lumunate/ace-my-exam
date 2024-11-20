import { addRevisionNote } from "@/services/revision-note";
import { revisionNoteSchema } from "@/types/revision-note";
import { initializeDataSource } from "@/utils/typeorm";
import { NextRequest, NextResponse } from "next/server";
import { z, ZodError } from "zod";

export async function POST(request: NextRequest) {
  await initializeDataSource();
  try {
    const body = await request.json();
    const data = revisionNoteSchema.parse(body);

    await addRevisionNote(data);

    return NextResponse.json({ error: "Created structure successfully" }, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message || "Internal Server Error" }, { status: 500 });
    }

    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
