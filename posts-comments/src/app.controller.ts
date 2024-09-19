import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { AddCommentDto, CreatePostDto } from './dtos';
import { IPost } from './interfaces';

@ApiTags('pasts management')
@Controller('posts')
export class AppController {
  constructor(private readonly appService: AppService) {}

  //@ApiQuery({ name: 'name', type: String, required: false })
  @Get()
  getPosts(): IPost[] {
    return this.appService.getPosts();
  }

  @Post()
  createPost(@Body() data: CreatePostDto): void {
    this.appService.createPost(data.post);
  }

  @Post('/:postId/comment')
  addComment(
    @Param('postId') postId: string,
    @Body() { comment }: AddCommentDto,
  ): void {
    this.appService.addComment(parseInt(postId), comment);
  }
}
