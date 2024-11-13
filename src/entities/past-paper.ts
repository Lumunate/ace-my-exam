import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base-entity';
import { PastPaperResource } from './past-paper-resource';

@Entity('past_paper')
export class PastPaper extends BaseEntity {
  @Column()
  title!: string;

  @Column()
  year!: number;

  @OneToMany(() => PastPaperResource, ppr => ppr.pastPaper)
  resources!: PastPaperResource[];
}
