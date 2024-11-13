
import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from './base-entity';
import { Content } from './content';
import { RevisionNoteResource } from './revision-note-resource';

@Entity('revision_note')
export class RevisionNote extends BaseEntity {
  @Column()
  content_id!: number;

  @Column()
  title!: string;

  @ManyToOne(() => Content, content => content.revisionNotes, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'content_id' })
  content!: Content;

  @OneToMany(() => RevisionNoteResource, rnr => rnr.revisionNote)
  resources!: RevisionNoteResource[];
}
