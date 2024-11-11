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
import { RevisionNoteResource } from './revision-note-resource';

@Entity('revision_note')
export class RevisionNote {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column()
    content_id!: number;

  @Column()
    title!: string;

  @ManyToOne(() => Content, (content) => content.revisionNotes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'content_id' })
    content!: Content;

  @OneToMany(() => RevisionNoteResource, (rnr) => rnr.revisionNote)
    resources!: RevisionNoteResource[];

  @CreateDateColumn()
    created_at!: Date;

  @UpdateDateColumn()
    updated_at!: Date;
}
