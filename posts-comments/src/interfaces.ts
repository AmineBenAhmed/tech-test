export interface IPost {
  id?: number;
  title: string;
}

export interface IComment {
  id?: string;
  postId: string;
  value: string;
}
