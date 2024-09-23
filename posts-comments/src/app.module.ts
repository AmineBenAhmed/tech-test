import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Post, postSchema } from './models/posts.schema';
import { Comment, commentSchema } from './models/comments.shcema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://localhost:27017/posts',
      {
        retryAttempts: 10,
        connectTimeoutMS: 1500,
      },
    ),
    MongooseModule.forFeature([
      {
        name: Post.name,
        schema: postSchema,
      },
      {
        name: Comment.name,
        schema: commentSchema,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
