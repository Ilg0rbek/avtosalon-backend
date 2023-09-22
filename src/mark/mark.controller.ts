import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MarkService } from './mark.service';
import { Markdto } from '../interfaces/mark';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Car brands api')
@Controller('mark')
export class MarkController {
  constructor(private readonly markService: MarkService) {}

  @Get()
  @HttpCode(200)
  getAll() {
    return this.markService.getAll();
  }

  @Post()
  @HttpCode(201)
  create(@Body() dto: Markdto) {
    return this.markService.create(dto);
  }

  @Get(':id')
  @HttpCode(200)
  getById(@Param('id') id: string) {
    return this.markService.getById(id);
  }

  @Delete(':id')
  @HttpCode(200)
  delete(@Param('id') id: string) {
    return this.markService.delete(id);
  }

  @Put(':id')
  @HttpCode(203)
  update(@Param('id') id: string, @Body() dto: Markdto) {
    return this.markService.update(id, dto);
  }
}
