import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().nonempty('Name is required'),
  lastName: z.string().nonempty('Last Name is required'),
  email: z
    .string()
    .email('Invalid email address')
    .nonempty('Email is required'),
  phone: z
    .string()
    .nonempty('Phone number is required')
    .regex(/^\d+$/, 'Phone number must contain only digits'),
  message: z.string().nonempty('Message is required'),
});
