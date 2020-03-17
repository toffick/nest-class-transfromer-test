import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {UserEntity} from './entities/user.entity'
import {CommentEntity} from './entities/comment.entity'

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(UserEntity) private readonly UserEntityRepository: Repository<UserEntity>,
    @InjectRepository(CommentEntity) private readonly CommentEntityRepository: Repository<CommentEntity>,
  ) { }


  async getUser(): Promise<UserEntity> {
    return this.UserEntityRepository.findOne(1)
  }

  async getUserComments(): Promise<UserEntity> {
    return this.UserEntityRepository.findOne(1, { relations: ['comments']})
  }

  
}
