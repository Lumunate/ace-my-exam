import { ContentType } from "@prisma/client";
import { IRevisionNoteData } from "@/types/revision-note";
import prisma from "@/utils/prisma";

export async function createWithResource(data: IRevisionNoteData) {
  return prisma.$transaction(async (tx) => {
    const content = await tx.content.findFirst({
      where: {
        id: data.subtopicId,
        type: ContentType.SUBTOPIC,
      },
    });

    if (!content) throw new Error("Invalid subtopic ID");

    const revisionNote = await tx.revisionNote.create({
      data: {
        title: data.title,
        content: {
          connect: { id: content.id },
        },
        resources: {
          create: {
            resource: {
              create: {
                url: data.noteUrl,
                type: "pdf",
              },
            },
          },
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

    return revisionNote;
  });
}

export async function findBySubtopic(subtopicId: number) {
  return prisma.revisionNote.findMany({
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
