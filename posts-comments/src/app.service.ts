import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './models/posts.schema';
import mongoose from 'mongoose';
import { Comment } from './models/comments.shcema';
import { GetPostsResDto } from './dtos';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Post.name)
    private postModel: mongoose.Model<Post>,
    @InjectModel(Comment.name)
    private commentModel: mongoose.Model<Comment>,
  ) {}

  getHello(name?: string): string {
    return `Hello ${name || 'World'}!`;
  }

  async createPost(post: string) {
    if (!post) {
      throw new Error('Missing post value!');
    }
    const newPost = new this.postModel({ title: post });
    await newPost.save();
  }

  async getPosts(): Promise<GetPostsResDto[]> {
    const posts = await this.postModel.aggregate([
      {
        $lookup: {
          from: 'comments',
          localField: '_id',
          foreignField: 'postId',
          as: 'comments',
        },
      },
      {
        $sort: { title: -1 },
      },
      {
        $project: {
          post: '$title',
          comments: '$comments.value',
        },
      },
    ]);

    return posts;
  }

  async addComment(postId: string, comment: string): Promise<void> {
    const existingPost = await this.postModel.findById(postId);
    if (!existingPost) {
      throw new ConflictException(
        'post Id does not match any of the existing posts',
      );
    }

    const newComment = new this.commentModel({ postId, value: comment });
    await newComment.save();
  }
}
