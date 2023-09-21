import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { authDto } from 'src/interfaces/auth';
import { Auth } from './schema/auth.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private AuthModel: Model<Auth>,
    private jwtService: JwtService,
  ) {}

  async login(dto: authDto) {
    const { username, password } = dto;

    interface User extends authDto {
      _id: string;
    }
    try {
      const user: User = await this.AuthModel.findOne({ username });

      if (!user) {
       return  new UnauthorizedException();
      }

      if (password !== user?.password) {
        return 'Sorry password or username mistake';
      }

      const payload = { sub: user._id, username: user.username };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (err) {
      console.error(err.message);
    }
  }

  async createAdmin(dto: authDto) {
    const { username } = dto;

    try {
      console.log(username);
      
      const user = await this.AuthModel.findOne({ username });
       
      if (user) return 'This is username alerady exits';

      return await this.AuthModel.create(dto);
    } catch (err) {
      console.error(err.message);
    }
  }

  async deleteAdmin(id: string) {
    return await this.AuthModel.findOneAndDelete({ id });
  }

  async updateAdmin(id: string, dto: authDto) {
    return await this.AuthModel.findOneAndUpdate({ id, dto });
  }
}
