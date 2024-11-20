import { z } from "zod";

export const topicalQuestionSchema = z.object({
  title: z.string(),
  subtopicId: z.number(),
  questionPaper: z.string(),
  markingScheme: z.string(),
});

export type ITopicalQuestionData = z.infer<typeof topicalQuestionSchema>;
