import {
    Injectable,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import {
    Repository,
  } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './entities/comment.entity';

  
  @Injectable()
  export default class CommentsRepository {
    constructor(
      @InjectRepository(Comment)
      private readonly commentModel: Repository<Comment>,
    ) {}

    async createComment(createCommentDto: CreateCommentDto){
        return await this.commentModel.save(createCommentDto)
    }

    async findOne(id: number) {
      return await this.commentModel.findOne({
        where: {id}
      });
    }
}  