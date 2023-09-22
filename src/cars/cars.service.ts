import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Car } from './schema/car.schema';
import { Model } from 'mongoose';
import { CarsDto } from 'src/interfaces/cars';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private carModel: Model<Car>) {}

  async allcars() {
    return await this.carModel.find({}).exec();
  }

  async addCars(dto: CarsDto) {
    return await this.carModel.create(dto);
  }

  async updateCars(dto: CarsDto, id: string) {}

  async deleteCars(id: string) {}

  async getOneCar(id: string) {}
}
