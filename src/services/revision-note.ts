import * as RevisionNoteRepository from '../repositories/revision-note';
import { IRevisionNoteData } from '../types/revision-note';

export async function addRevisionNote(data: IRevisionNoteData) {
  return RevisionNoteRepository.createWithResource(data);
}
