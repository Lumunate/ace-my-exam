
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import { BaseEntity } from './base-entity';
import { PastPaperResourceType } from './enums';
import { PastPaper } from './past-paper';
import { Resource } from './resource';

@Entity('past_paper_resource')
export class PastPaperResource extends BaseEntity {
  @Column()
    past_paper_id: number;

  @Column()
    resource_id: number;

  @Column({
    type: 'enum',
    enum: PastPaperResourceType,
  })
    resource_type: PastPaperResourceType;

  @ManyToOne(
    'PastPaper',
    (pastPaper: PastPaper) => pastPaper.resources,
    {
      onDelete: 'CASCADE',
    }
  )
  @JoinColumn({ name: 'past_paper_id' })
    pastPaper?: PastPaper;

  @ManyToOne(
    'Resource',
    {
      onDelete: 'CASCADE',
    }
  )
  @JoinColumn({ name: 'resource_id' })
    resource?: Resource;
}
