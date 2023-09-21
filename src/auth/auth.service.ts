import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AuthDto } from 'src/interfaces/auth';
import { Auth } from './schema/auth.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private AuthModel: Model<Auth>,
    private jwtService: JwtService,
  ) {}

  async getAllAdmin() {
    return await this.AuthModel.find({}).exec();
  }

  async login(dto: AuthDto) {
    const { username, password } = dto;

    interface User extends AuthDto {
      _id: string;
    }
    try {
      const user: User = await this.AuthModel.findOne({ username });

      if (!user) {
        return new UnauthorizedException();
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

  async createAdmin(dto: AuthDto) {
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

  async updateAdmin(id: string, dto: AuthDto) {
    return await this.AuthModel.findOneAndUpdate({ id, dto });
  }
}
