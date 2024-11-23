import { render } from '@react-email/render';
import { hash } from 'bcrypt';

import EmailVerificationTemplate, { EmailVerificationProps } from '../emails/email-verification';
import * as UserRepository from '../repositories/user';
import { RegisterInput } from '../types/auth';
import AuthError, { AuthErrorType } from '../types/auth-error';
import prisma from '../utils/prisma';
import { EmailError, sendEmail } from '../utils/send-email';

export async function registerUser(userData: RegisterInput) {
  if (await UserRepository.getUserByEmail(userData.email)) {
    throw new AuthError(AuthErrorType.EMAIL_ALREADY_EXISTS, 400);
  }

  const user = await UserRepository.registerUser({
    name: userData.name,
    email: userData.email,
    image: '',
    role: 'USER',
    password: await getHashedPassword(userData.password),
    emailVerified: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const tokenIdentifier = `${user.id};;;EMAIL_VERIFICATION_TOKEN`;
  const token = await UserRepository.createVerificationToken(tokenIdentifier);

  await sendVerificationEmail(user.email, {
    userName: user.name,
    identifier: tokenIdentifier, 
    token: token,
  });

  return user;
}

async function sendVerificationEmail(
  email: string, 
  data: EmailVerificationProps, 
): Promise<string> {
  try {
    const html = await render(EmailVerificationTemplate({ ...data }));
    
    return await sendEmail(html, {
      to: email,
      subject: "Verify your Account",
      from: "fizoneechan@gmail.com",
      fromName: "Ace My Exams",
      replyTo: "asma@acemyexam.co.uk",
    });
  } catch (error) {
    if (error instanceof EmailError) {
      throw error;
    }
    throw new EmailError('Failed to prepare verification email', error);
  }
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
    where: { id: identifier.split(';;;')[0] },
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

  const resetToken = await UserRepository.createVerificationToken(`${user.id};;;PASSWORD_RESET_TOKEN`);

  await sendPasswordResetEmail(email, resetToken);
}

async function sendPasswordResetEmail(_email: string, _resetToken: string) {
  // TODO: send password reset emails
}
