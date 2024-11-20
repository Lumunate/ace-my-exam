import { z } from "zod";

export const revisionNoteSchema = z.object({
  title: z.string(),
  subtopicId: z.number(),
  noteUrl: z.string().url(),
});

export type IRevisionNoteData = z.infer<typeof revisionNoteSchema>;
