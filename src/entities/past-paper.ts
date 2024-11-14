import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

import { BaseEntity } from './base-entity';
import { PastPaperResource } from './past-paper-resource';
import type { Subject } from './subject';
@Entity('past_paper')
export class PastPaper extends BaseEntity {
  @Column()
    title: string;

  @Column()
    year: number;

  @OneToMany('PastPaperResource', (pastPaperResource: PastPaperResource) => pastPaperResource.pastPaper, {
    cascade: true,
  })
    resources?: PastPaperResource[];

  @ManyToOne('Subject', (subject: Subject) => subject.pastPapers, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'subject_id' })
    subject?: Subject;
}