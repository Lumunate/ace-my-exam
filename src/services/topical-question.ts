import { TopicalQuestionRepository } from '@/repositories/topical-question';
import { ITopicalQuestionData } from '@/types/topical-qeustion';
import { z } from 'zod';

export async function addTopicalQuestion(data: ITopicalQuestionData) {
  return TopicalQuestionRepository.createWithResources(data);
}
