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
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth api')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/admins')
  @HttpCode(200)
  getAllAdmin() {
    return this.authService.getAllAdmin();
  }

  @Post('/login')
  @HttpCode(200)
  login(@Body() dto: AuthDto) {
    return this.authService.login(dto);
  }

  @Post('/addadmin')
  @HttpCode(201)
  create(@Body() dto: AuthDto) {
    return this.authService.createAdmin(dto);
  }

  @Delete('/removeadmin/:id')
  @HttpCode(201)
  delete(@Param('id') id: string) {
    return this.authService.deleteAdmin(id);
  }
}
