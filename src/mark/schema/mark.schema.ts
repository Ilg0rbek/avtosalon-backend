import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type markDocument = HydratedDocument<Mark>;

@Schema()
export class Mark {
  @Prop()
  title: string;
  @Prop()
  img: string;
}

export const MarkSchema = SchemaFactory.createForClass(Mark);
