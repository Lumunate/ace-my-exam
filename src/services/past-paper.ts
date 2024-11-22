import * as PastPaperRepository from '@/repositories/past-paper';
import { IPastPaperData } from '@/types/past-paper';

export async function createPastPaper(data: IPastPaperData) {
  return PastPaperRepository.createWithResources(data);
}
