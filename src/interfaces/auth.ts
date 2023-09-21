import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  @MinLength(3)
  @ApiProperty()
  username: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(12)
  @MinLength(6)
  @ApiProperty()
  password: string;
  @ApiProperty()
  role: string;
}
