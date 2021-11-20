import { Module, forwardRef } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import CommentsRepository from './comments.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import AuthModule from '../auth/auth.module'
@Module({
  imports: [ 
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([ Comment ]),
],
  controllers: [CommentsController],
  providers: [CommentsService, CommentsRepository],
  exports: [CommentsService, CommentsRepository]

})
export class CommentsModule {}
