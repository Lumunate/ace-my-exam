import * as PastPaperRepository from '../repositories/past-paper';
import { IPastPaperData, IPastPaperResourcesData, IPastPaperUpdateData } from '../types/past-paper';

export async function createPastPaper(data: IPastPaperData) {
  return PastPaperRepository.createPastPaper(data);
}

export async function createResources(data: IPastPaperResourcesData) {
  return PastPaperRepository.createResources(data);
}

export async function updatePastPaper(data: IPastPaperUpdateData) { 
  return PastPaperRepository.updatePastPaper(data);
}
