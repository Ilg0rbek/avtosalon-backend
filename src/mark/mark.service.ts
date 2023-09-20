import { Injectable } from '@nestjs/common';
import { Mark } from './schema/mark.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Markdto } from './dto/markdto';

@Injectable()
export class MarkService {
  constructor(@InjectModel(Mark.name) private MarkModel: Model<Mark>) {}

  async getAll() {
    return await this.MarkModel.find({}).exec();
  }

  async create(dto: Markdto) {
    return await this.MarkModel.create(dto);
  }

  async getById(id: string) {
    console.log(id);
    return await this.MarkModel.findById(id);
  }

  async delete(id: string) {
    return await this.MarkModel.findByIdAndDelete(id);
  }

  async update(id:string, dto: Markdto){
    return await this.MarkModel.findByIdAndUpdate(id, dto, {new: true})
  }
}
