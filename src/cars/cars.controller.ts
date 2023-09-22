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
import { ApiTags } from '@nestjs/swagger';
import { CarsService } from './cars.service';
import { CarsDto } from 'src/interfaces/cars';

@ApiTags('Machines api')
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  @HttpCode(200)
  allCar() {
    return this.carsService.allcars();
  }

  @Post()
  @HttpCode(201)
  create(@Body() dto: CarsDto) {
    return this.carsService.addCars(dto);
  }

  @Put('/update/:id')
  @HttpCode(201)
  update(@Body() dto: CarsDto, @Param('id') id: string) {
    return this.carsService.updateCars(dto, id);
  }

  @Delete('remove/:id')
  @HttpCode(200)
  delete(@Param('id') id: string) {
    return this.carsService.deleteCars(id);
  }

  @Get(":id")
  @HttpCode(200)
  getOneCar(@Param("id") id: string){
      return this.carsService.getOneCar(id)
  }
}
