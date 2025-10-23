import { IsString, IsNumber, Min } from 'class-validator';

export class ProductItemDto {
  @IsString()
  productName: string;

  @IsNumber()
  @Min(1)
  quantity: number;

  @IsNumber()
  @Min(0)
  price: number;
}
