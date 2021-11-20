import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import PostsRepositorys from './posts.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './entities/post.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Posts])],
  controllers: [PostsController],
  providers: [PostsService, PostsRepositorys],
  exports: [PostsService, PostsRepositorys]

})
export class PostsModule {}
