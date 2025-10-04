import { IsString, IsEmail, IsInt, Min, Max, IsOptional } from "class-validator";

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsInt()
    @Min(18)
    @Max(120)
    age?: number;
}
