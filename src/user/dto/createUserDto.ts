import {IsString, IsInt, IsEmail, Min, Max, ValidateNested, IsOptional} from "class-validator";
import { userAddressDto } from "./NestedUserDto";
import { Exclude, Expose, Type } from "class-transformer";

export class CreateUserDto{
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsInt()
    @Min(18)
    @Max(120)
    age: number;

    @ValidateNested()
    @Type(() => userAddressDto)
    address: userAddressDto;

  @IsOptional()
  @IsString()
  role?: string; 
}