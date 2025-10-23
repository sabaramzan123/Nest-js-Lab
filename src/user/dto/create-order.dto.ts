import { Type } from 'class-transformer';
import { IsString, IsNumber, ValidateNested, IsArray, Min } from 'class-validator';
import { CustomerInfoDto } from './customer-info.dto';
import { ProductItemDto } from './product-item.dto';

export class CreateOrderDto {
  @IsString()
  orderId: string;

  @ValidateNested()
  @Type(() => CustomerInfoDto)
  customer: CustomerInfoDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductItemDto)
  products: ProductItemDto[];

  @IsNumber()
  @Min(0)
  totalAmount: number;

  @IsString()
  orderStatus: string;
}
