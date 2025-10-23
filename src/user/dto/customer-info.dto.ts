import { IsString, IsEmail } from 'class-validator';

export class CustomerInfoDto {
  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  address: string;
}
