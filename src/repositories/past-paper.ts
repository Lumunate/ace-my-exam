import { PastPaperResourceType } from '@prisma/client';

import { IPastPaperData } from '@/types/past-paper';
import prisma from '@/utils/prisma';

export async function createWithResources(data: IPastPaperData) {
  return prisma.$transaction(async (tx) => {
    const pastPaper = await tx.pastPaper.create({
      data: {
        title: data.title,
        year: data.year,
      },
    });

    const resources = [];

    if (data.resources.questionPaper) {
      resources.push(
        tx.resource.create({
          data: {
            url: data.resources.questionPaper,
            type: 'pdf',
            pastPaperResources: {
              create: {
                pastPaper: { connect: { id: pastPaper.id } },
                resource_type: PastPaperResourceType.QUESTION_PAPER,
              },
            },
          },
        })
      );
    }

    if (data.resources.markingScheme) {
      resources.push(
        tx.resource.create({
          data: {
            url: data.resources.markingScheme,
            type: 'pdf',
            pastPaperResources: {
              create: {
                pastPaper: { connect: { id: pastPaper.id } },
                resource_type: PastPaperResourceType.MARKING_SCHEME,
              },
            },
          },
        })
      );
    }

    if (data.resources.solutionBooklet) {
      resources.push(
        tx.resource.create({
          data: {
            url: data.resources.solutionBooklet,
            type: 'pdf',
            pastPaperResources: {
              create: {
                pastPaper: { connect: { id: pastPaper.id } },
                resource_type: PastPaperResourceType.SOLUTION_BOOKLET,
              },
            },
          },
        })
      );
    }

    await Promise.all(resources);

    return tx.pastPaper.findUnique({
      where: { id: pastPaper.id },
      include: {
        resources: {
          include: {
            resource: true,
          },
        },
      },
    });
  });
}

export async function findWithResources(id: number) {
  return prisma.pastPaper.findUnique({
    where: { id },
    include: {
      resources: {
        include: {
          resource: true,
        },
      },
    },
  });
}

export async function findPastPapers(subjectId: number) {
  return prisma.pastPaper.findMany({
    where: { subject_id: subjectId },
    include: {
      resources: {
        include: {
          resource: true,
        },
      },
    },
  });
}
