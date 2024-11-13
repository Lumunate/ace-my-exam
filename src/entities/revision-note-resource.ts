
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base-entity';
import { RevisionNote } from './revision-note';
import { Resource } from './resource';

@Entity('revision_note_resource')
export class RevisionNoteResource extends BaseEntity {
  @Column()
  revision_note_id!: number;

  @Column()
  resource_id!: number;

  @ManyToOne(() => RevisionNote, revisionNote => revisionNote.resources, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'revision_note_id' })
  revisionNote!: RevisionNote;

  @ManyToOne(() => Resource, resource => resource.revisionNoteResources, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'resource_id' })
  resource!: Resource;
}
