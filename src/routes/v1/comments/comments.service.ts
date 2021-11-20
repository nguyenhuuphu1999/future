import { Injectable } from '@nestjs/common';
import CommentsRepository from './comments.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    private commentRepository: CommentsRepository
  ){}
  create(createCommentDto: CreateCommentDto) {
    createCommentDto.createAt = new Date()

    return this.commentRepository.createComment(createCommentDto);
  }

  findAll() {
    return `This action returns all comments`;
  }

  async findOne(id: number) {
    return await this.commentRepository.findOne(id);
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
