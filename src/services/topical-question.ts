import { TopicalQuestionRepository } from '@/repositories/topical-question';

export async function addTopicalQuestion(data: {
  title: string;
  subtopicId: number;
  questionPaper: string;
  markingScheme: string;
}) {
  return TopicalQuestionRepository.createWithResources(data);
}
