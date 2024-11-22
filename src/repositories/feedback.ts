import { Feedback } from '@prisma/client';

import prisma from '@/utils/prisma';

export async function createFeedback(feedbackData: Omit<Feedback, 'id' | 'createdAt'>) {
  return prisma.feedback.create({
    data: feedbackData,
  });
}

export async function findAllFeedbacks() {
  return prisma.feedback.findMany();
}
