import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import mongoose from 'mongoose';

export class CarsDto {
  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty()
  markId: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  mark: string;
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  tanirovka: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  motor: number;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @MaxLength(5)
  year: number;
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @MaxLength(10)
  @MinLength(2)
  color: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @MaxLength(8)
  @MinLength(4)
  distance: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @MaxLength(4)
  @MinLength(4)
  gearbook: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @MaxLength(100)
  @MinLength(20)
  desc: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  vrImg: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  img360: string[];
}
