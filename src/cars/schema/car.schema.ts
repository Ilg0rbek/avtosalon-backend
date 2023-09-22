import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Mark } from 'src/mark/schema/mark.schema';

export type carsDocumet = HydratedDocument<Car>;

@Schema()
export class Car {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref:"Mark"})
  markId: Mark;
  @Prop()
  mark: string;
  @Prop()
  tanirovka: string;
  @Prop()
  motor: number;
  @Prop()
  year: number;
  @Prop()
  color: string;
  @Prop()
  distance: string;
  @Prop()
  gearbook: string;
  @Prop()
  desc: string;
  @Prop()
  vrImg: string;
  @Prop()
  img360: string[];
}

export const CarSchema = SchemaFactory.createForClass(Car);
