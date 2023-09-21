import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class authDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  @MinLength(3)
  username: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(12)
  @MinLength(6)
  password: string;
}
