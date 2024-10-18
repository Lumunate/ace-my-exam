import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('contacts')
export default class Contact {
  @PrimaryGeneratedColumn('uuid')
    id!: string;

  @Column()
    name!: string;

  @Column({ name: 'last_name' })
    lastName!: string;

  @Column()
    email!: string;

  @Column()
    phone!: string;

  @Column()
    message!: string;

  @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;
}
