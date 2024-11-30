import { z } from 'zod';

export const pastPaperSchema = z.object({
  subjectId: z.number(),
  title: z.string(),
  year: z.number(),
  resources: z.object({
    questionPaper: z.string().optional(),
    markingScheme: z.string().optional(),
    solutionBooklet: z.string().optional(),
  }),
});

export type IPastPaperData = z.infer<typeof pastPaperSchema>;
