import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Content } from './content';
import { TopicalQuestionResource } from './topical-resource-resource';

@Entity('topical_question')
export class TopicalQuestion {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column()
    content_id!: number;

  @Column()
    title!: string;

  @ManyToOne(() => Content, (content) => content.topicalQuestions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'content_id' })
    content!: Content;

  @OneToMany(() => TopicalQuestionResource, (tqr) => tqr.topicalQuestion)
    resources!: TopicalQuestionResource[];

  @CreateDateColumn()
    created_at!: Date;

  @UpdateDateColumn()
    updated_at!: Date;
}
