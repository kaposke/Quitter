import { Module } from '@nestjs/common';
import { QuittController } from './quitt.controller';
import { QuittService } from './quitt.service';
import { Quitt } from './quitt.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { User } from 'src/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quitt, User])],
  controllers: [QuittController],
  providers: [QuittService, UserService]
})

export class QuittModule {}
