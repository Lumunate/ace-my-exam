import { z } from 'zod';

export enum ResourceType {
  REVISION_NOTES = 'REVISION_NOTES',
  PAST_PAPER = 'PAST_PAPER',
  TOPIC_QUESTIONS = 'TOPIC_QUESTIONS',
}

export enum Subjects {
  MATH = 'MATH',
  SCIENCE = 'SCIENCE', 
  PHYSICS = 'PHYSICS',
  CHEMISTRY = 'CHEMISTRY',
  BIOLOGY = 'BIOLOGY',
  FURTHER_MATH = 'FURTHER_MATH',
}

export enum EducationLevel {
  A_LEVEL = 'A_LEVEL',
  GCSE = 'GCSE',
  IGCSE = 'IGCSE',
  KS3 = 'KS3',
  ENTRANCE_EXAMS = 'ENTRANCE_EXAMS',
}

export enum AgeGroups {
  PRIMARY_SCHOOL = 'PRIMARY_SCHOOL',
  SECONDARY_SCHOOL = 'SECONDARY_SCHOOL',
  HIGHER_SECONDARY = 'HIGHER_SECONDARY',
  SCHOLARSHIP = 'SCHOLARSHIP',
}

export enum ExamBoards {
  NONE = 'NONE',
  AQA = 'AQA',
  OXFORD_AQA = 'OXFORD_AQA',
  EDEXCEL = 'EDEXCEL',
  EDEXCEL_INTERNATIONAL = 'EDEXCEL_INTERNATIONAL',
  CAIE = 'CAIE',
  WJEC = 'WJEC',
  OCR_A = 'OCR_A',
  OCR_B = 'OCR_B',
  OCR = 'OCR',
  OCR_21 = 'OCR_21',
  OCR_GATEWAY = 'OCR_GATEWAY',
  OCR_MEI = 'OCR_MEI',
  ISEB = 'ISEB',
  SCHOOL = 'SCHOOL',
}

const ResourceLink = z.string().url();

export const PastPaperLink = z.object({
  markingScheme: ResourceLink,
  pastPaper: ResourceLink,
  solutionBooklet: ResourceLink,
});

export const TopicQuestionsLink = z.object({
  markingScheme: ResourceLink,
  pastPaper: ResourceLink,
  solutionBooklet: ResourceLink,
});

export const RevisionNotesLink = z.object({
  notes: ResourceLink,
});

const LinkSchema = z.union([PastPaperLink, TopicQuestionsLink, RevisionNotesLink]);

export type Link = z.infer<typeof LinkSchema>;
export type IPastPaperLink = z.infer<typeof PastPaperLink>;
export type ITopicQuestionsLink = z.infer<typeof TopicQuestionsLink>;
export type IRevisionNotesLink = z.infer<typeof RevisionNotesLink>;

export const createResourceSchema = z.object({
  title: z.string().min(3).max(255),
  description: z.string().optional(),
  resource_type: z.enum([ResourceType.REVISION_NOTES, ResourceType.PAST_PAPER, ResourceType.TOPIC_QUESTIONS]),
  subject: z.enum([Subjects.BIOLOGY, Subjects.CHEMISTRY, Subjects.FURTHER_MATH, Subjects.MATH, Subjects.PHYSICS]),
  board: z.enum([
    ExamBoards.AQA,
    ExamBoards.EDEXCEL,
    ExamBoards.EDEXCEL_INTERNATIONAL,
    ExamBoards.CAIE,
    ExamBoards.OCR_A,
    ExamBoards.OCR_B,
    ExamBoards.OCR,
    ExamBoards.OCR_21,
    ExamBoards.OCR_GATEWAY,
    ExamBoards.ISEB,
    ExamBoards.SCHOOL,
  ]),
  year: z.number().int().min(1950).max(new Date().getFullYear()),
  education_level: z.enum([
    EducationLevel.A_LEVEL,
    EducationLevel.GCSE,
    EducationLevel.IGCSE,
    EducationLevel.KS3,
    EducationLevel.ENTRANCE_EXAMS,
  ]),
  is_public: z.boolean().default(true),
  tags: z.array(z.string()).optional(),
  file: LinkSchema,
});

export type CreateResourceInput = z.infer<typeof createResourceSchema>;
