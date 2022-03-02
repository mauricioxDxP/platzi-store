import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
export class CreateOrderDto {

  @IsNumber()
  @IsNotEmpty()
  readonly userId: number;

  @IsNumber()
  @IsNotEmpty()
  readonly productId: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly quantity: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly total: number;
}
export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
