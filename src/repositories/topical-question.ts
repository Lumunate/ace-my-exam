import { ContentType, TopicalQuestionResourceType } from '@prisma/client';

import { ITopicalQuestionData } from '../types/topical-qeustion';
import prisma from '../utils/prisma';

export async function createWithResources(data: ITopicalQuestionData) {
  return prisma.$transaction(async (tx) => {
    const content = await tx.content.findFirst({
      where: {
        id: data.subtopicId,
        type: ContentType.SUBTOPIC,
      },
    });

    if (!content) throw new Error('Invalid subtopic ID');

    const topicalQuestion = await tx.topicalQuestion.create({
      data: {
        title: data.title,
        content: {
          connect: { id: content.id },
        },
        resources: {
          create: [
            {
              resource: {
                create: {
                  url: data.questionPaper,
                  type: 'pdf',
                },
              },
              resource_type: TopicalQuestionResourceType.QUESTION_PAPER,
            },
            {
              resource: {
                create: {
                  url: data.markingScheme,
                  type: 'pdf',
                },
              },
              resource_type: TopicalQuestionResourceType.MARKING_SCHEME,
            },
          ],
        },
      },
      include: {
        resources: {
          include: {
            resource: true,
          },
        },
      },
    });

    return topicalQuestion;
  });
}

export async function findBySubtopic(subtopicId: number) {
  return prisma.topicalQuestion.findMany({
    where: { content_id: subtopicId },
    include: {
      resources: {
        include: {
          resource: true,
        },
      },
    },
  });
}

export async function getResourceCount() {
  return prisma.topicalQuestion.findFirst({
    select: {
      _count: {
        select: {
          resources: true
        }
      }
    }
  });
}
