import { RevisionNoteRepository } from "@/repositories/revision-note";

export async function addRevisionNote(data: { title: string; subtopicId: number; noteUrl: string }) {
  return RevisionNoteRepository.createWithResource(data);
}
