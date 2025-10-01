import {IsString, IsInt, IsEmail, Min, Max} from "class-validator";

export class CreateUserDto{
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsInt()
    @Min(18)
    @Max(120)
    age: number;
}