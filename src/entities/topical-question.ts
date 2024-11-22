
import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

import BaseEntity from './base-entity';
import type Content from './content';
import type TopicalQuestionResource from './topical-question-resource';

@Entity('topical_question', { name: 'topical_question' })
export default class TopicalQuestion extends BaseEntity {
  @Column()
    content_id!: number;

  @Column()
    title!: string;

  @ManyToOne(
    'Content',
    {
      onDelete: 'CASCADE',
    }
  )
  @JoinColumn({ name: 'content_id' })
    content!: Content;

  @OneToMany(
    'TopicalQuestionResource',
    (resource: TopicalQuestionResource) => resource.topicalQuestion,
    {
      cascade: true
    }
  )
    resourcesc?: TopicalQuestionResource[];
}