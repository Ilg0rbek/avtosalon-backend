import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MarkModule } from './mark/mark.module';
import { CarsModule } from './cars/cars.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://avtosalon:${process.env.DB_PASSWORD}@cluster0.06p8kb2.mongodb.net`,
    ),
    AuthModule,
    MarkModule,
    CarsModule,
  ],
})
export class AppModule {}
