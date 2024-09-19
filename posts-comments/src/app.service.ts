import { Injectable } from '@nestjs/common';
import { IPost } from './interfaces';

@Injectable()
export class AppService {
  private posts: IPost[] = [];
  private Ids: number = 0;
  getHello(name?: string): string {
    return `Hello ${name || 'World'}!`;
  }

  createPost(post: string) {
    this.Ids++;
    this.posts.push({
      id: this.Ids,
      title: post,
      comments: [],
    });
  }

  getPosts() {
    return this.posts;
  }

  addComment(postId: number, comment: string): void {
    console.log(postId, comment);
    const post = this.posts.find((post: IPost) => post.id === postId);
    if (!post) {
      throw new Error('Post not found');
    }
    post.comments.push(comment);
  }
}
