import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Request } from 'express';
import AuthService from '../auth/auth.service'
@Controller('comments')
export class CommentsController {
  constructor( 
    private commentsService: CommentsService,
    private authService: AuthService 
  ) {}

  @Post()
  async create(@Body() createCommentDto: CreateCommentDto, @Req() res: Request) {
    const token:any = await this.authService.decodeToken(res)
    createCommentDto.userId = token.id;
    return this.commentsService.create(createCommentDto);

  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  findOne(@Req() res: Request) {
    const { id } = res.params

    return this.commentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}
