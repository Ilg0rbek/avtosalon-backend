import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class Markdto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  img: string;
}
