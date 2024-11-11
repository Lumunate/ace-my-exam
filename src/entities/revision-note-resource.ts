import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Resource } from './resource';
import { RevisionNote } from './revision-note';

@Entity('revision_note_resource')
export class RevisionNoteResource {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column()
    revision_note_id!: number;

  @Column()
    resource_id!: number;

  @ManyToOne(() => RevisionNote, (revisionNote) => revisionNote.resources, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'revision_note_id' })
    revisionNote!: RevisionNote;

  @ManyToOne(() => Resource, (resource) => resource.revisionNoteResources, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'resource_id' })
    resource!: Resource;
}
