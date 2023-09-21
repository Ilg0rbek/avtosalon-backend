import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { authDto } from 'src/interfaces/auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @HttpCode(200)
  login(@Body() dto: authDto) {
    return this.authService.login(dto);
  }

  @Post('/newadmin')
  @HttpCode(201)
  create(@Body() dto: authDto) {
    return this.authService.createAdmin(dto);
  }

  @Delete('delete/:id')
  @HttpCode(201)
  delete(@Param('id') id: string) {
    return this.authService.deleteAdmin(id);
  }
}
