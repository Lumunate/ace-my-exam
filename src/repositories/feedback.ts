import prisma from "@/utils/prisma";
import { Feedback } from "@prisma/client";

export async function createFeedback(feedbackData: Omit<Feedback, "id" | "createdAt">) {
  return prisma.feedback.create({
    data: feedbackData,
  });
}

export async function findAllFeedbacks() {
  return prisma.feedback.findMany();
}
