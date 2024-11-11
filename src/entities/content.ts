import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from "typeorm";
import { TopicalQuestion } from "./topical-question";
import { RevisionNote } from "./revision-note";

export enum ContentType {
  CHAPTER = "chapter",
  TOPIC = "topic",
  SUBTOPIC = "subtopic",
}

export enum ContentLevel {
  CHAPTER = 1,
  TOPIC = 2,
  SUBTOPIC = 3,
}

@Entity("content")
export class Content {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  parent_id!: number;

  @ManyToOne(() => Content, (content) => content.children, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "parent_id" })
  parent!: Content;

  @OneToMany(() => Content, (content) => content.parent)
  children!: Content[];

  @Column()
  name!: string;

  @Column({
    type: "enum",
    enum: ContentType,
  })
  type!: ContentType;

  @Column({
    type: "int",
    enum: ContentLevel,
  })
  level!: ContentLevel;

  @Column({ type: "text", nullable: true })
  description!: string;

  @OneToMany(() => TopicalQuestion, (topicalQuestion) => topicalQuestion.content)
  topicalQuestions!: TopicalQuestion[];

  @OneToMany(() => RevisionNote, (revisionNote) => revisionNote.content)
  revisionNotes!: RevisionNote[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
