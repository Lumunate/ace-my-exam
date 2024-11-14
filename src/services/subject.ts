import { Subject } from "@/entities";
import type { SubjectMetadata } from "@/entities/enums/subject-types";
import { SubjectResourceType } from "@/entities/enums/subject-types";
import { SubjectRepository } from "@/repositories/subject";

export async function getAllSubjectsWithContents(): Promise<Subject[]> {
  return SubjectRepository.findAllWithContents();
}

export async function getSubjectById(id: number): Promise<Subject | null> {
  return SubjectRepository.findOneWithContents(id);
}

export async function getSubjectByCode(code: string): Promise<Subject | null> {
  return SubjectRepository.findWithContentsByCode(code);
}

export async function createSubject(data: Partial<Subject>): Promise<Subject> {
  return SubjectRepository.createSubject(data);
}

export async function updateSubject(id: number, data: Partial<Subject>): Promise<Subject | null> {
  return SubjectRepository.updateSubject(id, data);
}

export async function deleteSubject(id: number): Promise<boolean> {
  const subject = await SubjectRepository.findOneBy({ id });
  if (!subject) return false;

  await SubjectRepository.remove(subject);
  return true;
}

export async function addTagToSubject(id: number, tag: string): Promise<Subject | null> {
  return SubjectRepository.addTagToSubject(id, tag);
}

export async function removeTagFromSubject(id: number, tag: string): Promise<Subject | null> {
  const subject = await SubjectRepository.findOneBy({ id });
  if (!subject) return null;

  subject.removeTag(tag);
  return SubjectRepository.save(subject);
}

export async function updateSubjectMetadata(id: number, metadata: Partial<SubjectMetadata>): Promise<Subject | null> {
  return SubjectRepository.updateMetadata(id, metadata);
}

export async function findSubjectsByTags(tags: string[]): Promise<Subject[]> {
  return SubjectRepository.findByTags(tags);
}

export async function findSubjectsByResourceType(resourceType: SubjectResourceType): Promise<Subject[]> {
  return SubjectRepository.findByResourceType(resourceType);
}

export async function searchSubjectsByMetadata(criteria: Partial<SubjectMetadata>): Promise<Subject[]> {
  return SubjectRepository.searchByMetadata(criteria);
}


export interface IReferenceData {
  examBoards: string[];
  subjects: { id: number; subject: string; tags: string[] }[];
  validResources: {
    pastPaper: boolean;
    topcialQuestions: boolean;
    revisionNotes: boolean;
  };
}

export async function getEducationOptionBySelection(data: {
  educationLevel: string | null;
  examBoard: string | null;
  subject: string | null;
  meta: string | null;
}): Promise<Partial<IReferenceData>> {
  if (!data.educationLevel) {
    throw new Error("Education Level must be defined");
  }

  if (!data.examBoard) {
    const _data = await SubjectRepository.getExamBoardsByEducationLevel(data.educationLevel);

    return {
      examBoards: _data,
    };
  }

  if (!data.subject) {
    const _data = await SubjectRepository.getSubjectsByEducationLevelAndExamBoard(data.educationLevel, data.examBoard);

    return {
      subjects: _data,
    };
  }

  const _data = await SubjectRepository.findOneWithContentsByMeta(data);

  return {
    validResources: _data,
  };
}