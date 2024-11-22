import { ContentType, ContentLevel } from '@prisma/client';

import { ICreateContent } from '@/types/content';
import prisma from '@/utils/prisma';

export async function findOneBy(id: number) {
  return await prisma.content.findUnique({
    where: { id },
    include: {
      children: {
        include: {
          children: true,
        },
      },
    },
  });
}

export async function createChapter(data: Omit<ICreateContent, 'parentId'>) {
  if (data.subjectId === undefined) {
    throw new Error('subjectId is required');
  }

  return prisma.content.create({
    data: {
      name: data.name,
      subject_id: data.subjectId,
      type: ContentType.CHAPTER,
      level: ContentLevel.CHAPTER,
    },
  });
}

export async function createTopic(data: Omit<ICreateContent, 'subjectId'>) {
  const parent = await prisma.content.findUnique({
    where: { id: data.parentId },
  });

  if (!parent || parent.type !== ContentType.CHAPTER) {
    throw new Error('Topics must be created under chapters');
  }

  return prisma.content.create({
    data: {
      name: data.name,
      type: ContentType.TOPIC,
      level: ContentLevel.TOPIC,
      subject: {
        connect: { id: parent.subject_id },
      },
      parent: {
        connect: { id: data.parentId },
      },
    },
  });
}

export async function createSubtopic(data: Omit<ICreateContent, 'subjectId'>) {
  const parent = await prisma.content.findUnique({
    where: { id: data.parentId },
  });

  if (!parent || parent.type !== ContentType.TOPIC) {
    throw new Error('Subtopics must be created under topics');
  }

  return prisma.content.create({
    data: {
      name: data.name,
      type: ContentType.SUBTOPIC,
      level: ContentLevel.SUBTOPIC,
      subject: {
        connect: { id: parent.subject_id },
      },
      parent: {
        connect: { id: data.parentId },
      },
    },
  });
}

export async function getChapterWithContent(chapterId: number) {
  return prisma.content.findUnique({
    where: {
      id: chapterId,
      type: ContentType.CHAPTER,
    },
    include: {
      children: {
        include: {
          children: true,
        },
      },
    },
  });
}

export async function getSubjectWithContent(subjectId: number) {
  return prisma.content.findMany({
    where: {
      subject_id: subjectId,
    },
    include: {
      children: {
        include: {
          children: true,
        },
      },
    },
  });
}
