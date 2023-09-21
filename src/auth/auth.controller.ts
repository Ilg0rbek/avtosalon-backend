import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from 'src/interfaces/auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @HttpCode(200)
  getAllAdmin() {
    return this.authService.getAllAdmin();
  }

  @Post('/login')
  @HttpCode(200)
  login(@Body() dto: AuthDto) {
    return this.authService.login(dto);
  }

  @Post('/newadmin')
  @HttpCode(201)
  create(@Body() dto: AuthDto) {
    return this.authService.createAdmin(dto);
  }

  @Delete('delete/:id')
  @HttpCode(201)
  delete(@Param('id') id: string) {
    return this.authService.deleteAdmin(id);
  }
}
