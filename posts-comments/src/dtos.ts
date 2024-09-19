import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

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
