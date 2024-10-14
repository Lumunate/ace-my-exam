import { hash } from 'bcrypt';

import { UserRepository } from '@/repositories/user';
import { RegisterInput } from '@/types/auth';
import AuthError, { AuthErrorType } from '@/types/auth-error';

export async function registerUser(userData: RegisterInput) {
  if (await UserRepository.getUserbyEmail(userData.email)) {
    throw new AuthError(AuthErrorType.EMAIL_ALREADY_EXISTS, 400);
  }

  const user = await UserRepository.registerUser({
    name: userData.name,
    email: userData.email,
    password: await getHashedPassword(userData.password),
    verificationToken: generateVerificationToken(),
    emailVerified: false,
  });

  await sendVerificationEmail(user.email, user.verificationToken);

  return user;
}

async function sendVerificationEmail(_email: string, _verificationToken: string) {
  // TODO: implement email verification link
}

async function getHashedPassword(password: string) {
  return await hash(password, 10);
}

function generateVerificationToken() {
  return Math.random().toString(36).substring(2, 15);
}

export async function verifyUser(token: string) {
  const user = await UserRepository.findOne({ where: { verificationToken: token } });

  if (!user) {
    throw new AuthError(AuthErrorType.USER_NOT_FOUND, 400);
  }

  user.emailVerified = true;
  user.verificationToken = 'null';

  await UserRepository.save(user);

  return user;
}
