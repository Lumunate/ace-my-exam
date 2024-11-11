import { PastPaperRepository } from "@/repositories/past-paper";

export async function createPastPaper(data: {
  title: string;
  year: number;
  resources: {
    questionPaper?: string;
    markingScheme?: string;
    solutionBooklet?: string;
  };
}) {
  return PastPaperRepository.createWithResources(data);
}
