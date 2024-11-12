import { NextRequest, NextResponse } from "next/server";

import { createFullChapterStructure } from "@/services/content";
import { initializeDataSource } from "@/utils/typeorm";

export async function POST(request: NextRequest) {
  try {
    console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
    console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
    await initializeDataSource();
    console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
    console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
    const body = await request.json();

    // createFullChapterStructure(body);
    return NextResponse.json({ error: "K" }, { status: 200 });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json({ error: "failed to create content" }, { status: 500 });
  }
}
