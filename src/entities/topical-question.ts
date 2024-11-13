
import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from './base-entity';
import { Content } from './content';
import { TopicalQuestionResource } from './topical-question-resource';
import { ITopicalQuestion } from './interfaces';


@Entity('topical_question')
export class TopicalQuestion extends BaseEntity {
  @Column()
  content_id: number;

  @Column()
  title: string;

  @ManyToOne(
    'Content',
    {
      onDelete: 'CASCADE',
    }
  )
  @JoinColumn({ name: 'content_id' })
  content?: Content;

  @OneToMany(
    'TopicalQuestionResource',
    (resource: TopicalQuestionResource) => resource.topicalQuestion,
    {
      cascade: true
    }
  )
  resources?: TopicalQuestionResource[];
}