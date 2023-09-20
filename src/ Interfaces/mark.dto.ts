import { IsNotEmpty, IsString } from 'class-validator';

export class Markdto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  img: string;
}
