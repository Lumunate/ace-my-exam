import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { RevisionNoteResource } from "./revision-note-resource";
import { PastPaperResource } from "./past-paper-resource";
import { TopicalQuestionResource } from "./topical-resource-resource";

@Entity("resource")
export class Resource {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  url!: string;

  @Column()
  type!: string;

  @OneToMany(() => PastPaperResource, (ppr) => ppr.resource)
  pastPaperResources!: PastPaperResource[];

  @OneToMany(() => TopicalQuestionResource, (tqr) => tqr.resource)
  topicalQuestionResources!: TopicalQuestionResource[];

  @OneToMany(() => RevisionNoteResource, (rnr) => rnr.resource)
  revisionNoteResources!: RevisionNoteResource[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
