import { Entity, Column, ManyToOne, OneToMany, JoinColumn, BeforeInsert, BeforeUpdate } from 'typeorm';

import BaseEntity from './base-entity';
import { ContentLevel, ContentType } from './enums';
import  Subject from './subject';

@Entity('content', { name: 'content' })
export default class Content extends BaseEntity {
  @Column({ nullable: true })
    parent_id?: number;

  // @ManyToOne(
  //   'Content',
  //   (content: IContent) => content.children,
  //   {
  //     onDelete: 'CASCADE',
  //   }
  // )
  // @JoinColumn({ name: 'parent_id' })
  //   parent!: IContent;
  @ManyToOne(() => Content, (content) => content.children, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'parent_id' })
    parentd?: Content;

  // @OneToMany(
  //   'Content',
  //   (content: IContent) => content.parent
  // )
  //   children?: IContent[];

  @OneToMany(() => Content, (content) => content.parentd)
    children?: Content[];

  @Column()
    name!: string;

  @Column({
    type: 'enum',
    enum: ContentType,
  })
    type!: ContentType;

  @Column({
    type: 'int',
    enum: ContentLevel,
  })
    level!: ContentLevel;

  @Column({ type: 'text', nullable: true })
    description?: string;

  @Column()
    subject_id!: number;

    @ManyToOne(() => Subject, (subject) => subject.contents, {
      onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'subject_id' })
      subject!: Subject;
  /**
   * Validation: If content type is CHAPTER, it must be linked to a Subject.
   */
  @BeforeInsert()
  @BeforeUpdate()
    async validateChapterSubject() {
      if (this.type === ContentType.CHAPTER && !this.subject_id) {
        throw new Error('Content of type "CHAPTER" must be associated with a Subject.');
      }
    }
}
