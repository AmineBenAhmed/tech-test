import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty()
  @IsString()
  post: string;
}

export class AddCommentDto {
  @ApiProperty()
  @IsString()
  comment: string;
}

export class GetPostsResDto {
  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ isArray: true })
  @IsArray()
  @IsString({ each: true })
  comments: string[];
}
