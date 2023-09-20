import { Module } from '@nestjs/common';
import { MarkController } from './mark.controller';
import { MarkService } from './mark.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Mark, MarkSchema } from './schema/mark.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Mark.name, schema: MarkSchema }]),
  ],
  controllers: [MarkController],
  providers: [MarkService],
})
export class MarkModule {}
