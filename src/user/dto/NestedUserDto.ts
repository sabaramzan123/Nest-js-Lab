import { IsString } from 'class-validator';

export class userAddressDto {
    @IsString()
    street: string;
    @IsString()
    city: string
}