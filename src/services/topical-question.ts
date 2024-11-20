
import { TopicalQuestionRepository } from '@/repositories/topical-question';
import { ITopicalQuestionData } from '@/types/topical-qeustion';

export async function addTopicalQuestion(data: ITopicalQuestionData) {
  return TopicalQuestionRepository.createWithResources(data);
}
