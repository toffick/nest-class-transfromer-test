import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import ormconfig = require('../ormconfig');
import { UserEntity } from './entities/user.entity'
import { CommentEntity } from './entities/comment.entity'

const repositories = [
  {
    provide: 'UserEntityRepository',
    useFactory: (connection: Connection) => connection.getRepository(UserEntity),
    inject: [Connection],
  },
  {
    provide: 'CommentEntityRepository',
    useFactory: (connection: Connection) => connection.getRepository(CommentEntity),
    inject: [Connection],
  },

];


@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),


  ],
  controllers: [AppController],
  providers: [AppService, ...repositories],
})
export class AppModule {

}
