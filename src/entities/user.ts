import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ default: false })
  emailVerified!: boolean;

  @Column({ nullable: true })
  verificationToken!: string;
}
