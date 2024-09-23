import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddCommentDto, CreatePostDto, GetPostsResDto } from './dtos';

@ApiTags('pasts management')
@Controller('posts')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({ type: [GetPostsResDto] })
  @Get()
  getPosts(): Promise<GetPostsResDto[]> {
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
    this.appService.addComment(postId, comment);
  }
}
