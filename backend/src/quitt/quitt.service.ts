import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { Quitt } from './quitt.entity';
import { User } from 'src/user/user.entity';

@Injectable()
export class QuittService {
    constructor(@InjectRepository(Quitt) private readonly quittRepository: Repository<Quitt>) { }

    async create(user: User, post: string) {
        const quitt = await this.quittRepository.create({ post, user });
        await this.quittRepository.save(quitt);
    }

    async getAll() {
        return await this.quittRepository
            .createQueryBuilder('quitt')
            .innerJoin('quitt.user', 'user')
            .select(['quitt.id', 'quitt.post', 'user.username'])
            .getMany();
    }

    async getFromUser(userId: number) {
        return await this.quittRepository
            .createQueryBuilder('quitt')
            .innerJoin('quitt.user', 'user')
            .where('user.id = :userId', { userId })
            .select(['quitt.id', 'quitt.post'])
            .getMany();
    }
}
