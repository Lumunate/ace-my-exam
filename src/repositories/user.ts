import { User } from '@prisma/client';
import { hash } from 'bcrypt';

import prisma from '@/utils/prisma';

export async function registerUser(userData: Omit<User, 'id'>) {
  return prisma.user.create({
    data: userData,
  });
}

export async function getUserById(id: string) { 
  return prisma.user.findUnique({
    where: { id },
  });
}

export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}

export async function createVerificationToken(identifier: string) {
  const token = Math.random().toString(36).substring(2, 15);

  const verificationRequest = await prisma.verificationRequest.create({
    data: {
      identifier,
      token,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
    },
  });

  return verificationRequest.token;
}

export async function validateVerificationToken(identifier: string, token: string) {
  const verificationRequest = await prisma.verificationRequest.findUnique({
    where: {
      identifier_token: {
        identifier,
        token,
      },
    },
  });

  if (!verificationRequest) return false;

  if (verificationRequest.expires < new Date()) return false;

  await prisma.verificationRequest.delete({
    where: {
      id: verificationRequest.id,
    },
  });

  return true;
}

export async function updatePassword(userId: string, newPassword: string) {
  const hashedPassword = await hash(newPassword, 10);

  return prisma.user.update({
    where: { id: userId },
    data: {
      password: hashedPassword,
    },
  });
}
