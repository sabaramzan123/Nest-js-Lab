import { Exclude, Expose } from "class-transformer";

export class UserResponseDto{
    @Expose()
    id: number;
    name: string;
    email: string;
}