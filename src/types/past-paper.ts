import { z } from 'zod';

export const pastPaperSchema = z.object({
  subjectId: z.number(),
  title: z.string(),
  year: z.number(),
});

export const pastPaperUpdateSchema = pastPaperSchema.extend({
  pastPaperId: z.number(),
});

export const pastPaperResourcesSchema = z.object({
  pastPaperId: z.number(),
  resources: z.object({
    questionPaper: z.string().optional(),
    markingScheme: z.string().optional(),
    solutionBooklet: z.string().optional(),
  }),
});

export type IPastPaperData = z.infer<typeof pastPaperSchema>;
export type IPastPaperUpdateData = z.infer<typeof pastPaperUpdateSchema>;
export type IPastPaperResourcesData = z.infer<typeof pastPaperResourcesSchema>;
