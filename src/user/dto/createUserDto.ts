import {IsString, IsInt, IsEmail, Min, Max, ValidateNested} from "class-validator";
import { userAddressDto } from "./NestedUserDto";
import { Type } from "class-transformer";

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
}