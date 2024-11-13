import { Subject } from "@/entities";
import { SubjectMetadata, SubjectResourceType } from "@/entities/enums/subject-types";
import AppDataSource from "@/utils/typeorm";
import { ILike } from "typeorm";

export const SubjectRepository = AppDataSource.getRepository(Subject).extend({
  async findWithContents(id: number): Promise<Subject | null> {
    return this.findOne({
      where: { id },
      relations: ["contents"],
    });
  },

  async findWithContentsByCode(code: string): Promise<Subject | null> {
    return this.findOne({
      where: { code },
      relations: ["contents"],
    });
  },

  async findAllWithContents(): Promise<Subject[]> {
    return this.find({
      relations: ["contents"],
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
    return this.createQueryBuilder("subject").where("subject.metadata->'tags' ?& ARRAY[:...tags]", { tags }).getMany();
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
    const queryBuilder = this.createQueryBuilder("subject");

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
