import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from './base-entity';
import { ContentLevel, ContentType } from './enums';
import { TopicalQuestion } from './topical-question';
import { RevisionNote } from './revision-note';

@Entity('content')
export class Content extends BaseEntity {
  @Column({ nullable: true })
  parent_id!: number;

  @ManyToOne(() => Content, content => content.children, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'parent_id' })
  parent!: Content;

  @OneToMany(() => Content, content => content.parent)
  children!: Content[];

  @Column()
  name!: string;

  @Column({
    type: 'enum',
    enum: ContentType
  })
  type!: ContentType;

  @Column({
    type: 'int',
    enum: ContentLevel
  })
  level!: ContentLevel;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @OneToMany(() => TopicalQuestion, topicalQuestion => topicalQuestion.content)
  topicalQuestions!: TopicalQuestion[];

  @OneToMany(() => RevisionNote, revisionNote => revisionNote.content)
  revisionNotes!: RevisionNote[];
}
