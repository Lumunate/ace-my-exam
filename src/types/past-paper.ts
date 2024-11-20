import { z } from 'zod';

export const pastPaperSchema = z.object({
  title: z.string(),
  year: z.number(),
  resources: z.object({
    questionPaper: z.string().optional(),
    markingScheme: z.string().optional(),
    solutionBooklet: z.string().optional(),
  }),
});

export type IPastPaperData = z.infer<typeof pastPaperSchema>;
