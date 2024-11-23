import { Prisma, Subject } from '@prisma/client';

import * as SubjectRepository from '../repositories/subject';

export async function getAllSubjectsWithContents(): Promise<Subject[]> {
  return SubjectRepository.findAllWithContents();
}

export async function getSubjectById(id: number): Promise<Subject | null> {
  return SubjectRepository.findOneWithContents(id);
}

export async function getSubjectByCode(code: string): Promise<Subject | null> {
  return SubjectRepository.findWithContentsByCode(code);
}

export async function createSubject(data: Prisma.SubjectCreateInput): Promise<Subject> {
  return SubjectRepository.createSubject(data);
}

export interface IReferenceData {
  examBoards: string[];
  subjects: { id: number; subject: string; tags: string[] }[];
  validResources: {
    pastPapers: boolean;
    topicalQuestions: boolean;
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
    throw new Error('Education Level must be defined');
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
