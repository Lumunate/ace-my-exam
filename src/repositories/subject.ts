import { ILike } from 'typeorm';

import { Subject } from '@/entities';
import { SubjectMetadata, SubjectResourceType } from '@/entities/enums/subject-types';
import AppDataSource from '@/utils/typeorm';

export const SubjectRepository = AppDataSource.getRepository(Subject).extend({
  async getExamBoardsByEducationLevel(educationLevel: string) {
    const examBoard = await this.createQueryBuilder('subject')
      .select("DISTINCT(subject.metadata ->> 'examBoard')", 'examBoard')
      .where("subject.metadata ->> 'educationLevel' = :educationLevel", {
        educationLevel,
      })
      .getRawMany();

    return examBoard.map((examBoard) => examBoard.examBoard);
  },

  async getSubjectsByEducationLevelAndExamBoard(educationLevel: string, examBoard: string): Promise<{ id: number; subject: string; tags: string[] }[]> {
    const subjects = await this.createQueryBuilder('subject')
      .select(['id', 'subject.name AS subject', "subject.metadata ->> 'tags' AS tags"])
      .where("subject.metadata ->> 'educationLevel' = :educationLevel", {
        educationLevel,
      })
      .andWhere("subject.metadata ->> 'examBoard' = :examBoard", {
        examBoard,
      })
      .getRawMany();

    return subjects.map((subject) => {
      return {
        id: subject.id,
        subject: subject.subject,
        tags: JSON.parse(subject.tags as string),
      };
    });
  },

  async findOneWithContentsByMeta(data: {
    educationLevel: string | null;
    examBoard: string | null;
    subject: string | null;
    meta: string | null;
  }): Promise<{ pastPapers: boolean; revisionNotes: boolean; topicalQuestions: boolean } | null> {
    const contents = await this.createQueryBuilder('subject')
      .select(['chapter.id AS cid', 'subcontent.id AS sid'])
      .innerJoin('subject.contents', 'chapter')
      .leftJoin('chapter.children', 'subcontent')
      .where('subject.id = :id', {
        id: parseInt(data.subject as string),
      })
      .getRawOne();

    const pastPapers = await this.createQueryBuilder('subject')
      .select('subject.id')
      .innerJoin('subject.pastPapers', 'past_paper')
      .where('subject.id = :id', {
        id: parseInt(data.subject as string),
      })
      .getRawOne();

    return {
      pastPapers: !!pastPapers,
      revisionNotes: !!contents,
      topicalQuestions: !!contents?.sid,
    };
  },

  async findOneWithContents(id: number): Promise<Subject | null> {
    return this.findOne({
      where: { id },
      relations: ['contents'],
    });
  },

  async findWithContentsByCode(code: string): Promise<Subject | null> {
    return this.findOne({
      where: { code },
      relations: ['contents'],
    });
  },

  async findAllWithContents(): Promise<Subject[]> {
    return this.find({
      relations: ['contents'],
    });
  },

  async createSubject(data: Partial<Subject>): Promise<Subject> {
    const subject = this.create(data);

    return this.save(subject);
  },

  async updateSubject(id: number, data: Partial<Subject>): Promise<Subject | null> {
    await this.update(id, data);

    return this.findOneBy({ id });
  },

  // New metadata-specific methods
  async findByTags(tags: string[]): Promise<Subject[]> {
    return this.createQueryBuilder('subject').where("subject.metadata->'tags' ?& ARRAY[:...tags]", { tags }).getMany();
  },

  async findByResourceType(resourceType: SubjectResourceType): Promise<Subject[]> {
    return this.find({
      where: {
        metadata: ILike(`%"resourceType":"${resourceType}"%`),
      },
    });
  },

  async updateMetadata(id: number, metadata: Partial<SubjectMetadata>): Promise<Subject | null> {
    const subject = await this.findOneBy({ id });

    if (!subject) return null;

    subject.metadata = {
      ...subject.metadata,
      ...metadata,
    };

    return this.save(subject);
  },

  async addTagToSubject(id: number, tag: string): Promise<Subject | null> {
    const subject = await this.findOneBy({ id });

    if (!subject) return null;

    subject.addTag(tag);

    return this.save(subject);
  },

  async searchByMetadata(criteria: Partial<SubjectMetadata>): Promise<Subject[]> {
    const queryBuilder = this.createQueryBuilder('subject');

    Object.entries(criteria).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        queryBuilder.andWhere(`subject.metadata->>'${key}' ?& ARRAY[:...${key}]`, { [key]: value });
      } else {
        queryBuilder.andWhere(`subject.metadata->>'${key}' = :${key}`, { [key]: value });
      }
    });

    return queryBuilder.getMany();
  },
});
