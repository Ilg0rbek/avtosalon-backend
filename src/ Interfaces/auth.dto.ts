import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class authDto {
  @IsNotEmpty()
  @IsString()
  login: string;
  @IsNotEmpty()
  @IsNumber()
  password: number;
}
