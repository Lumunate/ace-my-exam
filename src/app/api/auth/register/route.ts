import { hash } from "bcrypt";
// import { sendVerificationEmail } from "../../../utils/email";
import AppDataSource, { initializeDataSource } from "@/utils/typeorm";
import User from "@/entities/user";
import { NextRequest, NextResponse } from "next/server";
import { registerSchema } from "@/types/auth";
import { registerUser } from "@/services/auth";
import { ZodError } from "zod";
import AuthError from "@/types/auth-error";

export default async function POST(request: NextRequest) {
  await initializeDataSource();
  try {
    const body = await request.json();
    const validatedData = registerSchema.parse(body);

    const user = await registerUser(validatedData);

    return NextResponse.json(user, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof AuthError) {
      return NextResponse.json({ errors: error.message, name: error.name }, { status: error.statusCode });
    }
    if (error instanceof ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message || "Internal Server Error" }, { status: 500 });
    }

    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
