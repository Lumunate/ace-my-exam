import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PastPaperResource } from "./past-paper-resource";

@Entity("past_paper")
export class PastPaper {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  year!: number;

  @OneToMany(() => PastPaperResource, (ppr) => ppr.pastPaper)
  resources!: PastPaperResource[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
