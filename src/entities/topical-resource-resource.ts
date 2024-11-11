import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TopicalQuestion } from "./topical-question";
import { Resource } from "./resource";

export enum TopicalQuestionResourceType {
  QUESTION_PAPER = "QUESTION_PAPER",
  MARKING_SCHEME = "MARKING_SCHEME",
}

@Entity("topical_question_resource")
export class TopicalQuestionResource {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  topical_question_id!: number;

  @Column()
  resource_id!: number;

  @Column({
    type: "enum",
    enum: TopicalQuestionResourceType,
  })
  resource_type!: TopicalQuestionResourceType;

  @ManyToOne(() => TopicalQuestion, (topicalQuestion) => topicalQuestion.resources, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "topical_question_id" })
  topicalQuestion!: TopicalQuestion;

  @ManyToOne(() => Resource, (resource) => resource.topicalQuestionResources, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "resource_id" })
  resource!: Resource;
}
