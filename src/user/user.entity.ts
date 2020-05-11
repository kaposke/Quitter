import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Quitt } from "src/quitt/quitt.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30, unique: true })
  username: string;
  
  @Column({ unique: true })
  @Column()
  email: string;
  
  @Column({ length: 30, select: false })
  password: string;

  @OneToMany(type => Quitt, quitt => quitt.user)
  quitts: Quitt[];
}