import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

import BaseEntity from './base-entity';
import type PastPaperResource from './past-paper-resource';
import type Subject from './subject';

@Entity('past_paper')
export default class PastPaper extends BaseEntity {
  @Column()
    title: string;

  @Column()
    year: number;

  @OneToMany('PastPaperResource', (pastPaperResource: PastPaperResource) => pastPaperResource.pastPaper, {
    cascade: true,
  })
    resources?: PastPaperResource[];

  @Column({ nullable: true })
    subject_id: number;

  @ManyToOne('Subject', (subject: Subject) => subject.pastPapers, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'subject_id' })
    subject?: Subject;
}