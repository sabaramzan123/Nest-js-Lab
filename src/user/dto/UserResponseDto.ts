import { Exclude, Expose } from "class-transformer";

export class UserResponseDto{
    @Exclude()
    id: number;
    name: string;
    email: string;
}