import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { hash } from 'bcrypt';
import { CreateUserDTO } from "./dtos/create-user.dto";

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  async create(data: CreateUserDTO) {
    // Encrypt password
    const password = await hash(data.password, 8);
    data.password = password;

    const user = await this.userRepository.create(data);

    await this.userRepository.save(user);

    return user;
  }

  getByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  getByUsername(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }

  get(id: number) {
    return this.userRepository.findOne(id);
  }
}