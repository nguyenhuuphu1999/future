import {
    Injectable,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import {
    Repository,
  } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { Posts } from './entities/post.entity';

  
  @Injectable()
  export default class PostsRepositorys {
    constructor(
      @InjectRepository(Posts)
      private readonly postModel: Repository<Posts>,
    ) {}

    async createComment(createPostDto: CreatePostDto ){
        return await this.postModel.save( createPostDto )
    }

    async findOne(id: number){
      return await this.postModel.findOne( {
        where: { id },
         relations: ['comment','comment.user']
      } );
    }
}  