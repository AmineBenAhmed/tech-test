import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema({ timestamps: true })
export class Post {
  @Prop({
    required: true,
    type: String,
    minLength: 3,
  })
  title: string;
}

export const postSchema = SchemaFactory.createForClass(Post);
