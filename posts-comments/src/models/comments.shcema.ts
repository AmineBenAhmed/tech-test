import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, SchemaTypes } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema({ timestamps: true })
export class Comment {
  @Prop({
    required: true,
    type: String,
    minLength: 3,
  })
  value: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Post' })
  postId: mongoose.Types.ObjectId;
}

export const commentSchema = SchemaFactory.createForClass(Comment);
