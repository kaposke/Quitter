import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository, Like } from "typeorm";
import { hash } from 'bcrypt';
import { CreateUserDTO } from "./dtos/create-user.dto";

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

  async create(data: CreateUserDTO) {
    // Encrypt password
    const password = await hash(data.password, 8);
    data.password = password;

    const user = await this.userRepository.create(data);

    await this.userRepository.save(user);

    return user;
  }

  async getByEmail(email: string, getPassword: boolean = false) {
    if (getPassword)
      return await this.userRepository.createQueryBuilder('user').addSelect('user.password').where('LOWER(email) = LOWER(:email)', { email }).getOne();

    return await this.userRepository.createQueryBuilder().where('LOWER(email) = LOWER(:email)', { email }).getOne();
  }

  async getByUsername(username: string, getPassword: boolean = false) {
    if (getPassword)
      return await this.userRepository.createQueryBuilder('user').addSelect('user.password').where('LOWER(username) = LOWER(:username)', { username }).getOne();

    return await this.userRepository.createQueryBuilder().where('LOWER(username) = LOWER(:username)', { username }).getOne();
  }

  async get(id: number) {
    return await this.userRepository.findOne(id);
  }
}