import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from './base-entity';
import { ContentLevel, ContentType } from './enums';
import { IContent } from './interfaces';

@Entity('content')
export class Content extends BaseEntity {
  @Column({ nullable: true })
  parent_id: number;

  @ManyToOne(
    'Content',
    (content: Content) => content.children,
    {
      onDelete: 'CASCADE',
    }
  )
  @JoinColumn({ name: 'parent_id' })
  parent?: Content;

  @OneToMany(
    'Content',
    (content: Content) => content.parent
  )
  children?: Content[];

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: ContentType,
  })
  type: ContentType;

  @Column({
    type: 'int',
    enum: ContentLevel,
  })
  level: ContentLevel;

  @Column({ type: 'text', nullable: true })
  description?: string;
}