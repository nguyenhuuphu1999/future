import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import PostsRepository from './posts.repository';

@Injectable()
export class PostsService {
  constructor(
    private postsRepository: PostsRepository
  ){}
  async create(createPostDto: CreatePostDto) {
    createPostDto.createAt = new Date(); 
    return await this.postsRepository.createComment(createPostDto);
  }

  findAll() {
    return `This action returns all posts`;
  }

  async findOne(id: number) {
    const posts:any =  await this.postsRepository.findOne(id)
    
    await Promise.all(
      posts?.comment.map((e:any)=>{
        delete e.user.password
        delete e.user.role
        delete e.user.verified

      })
    )
    // delete posts?.comment.user.password
    return posts
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
