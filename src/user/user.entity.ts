import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30, unique: true })
  username: string;
  
  @Column({ unique: true })
  @Column()
  email: string;
  
  @Column({ length: 30 })
  @Column()
  password: string;
}