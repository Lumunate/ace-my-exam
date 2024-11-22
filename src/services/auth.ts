import { hash } from "bcrypt";

import * as UserRepository from "@/repositories/user";
import { RegisterInput } from "@/types/auth";
import AuthError, { AuthErrorType } from "@/types/auth-error";
import prisma from "@/utils/prisma";

export async function registerUser(userData: RegisterInput) {
  if (await UserRepository.getUserByEmail(userData.email)) {
    throw new AuthError(AuthErrorType.EMAIL_ALREADY_EXISTS, 400);
  }

  const user = await UserRepository.registerUser({
    name: userData.name,
    email: userData.email,
    image: "",
    role: "USER",
    password: await getHashedPassword(userData.password),
    emailVerified: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const token = await UserRepository.createVerificationToken(`${user.id}&&&EMAIL_VERIFICATION-TOKEN`);

  await sendVerificationEmail(user.email!, token);

  return user;
}

async function sendVerificationEmail(_email: string, _verificationToken: string) {
  // TODO: implement email verification link
}

async function getHashedPassword(password: string) {
  return await hash(password, 10);
}

export async function verifyUser(identifier: string, token: string) {
  const verificationToken = await UserRepository.validateVerificationToken(identifier, token);

  if (!verificationToken) {
    throw new AuthError(AuthErrorType.TOKEN_INVALID, 401);
  }

  const updatedUser = await prisma.user.update({
    where: { id: identifier.split("&&&")[0] },
    data: {
      emailVerified: true,
    },
  });

  if (!updatedUser) {
    throw new AuthError(AuthErrorType.USER_NOT_FOUND, 404);
  }

  return updatedUser;
}

export async function resetPassword(email: string) {
  const user = await UserRepository.getUserByEmail(email);

  if (!user) {
    throw new AuthError(AuthErrorType.USER_NOT_FOUND, 404);
  }

  const resetToken = await UserRepository.createVerificationToken(`${user.id}&&&PASSWORD_RESET_TOKEN`);

  await sendPasswordResetEmail(email, resetToken);
}

async function sendPasswordResetEmail(_email: string, _resetToken: string) {
  // TODO: send password reset emails
}
