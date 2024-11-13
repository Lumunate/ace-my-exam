import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "./base-entity";
import { Content } from "./content";
import type { SubjectMetadata } from "./enums/subject-types";
import { SubjectResourceType } from "./enums/subject-types";
import { PastPaper } from "./past-paper";

@Entity("subjects")
export class Subject extends BaseEntity {
  @Column()
  name: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column({ nullable: true })
  code?: string;

  @Column({
    type: "jsonb",
    nullable: true,
    default: {
      tags: [],
      resourceType: SubjectResourceType.OTHER,
    },
  })
  metadata: SubjectMetadata;

  @OneToMany(() => Content, (content) => content.subject)
  contents: Content[];

  @OneToMany(() => PastPaper, (ppr) => ppr.subject)
  pastPapers: PastPaper[];

  addTag(tag: string): void {
    if (!this.metadata.tags) {
      this.metadata.tags = [];
    }
    if (!this.metadata.tags.includes(tag)) {
      this.metadata.tags.push(tag);
    }
  }

  removeTag(tag: string): void {
    if (this.metadata.tags) {
      this.metadata.tags = this.metadata.tags.filter(t => t !== tag);
    }
  }

  setResourceType(type: SubjectResourceType): void {
    this.metadata.resourceType = type;
  }

  addPrerequisite(prerequisite: string): void {
    if (!this.metadata.prerequisites) {
      this.metadata.prerequisites = [];
    }
    if (!this.metadata.prerequisites.includes(prerequisite)) {
      this.metadata.prerequisites.push(prerequisite);
    }
  }

  setCustomField(key: string, value: any): void {
    if (!this.metadata.customFields) {
      this.metadata.customFields = {};
    }
    this.metadata.customFields[key] = value;
  }
}
