import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateCostumerDto {

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly ci: string;
}
export class UpdateCostumerDto extends PartialType(CreateCostumerDto) {}
