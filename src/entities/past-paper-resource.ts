
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import BaseEntity from './base-entity';
import { PastPaperResourceType } from './enums';
import PastPaper from './past-paper';
import type Resource from './resource';

@Entity('past_paper_resource', { name: 'past_paper_resource' })
export default class PastPaperResource extends BaseEntity {
  @Column()
    past_paper_id: number;

  @Column()
    resource_id!: number;

  @Column({
    type: 'enum',
    enum: PastPaperResourceType,
  })
    resource_type!: PastPaperResourceType;

  // @ManyToOne(
  //   'PastPaper',
  //   (pastPaper: PastPaper) => pastPaper.resourcesa,
  //   {
  //     onDelete: 'CASCADE',
  //   }
  // )
  // @JoinColumn({ name: 'past_paper_id' })
  //   pastPaper?: PastPaper;

  // @ManyToOne('PastPaper', 'resourcesa', {
  //   onDelete: 'CASCADE',
  // })
  @ManyToOne(() => PastPaper, (pastPaper) => pastPaper.resources, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'past_paper_id' })
    pastPaper!: PastPaper;

  @ManyToOne('Resource', {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'resource_id' })
    resource!: Resource;
}
