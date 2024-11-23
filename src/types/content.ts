import { Content, Resource, RevisionNote, RevisionNoteResource, TopicalQuestion, TopicalQuestionResource } from '@prisma/client';
import { z } from 'zod';

export const createContentSchema = z.object({
  name: z.string(),
  subjectId: z.number().optional(),
  parentId: z.number().optional(),
  description: z.string().optional(),
});

export const editContentSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().optional(),
});

export type ICreateContent = z.infer<typeof createContentSchema>;
export type IEditContent = z.infer<typeof editContentSchema>;

export interface ContentWithChildren extends Content {
  children?: ContentWithChildren[] | null;
  revisionNotes?: (RevisionNote & { resources: (RevisionNoteResource & { resource: Resource })[] })[];
  topicalQuestions?: (TopicalQuestion & { resources: (TopicalQuestionResource & { resource: Resource })[] })[];
}
