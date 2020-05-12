import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "src/user/user.entity";

@Entity()
export class Quitt {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, user => user.quitts)
  user: User;

  @Column({ length: 255 })
  post: string;
}