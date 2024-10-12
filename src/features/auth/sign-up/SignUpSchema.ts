import { z } from 'zod';

export const signUpSchema = z
  .object({
    name: z.string().nonempty('Name is required'),
    email: z
      .string()
      .email('Please enter a valid email address')
      .nonempty('Email is required'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z
      .string()
      .min(6, 'Confirm password must be at least 6 characters long'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });
