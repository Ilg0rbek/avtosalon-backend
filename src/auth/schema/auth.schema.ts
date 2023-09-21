import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Roles } from './enum';

export type AuthDocument = HydratedDocument<Auth>;

@Schema()
export class Auth {
  @Prop()
  username: string;
  @Prop()
  password: string;
  @Prop({ type: String, enum: Roles, default: Roles.USER })
  role: Roles;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
