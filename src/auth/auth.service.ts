import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { authDto } from 'src/ Interfaces/auth.dto';
import { Auth } from './schema/auth.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Auth.name) private AuthModel: Model<Auth>) {}

  async login() {
    return await this.AuthModel.find({}).exec();
  }
}
