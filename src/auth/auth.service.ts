import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AuthDto } from 'src/interfaces/auth';
import { Auth } from './schema/auth.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bycrpt from 'bcrypt';

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

      const isMatch = await bycrpt.compare(password, user.password);
      console.log(isMatch);

      if (!isMatch) {
        return new BadRequestException('Error!!! Passwor or Username');
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
    const { username, password } = dto;

    try {
      console.log(username);

      const hashPassword = await bycrpt.hash(password, 10);

      const user = await this.AuthModel.findOne({ username });

      if (user) return new BadRequestException('User is alerady exits');

      return await this.AuthModel.create({
        password: hashPassword,
        username: dto.username,
        role: dto.role,
      });
    } catch (err) {
      console.error(err.message);
    }
  }

  async deleteAdmin(id: string) {
    return await this.AuthModel.findOneAndDelete({ id });
  }

  async updateAdmin(id: string, dto: AuthDto) {
    return await this.AuthModel.findOneAndUpdate({ id, dto }, { new: true });
  }
}
