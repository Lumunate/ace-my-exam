
import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from './base-entity';
import { Content } from './content';
import { TopicalQuestionResource } from './topical-question-resource';

@Entity('topical_question')
export class TopicalQuestion extends BaseEntity {
  @Column()
  content_id!: number;

  @Column()
  title!: string;

  @ManyToOne(() => Content, content => content.topicalQuestions, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'content_id' })
  content!: Content;

  @OneToMany(() => TopicalQuestionResource, tqr => tqr.topicalQuestion)
  resources!: TopicalQuestionResource[];
}
