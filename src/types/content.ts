import { z } from "zod";

export const createContentSchema = z.object({
  name: z.string(),
  subjectId: z.number().optional(),
  parentId: z.number().optional(),
  description: z.string().optional(),
});

export type ICreateContent = z.infer<typeof createContentSchema>;
