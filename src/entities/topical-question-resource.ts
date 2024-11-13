
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base-entity';
import { TopicalQuestionResourceType } from './enums';
import { TopicalQuestion } from './topical-question';
import { Resource } from './resource';

@Entity('topical_question_resource')
export class TopicalQuestionResource extends BaseEntity {
  @Column()
  topical_question_id!: number;

  @Column()
  resource_id!: number;

  @Column({
    type: 'enum',
    enum: TopicalQuestionResourceType
  })
  resource_type!: TopicalQuestionResourceType;

  @ManyToOne(() => TopicalQuestion, topicalQuestion => topicalQuestion.resources, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'topical_question_id' })
  topicalQuestion!: TopicalQuestion;

  @ManyToOne(() => Resource, resource => resource.topicalQuestionResources, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'resource_id' })
  resource!: Resource;
}