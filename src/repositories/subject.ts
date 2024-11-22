import { Prisma } from '@prisma/client';

import { SubjectResourceType } from '@/entities/enums/subject-types';
import prisma from '@/utils/prisma';

export async function getExamBoardsByEducationLevel(educationLevel: string): Promise<string[]> {
  const subjects = await prisma.subject.findMany({
    where: {
      metadata: {
        path: ['educationLevel'],
        equals: educationLevel,
      },
    },
    select: {
      metadata: true,
    },
    distinct: ['metadata'],
  });

  return subjects
    .map((subject) => {
      const metadata = subject.metadata as { examBoard?: string };

      return metadata.examBoard;
    })
    .filter((value, index, self) => value && self.indexOf(value) === index) as string[];
}

export async function getSubjectsByEducationLevelAndExamBoard(educationLevel: string, examBoard: string) {
  const subjects = await prisma.subject.findMany({
    where: {
      AND: [
        {
          metadata: {
            path: ['educationLevel'],
            equals: educationLevel,
          },
        },
        {
          metadata: {
            path: ['examBoard'],
            equals: examBoard,
          },
        },
      ],
    },
    select: {
      id: true,
      name: true,
      metadata: true,
    },
  });

  return subjects.map((subject) => {
    const metadata = subject.metadata as { tags?: string[] };

    return {
      id: subject.id,
      subject: subject.name,
      tags: metadata.tags || [],
    };
  });
}

export async function findOneWithContentsByMeta(data: {
  educationLevel: string | null;
  examBoard: string | null;
  subject: string | null;
  meta: string | null;
}) {
  const subject = await prisma.subject.findFirst({
    where: {
      id: data.subject ? parseInt(data.subject) : undefined,
    },
    include: {
      contents: {
        include: {
          children: true,
        },
      },
      pastPapers: true,
    },
  });

  return {
    pastPapers: (subject?.pastPapers?.length ?? 0) > 0,
    revisionNotes: (subject?.contents?.length ?? 0) > 0,
    topicalQuestions: subject?.contents.some((content) => content.children.length > 0) ?? false,
  };
}

export async function findOneWithContents(id: number) {
  return prisma.subject.findUnique({
    where: { id },
    include: { contents: true },
  });
}

export async function findWithContentsByCode(code: string) {
  return prisma.subject.findFirst({
    where: { code },
    include: { contents: true },
  });
}

export async function findAllWithContents() {
  return prisma.subject.findMany({
    include: { contents: true },
  });
}

export async function createSubject(data: Prisma.SubjectCreateInput) {
  return prisma.subject.create({
    data,
  });
}

export async function updateSubject(id: number, data: Prisma.SubjectUpdateInput) {
  return prisma.subject.update({
    where: { id },
    data,
  });
}

export async function findByTags(tags: string[]) {
  return prisma.subject.findMany({
    where: {
      metadata: {
        path: ['tags'],
        array_contains: tags,
      },
    },
  });
}

export async function findByResourceType(resourceType: SubjectResourceType) {
  return prisma.subject.findMany({
    where: {
      metadata: {
        path: ['resourceType'],
        equals: resourceType,
      },
    },
  });
}

export async function updateMetadata(id: number, metadata: Prisma.JsonValue) {
  return prisma.subject.update({
    where: { id },
    data: {
      metadata: {
        set: metadata,
      },
    },
  });
}
