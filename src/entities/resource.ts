
import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base-entity';
import { PastPaperResource } from './past-paper-resource';
import { TopicalQuestionResource } from './topical-question-resource';
import { RevisionNoteResource } from './revision-note-resource';

@Entity('resource')
export class Resource extends BaseEntity {
  @Column()
  url!: string;

  @Column()
  type!: string;

  @OneToMany(() => PastPaperResource, ppr => ppr.resource)
  pastPaperResources!: PastPaperResource[];

  @OneToMany(() => TopicalQuestionResource, tqr => tqr.resource)
  topicalQuestionResources!: TopicalQuestionResource[];

  @OneToMany(() => RevisionNoteResource, rnr => rnr.resource)
  revisionNoteResources!: RevisionNoteResource[];
}